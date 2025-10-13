import Link from "next/link";
import { ArrowRight, Compass, LayoutGrid, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    href: "/app/discover",
    title: "Discover",
    description: "Search for target accounts with rich firmographic filters.",
    icon: Compass,
  },
  {
    href: "/app/explore",
    title: "Org charts",
    description: "Browse curated organization charts for enterprise companies.",
    icon: LayoutGrid,
  },
  {
    href: "/app/people",
    title: "People",
    description: "Identify key leaders, reporting lines, and decision makers.",
    icon: Users,
  },
];

export default function AppHomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-10 rounded-3xl border border-border/60 bg-card/60 p-10 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">Welcome back</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">Your go-to workspace for org intelligence</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Stay on top of company changes, uncover the right people to engage, and keep your team aligned around verified org data.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="font-semibold">
            <Link href="/app/discover">
              Start discovering
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="/app/people">View saved people</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {quickLinks.map((link) => (
          <Card key={link.href} className="group border-border/60 bg-card/80 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{link.title}</CardTitle>
                <link.icon className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-sm text-muted-foreground">
              <p>{link.description}</p>
              <Button asChild variant="ghost" className="self-start px-0 font-semibold text-primary">
                <Link href={link.href}>
                  Open {link.title.toLowerCase()}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
