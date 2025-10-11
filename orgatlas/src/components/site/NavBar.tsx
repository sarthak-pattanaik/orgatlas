"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sun, Moon, GitBranch, Bell, Bookmark, Cog, Search } from "lucide-react";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 h-16">
        <div className="flex items-center gap-3 min-w-[180px]">
          <div className="p-2 rounded-lg gradient-primary shadow-glow">
            <GitBranch className="h-5 w-5 text-primary-foreground" />
          </div>
          <Link href="/" className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            OrgAtlas
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/discover", label: "Discover" },
            { href: "/people", label: "People" },
            { href: "/jobs", label: "Jobs" },
            { href: "/ai", label: "AI Mode" },
            { href: "/pricing", label: "Pricing" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
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
              variant="ghost" 
              size="icon" 
              onClick={toggle} 
              className="h-9 w-9 hover:bg-accent/50 transition-colors" 
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
