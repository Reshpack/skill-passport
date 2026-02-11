import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Later: show your skills count, recent posts, and a big “Add skill” button.
        </CardContent>
      </Card>
    </div>
  );
}
