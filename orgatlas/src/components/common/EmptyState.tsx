import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EmptyState({ title, description, actionHref, actionLabel }: { title: string; description?: string; actionHref?: string; actionLabel?: string }) {
  return (
    <div className="border border-dashed rounded-lg p-6 text-center text-sm text-neutral-600 dark:text-neutral-300">
      <div className="font-medium text-neutral-800 dark:text-neutral-100">{title}</div>
      {description ? <div className="mt-1">{description}</div> : null}
      {actionHref && actionLabel ? (
        <div className="mt-3">
          <Button asChild size="sm">
            <Link href={actionHref} aria-label={actionLabel}>{actionLabel}</Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
