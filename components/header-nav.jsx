import Link from "next/link";
import { Logo } from "./logo";
import ModeToggle from "./mode-toggle";
import login from "@/app/login/page.jsx";
//Logo Component
// Mode toggle Component

//use PascalCase for component names to follow React conventions
export default function HeaderNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center">
        {/* Website Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
          <div className="text-primary text-xl font-bold">Cinsecope.lk</div>
        </Link>
        {/* Mode toggle Component */}
        <nav className="ml-auto flex items-center gap-4">
          <Link
            href="/movies"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Movies
          </Link>
          <Link
            href="/genres"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Genres
          </Link>
          <Link
            href="/about"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/admin"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Admin
          </Link>
          <Link
            href="/login"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Login
          </Link>
          <ModeToggle />
        </nav>
         
      </div>
    </header>
  );
}
