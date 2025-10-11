import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PaywallCard({ title = "Upgrade to unlock", description = "View full org charts and unlimited profiles.", cta = "See pricing" }: { title?: string; description?: string; cta?: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{description}</div>
        <div className="mt-3"><Button asChild className="bg-red-500 hover:bg-red-600"><a href="/pricing">{cta}</a></Button></div>
      </CardContent>
    </Card>
  );
}
