import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DEMO_CREDENTIALS } from "@/lib/auth/constants";
import { LoginForm } from "./LoginForm";

export const metadata = {
  title: "Log in",
  description: "Access the OrgAtlas workspace",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col items-center justify-center px-6 py-16">
      <Card className="w-full border-border/60 bg-card/80 shadow-lg">
        <CardHeader className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">OrgAtlas Workspace</p>
          <CardTitle className="text-3xl font-semibold">Log in</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Use the shared demo credentials ({DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}) to explore the authenticated workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <LoginForm />
          <p className="text-xs text-muted-foreground">
            Don&apos;t have access yet? <Link href="/waitlist" className="font-medium text-primary">Join the waitlist</Link> to request an invite.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
