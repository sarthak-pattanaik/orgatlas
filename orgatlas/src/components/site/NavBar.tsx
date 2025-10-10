"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sun, Moon, GitBranch, Bell, Bookmark, Cog } from "lucide-react";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center gap-4 px-6 h-14">
        <div className="flex items-center gap-3 min-w-[160px]">
          <GitBranch className="h-5 w-5 text-red-500" />
          <Link href="/" className="font-semibold">OrgAtlas</Link>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-300">
          <Link href="/">Home</Link>
          <Link href="/discover">Discover</Link>
          <Link href="/people">People</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/">AI Mode</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <Input placeholder="Search" className="w-[260px]" />
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" aria-label="Saved"><Bookmark className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" aria-label="Settings"><Cog className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}
