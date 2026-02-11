import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto max-w-5xl p-4 flex items-center justify-between">
          <Link href="/app" className="font-semibold">
            Skill Passport
          </Link>

          <nav className="flex gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/app">Dashboard</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/app/skills/new">Add skill</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/app/settings">Settings</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-6">{children}</main>
    </div>
  );
}
