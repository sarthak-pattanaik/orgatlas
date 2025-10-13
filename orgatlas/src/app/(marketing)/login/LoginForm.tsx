"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <SubmitButton />
    </form>
  );
}
