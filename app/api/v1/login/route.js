import { NextResponse } from "next/server";

const VALIED_EMAIL = "adminpro@gmail.com";
const VALIED_PASSWORD = "Admin123";
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (email === VALIED_EMAIL && password === VALIED_PASSWORD) {
      return NextResponse.json({ message: "Login successful" });
    } else {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
 