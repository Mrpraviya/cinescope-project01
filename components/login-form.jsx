"use client";
import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export function LoginForm({ className, ...props }) {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [isLoading, setIsLoading] = useState(false);
  const validateForm = ({ email, password }) => {
    console.log("Email & Password:", email, password);
    if (email === "") {
      setError({
        error: true,
        message: "Email is required",
      });
      return false;
    } else if (password === "") {
      setError({
        error: true,
        message: "Password is required",
      });
      return false;
    } else if (!EMAIL_REGEX.test(email)) {
      setError({
        error: true,
        message: "Invalid email format",
      });
      return false;
    } else if (!PASSWORD_REGEX.test(password)) {
      setError({
        error: true,
        message:
          "Password must be 6+ characters and include letters and numbers.",
      });
      return false;
    }
    setError(DEFAULT_ERROR);
    return true; // Return true if validation is successful, otherwise return false
    // Implement form validation logic here
    // You can use libraries like Yup or implement custom validation
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (validateForm({ email, password })) {
      setIsLoading(true);
      try {
        const loginResponse = await fetch("/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (!loginResponse.ok) {
          const errorData = await loginResponse.json();
          setError({
            error: true,
            message: errorData.error || "Login failed. Please try again.",
          });
        } else {
          const loginData = await loginResponse.json();
          console.log("Login successful:", loginData);
        }
      } catch (error) {
        setError({
          error: true,
          message: "An error occurred during login. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("validation failed, not submitting form.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold text-3xl">
            Login to your account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitForm} noValidate>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email :</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  // autocomplete="email"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password :</FieldLabel>
                  <Link
                    href="/"
                    className="ml-auto inline-block text-sm text-blue-500 underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  // autocomplete="current-password"
                  required
                />
              </Field>
              <div className="flex justify-center">
                {error.error && (
                  <span className="text-red-500 text-sm animate-pulse duration-600">
                    {error.message}
                  </span>
                )}
              </div>
              <Field>
                <Button
                  type="submit"
                  className="hover: cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="hover: cursor-pointer"
                >
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="ml-auto inline-block text-sm text-blue-500 underline-offset-4 hover:underline"
                  >
                    Sign up
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
