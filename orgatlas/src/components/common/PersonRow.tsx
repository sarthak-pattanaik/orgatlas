import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function PersonRow({ avatarUrl, name, title, company }: { avatarUrl?: string; name: string; title?: string; company?: string }) {
  return (
    <div className="flex items-center gap-3 py-2 px-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-md">
      <Checkbox />
      <img src={avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`} alt={name} className="h-8 w-8 rounded-full" />
      <div className="min-w-0">
        <div className="text-sm font-medium truncate">{name}</div>
        <div className="text-xs text-neutral-500 truncate">{title}{company ? ` • ${company}` : ""}</div>
      </div>
      <Button variant="outline" size="sm" className="ml-auto">Contact</Button>
    </div>
  );
}
