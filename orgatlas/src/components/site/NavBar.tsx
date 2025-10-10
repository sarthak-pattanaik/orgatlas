"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, GitBranch } from "lucide-react";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
        <div className="flex items-center gap-3">
          <GitBranch className="h-5 w-5 text-red-500" />
          <Link href="/" className="font-semibold">OrgAtlas</Link>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <Link href="/explore">Explore</Link>
          <Link href="/org/microsoft">Demo</Link>
          <Link href="/embed">Embed</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild className="bg-red-500 hover:bg-red-600">
            <Link href="/explore">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
