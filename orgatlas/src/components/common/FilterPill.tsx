import { Badge } from "@/components/ui/badge";

export function FilterPill({ label }: { label: string }) {
  return (
    <Badge 
      variant="secondary" 
      className="cursor-pointer hover:bg-primary/10 hover:text-primary border-border/50 transition-all duration-200 px-3 py-1.5 text-sm font-medium"
    >
      {label}
    </Badge>
  );
}
