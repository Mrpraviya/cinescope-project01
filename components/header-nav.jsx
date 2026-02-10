import Link from "next/link";
//Logo Component
// Mode toggle Component

//use PascalCase for component names to follow React conventions
export default function HeaderNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex item-center gap-1">
          <div className="text-red-400 font-bold">SP</div>
          <div className="text-teal-400 font-bold">Cinsecope.lk</div>
        </Link>
      </div>
    </header>
  );
}
