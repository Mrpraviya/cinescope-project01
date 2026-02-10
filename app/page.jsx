import HeaderNav from "@/components/header-nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
       <HeaderNav />
      <main className="flex-1 bg-primary">
        <p>This is the home page of my Next.js application.</p>
      </main>
        <footer className="flex-1 bg-yellow-400">
          <p>&copy; 2024 My Next.js App. All rights reserved.</p>
        </footer>
    </div>
  );
}
