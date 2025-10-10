import { Badge } from "@/components/ui/badge";

export function FilterPill({ label }: { label: string }) {
  return (
    <Badge variant="secondary" className="cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
      {label}
    </Badge>
  );
}
