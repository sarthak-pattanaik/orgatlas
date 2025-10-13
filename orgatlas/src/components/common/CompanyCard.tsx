import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase } from "lucide-react";

export function CompanyCard({ slug, name, logoUrl, description, followers, jobs }: { slug: string; name: string; logoUrl?: string; description?: string; followers?: number; jobs?: number }) {
  return (
    <Link href={`/app/org/${slug}`}>
      <Card className="gradient-card border-border/50 shadow-sm hover-lift h-full group">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-4 text-lg leading-none">
            <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors duration-200">
              <Image src={logoUrl ?? `/${slug}.svg`} alt={name} width={32} height={32} className="h-8 w-8" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate">{name}</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          {description ? (
            <div className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
              {description}
            </div>
          ) : null}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {typeof followers === "number" && (
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {followers.toLocaleString()} followers
              </span>
            )}
            {typeof jobs === "number" && (
              <span className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {jobs} jobs
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
