import Link from "next/link";
import { companies } from "@/data/companies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExplorePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Explore Companies</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((c) => (
          <Link key={c.id} href={`/app/org/${c.slug}`}>
            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{c.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{c.description}</p>
                {c.employee_count ? (
                  <p className="mt-3 text-xs text-neutral-500">{c.employee_count.toLocaleString()} employees</p>
                ) : null}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
