import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function CompanyCard({ slug, name, logoUrl, description, followers, jobs }: { slug: string; name: string; logoUrl?: string; description?: string; followers?: number; jobs?: number }) {
  return (
    <Link href={`/org/${slug}`}>
      <Card className="hover:shadow-sm transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-base">
            <img src={logoUrl ?? `/${slug}.svg`} alt={name} className="h-6" />
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {description ? <div className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{description}</div> : null}
          <div className="mt-2 text-xs text-neutral-500 flex items-center gap-3">
            {typeof followers === "number" ? <span>{followers.toLocaleString()} followers</span> : null}
            {typeof jobs === "number" ? <span>{jobs} jobs</span> : null}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
