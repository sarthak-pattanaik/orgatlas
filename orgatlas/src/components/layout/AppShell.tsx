"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Search, UserRound, ChevronsUpDown } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { cn } from "@/lib/utils";
import { useAnalytics } from "@/hooks/useAnalytics";

const appTabs = [
  { href: "/app/discover", label: "Discover" },
  { href: "/app/people", label: "People" },
  { href: "/app/jobs", label: "Jobs" },
  { href: "/app/ai", label: "AI Mode" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, status, logout } = useAuth();
  const track = useAnalytics();

  useEffect(() => {
    if (!pathname.startsWith("/app")) {
      return;
    }
    const activeTab = appTabs.find((tab) => pathname.startsWith(tab.href));
    track("app_tab_view", { tab: activeTab?.label ?? "Unknown", path: pathname });
  }, [pathname, track]);

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/app/discover" className="flex items-center gap-2 text-base font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
              OA
            </span>
            OrgAtlas Workspace
          </Link>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary sm:inline-flex"
          >
            <ChevronsUpDown className="h-4 w-4" aria-hidden />
            Switch workspace
          </button>
          <div className="hidden flex-1 items-center gap-2 rounded-lg border bg-background px-3 py-2 sm:flex">
            <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
            <input
              type="search"
              placeholder="Search companies, people, or notes"
              className="h-8 w-full border-0 bg-transparent text-sm outline-none"
              disabled
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-right sm:flex">
              <p className="text-xs font-semibold text-foreground">
                {status === "authenticated" && user ? user.name : status === "loading" ? "Loading…" : "Guest"}
              </p>
              <p className="text-xs text-muted-foreground">
                {status === "authenticated" && user ? user.email : "No workspace"}
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <UserRound className="h-4 w-4 text-primary" aria-hidden />
            </div>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition hover:border-destructive hover:text-destructive"
            >
              <LogOut className="h-3.5 w-3.5" aria-hidden />
              Logout
            </button>
          </div>
        </div>
        <nav className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 pb-3 sm:px-6">
          {appTabs.map((tab) => {
            const isActive = pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition",
                  isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="flex-1 bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">{children}</div>
      </main>
    </div>
  );
}
