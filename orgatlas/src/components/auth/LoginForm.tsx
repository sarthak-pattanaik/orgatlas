"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Mail, Lock, ShieldCheck } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useToast } from "@/components/ui/toast";

const oauthProviders = [
  { label: "Continue with Google", id: "google" },
  { label: "Continue with Microsoft", id: "microsoft" },
  { label: "Continue with LinkedIn", id: "linkedin" },
];

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/app/discover";
  const { login, loginAsDemo } = useAuth();
  const { pushToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await login({ email, password });
      router.push(redirectTo);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Unable to log in");
      pushToast({ title: "Login failed", description: "Double-check your email and password.", variant: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemo = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      await loginAsDemo();
      router.push("/app/discover");
    } catch (err) {
      console.error(err);
      setError("Unable to start demo session");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOAuth = (provider: string) => {
    pushToast({
      title: `${provider} sign-in coming soon`,
      description: "We will notify you when this provider is live.",
      variant: "warning",
    });
  };

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-24">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Secure workspace access
        </span>
        <h1 className="text-4xl font-semibold tracking-tight">Log in to OrgAtlas</h1>
        <p className="text-base text-muted-foreground">
          Continue to your OrgAtlas workspace to explore Discover, People, Jobs, and AI Mode. New here? Use the demo workspace
          to try the product instantly.
        </p>
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
            <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
            Enterprise-grade security
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            OrgAtlas uses role-based access controls, SSO, and audit logs to keep your data safe. Questions? Reach out to
            hello@orgatlas.app.
          </p>
        </div>
      </div>
      <div className="rounded-2xl border bg-card p-8 shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="email">
              Email
            </label>
            <div className="flex items-center gap-2 rounded-lg border bg-background px-3">
              <Mail className="h-4 w-4 text-muted-foreground" aria-hidden />
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 w-full border-0 bg-transparent text-sm outline-none"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="password">
              Password
            </label>
            <div className="flex items-center gap-2 rounded-lg border bg-background px-3">
              <Lock className="h-4 w-4 text-muted-foreground" aria-hidden />
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                minLength={3}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-11 w-full border-0 bg-transparent text-sm outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
            Log in
          </button>
        </form>
        <div className="mt-8 space-y-3">
          {oauthProviders.map((provider) => (
            <button
              key={provider.id}
              type="button"
              onClick={() => handleOAuth(provider.label)}
              className="w-full rounded-md border border-dashed border-muted-foreground/40 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              {provider.label}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={handleDemo}
            disabled={isSubmitting}
            className="w-full rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-70"
          >
            Continue as demo user
          </button>
          <p className="text-center text-sm text-muted-foreground">
            Don’t have an account? <Link href="/contact" className="font-semibold text-primary">Talk to sales</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
