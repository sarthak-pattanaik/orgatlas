import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginAction, demoCredentials, type AuthState } from "@/lib/auth/actions";

export const metadata = {
  title: "Log in",
  description: "Access the OrgAtlas workspace",
};

function LoginForm() {
  "use client";

  const initialState: AuthState = {};
  const [state, formAction, isPending] = React.useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="demo@orgatlas.com"
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-foreground">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
      </div>
      {state?.error ? (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      ) : null}
      <Button type="submit" className="w-full font-semibold" disabled={isPending}>
        {isPending ? "Signing in..." : "Log in"}
      </Button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col items-center justify-center px-6 py-16">
      <Card className="w-full border-border/60 bg-card/80 shadow-lg">
        <CardHeader className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">OrgAtlas Workspace</p>
          <CardTitle className="text-3xl font-semibold">Log in</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Use the shared demo credentials ({demoCredentials.email} / {demoCredentials.password}) to explore the authenticated workspace.
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
