"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sun, Moon, GitBranch, Bell, Bookmark, Cog, Search } from "lucide-react";
import { LogoutButton } from "@/components/site/LogoutButton";

const navItems = [
  { href: "/app", label: "Overview" },
  { href: "/app/discover", label: "Discover" },
  { href: "/app/explore", label: "Explore" },
  { href: "/app/people", label: "People" },
];

export function AppNavBar({ userEmail }: { userEmail: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 h-16">
        <div className="flex items-center gap-3 min-w-[180px]">
          <div className="p-2 rounded-lg gradient-primary shadow-glow">
            <GitBranch className="h-5 w-5 text-primary-foreground" />
          </div>
          <Link href="/app" className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            OrgAtlas Workspace
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:block relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search companies or people..."
              className="w-[280px] pl-10 bg-muted/50 border-border/50 focus:bg-background focus:border-primary/50 transition-all duration-200"
            />
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-accent/50 transition-colors" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-accent/50 transition-colors" aria-label="Saved">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-accent/50 transition-colors" aria-label="Settings">
              <Cog className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={toggle}
              className="relative h-9 px-3 font-medium hover:bg-accent/50 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="ml-2 hidden sm:inline">{mounted ? (isDark ? "Light" : "Dark") : "Theme"}</span>
            </Button>
          </div>

          <div className="hidden lg:flex flex-col items-end text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{userEmail}</span>
            <span>Authenticated</span>
          </div>

          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
