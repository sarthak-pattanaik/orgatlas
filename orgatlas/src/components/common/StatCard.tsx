import { Card, CardContent } from "@/components/ui/card";

export function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <Card className="gradient-card border-border/50 shadow-sm hover-lift">
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
        <div className="text-2xl font-bold mt-2 text-foreground">{value}</div>
      </CardContent>
    </Card>
  );
}
