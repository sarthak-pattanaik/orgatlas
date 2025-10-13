"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { loginAction, type AuthState } from "@/lib/auth/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full font-semibold" disabled={pending}>
      {pending ? "Signing in..." : "Log in"}
    </Button>
  );
}

export function LoginForm() {
  const initialState: AuthState = {};
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-6" noValidate>
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
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <label className="flex items-center gap-2 font-medium text-foreground">
          <Checkbox id="remember" name="remember" disabled />
          Remember this device
        </label>
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Trouble signing in?
        </Link>
      </div>
      {state?.error ? (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert" aria-live="assertive">
          {state.error}
        </p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
