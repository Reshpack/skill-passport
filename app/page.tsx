import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Skill Passport</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A skills-first profile where every skill has proof: screenshots, links, and reflections.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* These will become real auth buttons later */}
              <Button asChild>
                <Link href="/app">Log in</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/app">Create account</Link>
              </Button>

              <Button asChild variant="secondary">
                <Link href="/u/testuser">View example profile</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle className="text-base">Post skills</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Add a skill with level, date achieved, and a short legend.
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Attach evidence</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Upload screenshots/files and add URLs (GitHub, demo, certificates).
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Share your URL</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Your public page at /u/username with clickable skill cubes.
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}