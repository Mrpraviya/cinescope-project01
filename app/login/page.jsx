import  { LoginForm }  from "@/components/login-form.jsx"
import Link from "next/link";
import {Logo} from "@/components/logo.jsx";
export default function Page() {
  return (
    <div className="container flex flex-col min-h-screen items-center">
      <Link href="/" className="flex items-center gap-2 absolute top-6 left-10">
        <Logo className="w-8 h-8" />
        <div className="text-primary text-xl font-bold">Cinsecope.lk</div>
      </Link>
    <div className="flex min-h-[calc(100vh-64px)] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    </div>
  )
}
