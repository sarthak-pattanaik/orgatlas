"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { GitBranch } from "lucide-react";

const marketingLinks = [
  { href: "/", label: "Home" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function MarketingNavBar() {
  const pathname = usePathname();

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    const found = marketingLinks.find((link) => isActive(pathname, link.href));
    return found?.href ?? "/";
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="rounded-xl bg-[#D70000]/10 p-2 text-[#D70000]">
            <GitBranch className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-[#1A1A1A]">
            OrgAtlas
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {marketingLinks.map((item) => {
            const active = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "text-[#D70000]"
                    : "text-neutral-500 hover:text-[#1A1A1A]"
                }`}
              >
                {active ? (
                  <span className="absolute inset-0 -z-10 rounded-full bg-[#D70000]/10" />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-neutral-600 transition-colors hover:text-[#1A1A1A] sm:inline"
          >
            Sign in
          </Link>
          <Button
            asChild
            className="rounded-[12px] bg-[#D70000] px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(215,0,0,0.35)] hover:bg-[#c00000]"
          >
            <Link href="/waitlist">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
