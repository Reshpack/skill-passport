import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function PublicProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Header / legend area */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">@{username}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Legend intro goes here (profile bio). This page will become the public profile.
          </CardContent>
        </Card>

        {/* Skill cubes grid placeholder */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="cursor-pointer hover:shadow-sm transition">
              <CardContent className="p-4">
                <div className="font-medium">Skill {i + 1}</div>
                <div className="text-xs text-muted-foreground">Click to expand (later)</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="pt-8 text-sm text-muted-foreground">
          © Skill Passport
        </footer>
      </div>
    </main>
  );
}
