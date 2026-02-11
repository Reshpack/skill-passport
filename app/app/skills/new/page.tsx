import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddSkillPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Skill</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Next step: build a form here (title, level, date achieved, description, visibility, evidence).
      </CardContent>
    </Card>
  );
}
