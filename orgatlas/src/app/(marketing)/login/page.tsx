import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DEMO_CREDENTIALS } from "@/lib/auth/constants";
import { LoginForm } from "./LoginForm";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Users, Workflow } from "lucide-react";

export const metadata = {
  title: "Log in",
  description: "Access the OrgAtlas workspace",
};

const highlights = [
  {
    title: "Trusted intelligence",
    description: "Every reporting line is verified by our research team before it reaches your workspace.",
    icon: ShieldCheck,
  },
  {
    title: "Shared workspace",
    description: "Collaborate with go-to-market, recruiting, and leadership teams in a single source of truth.",
    icon: Users,
  },
  {
    title: "Actionable workflows",
    description: "Trigger alerts when leaders change roles, org charts update, or new initiatives emerge.",
    icon: Workflow,
  },
];

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary">
            OrgAtlas Workspace Access
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">Sign in to your workspace</h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Use the shared demo credentials below to explore the authenticated experience. All activity is read-only and resets daily.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <highlight.icon className="h-5 w-5" />
                </div>
                <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="border-border/60 bg-card/80 shadow-xl backdrop-blur">
          <CardHeader className="space-y-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Authenticated demo</p>
              <CardTitle className="text-2xl font-semibold">Log in</CardTitle>
            </div>
            <CardDescription className="text-sm text-muted-foreground">
              Email: <span className="font-medium text-foreground">{DEMO_CREDENTIALS.email}</span>
              <br />
              Password: <span className="font-medium text-foreground">{DEMO_CREDENTIALS.password}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <LoginForm />
            <p className="text-xs text-muted-foreground">
              Need permanent access? <Link href="/waitlist" className="font-medium text-primary">Join the waitlist</Link> and our team will reach out with an invite.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
