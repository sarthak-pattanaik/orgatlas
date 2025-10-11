"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/data/companies";
import { BarChart, Building2, Share2, Users, Target, Sparkles, Plug, Search, GitBranch } from "lucide-react";
import * as React from "react";
import Image from "next/image";

export default function Home() {
  const [q, setQ] = React.useState("");

  const howItWorks = [
    {
      icon: Building2,
      title: "Discover",
      description: "Find companies and teams with powerful search, filters, and saved views.",
    },
    {
      icon: Users,
      title: "Explore",
      description: "Zoom, pan, and expand org charts to map key decision makers in seconds.",
    },
    {
      icon: Sparkles,
      title: "Contribute",
      description: "Suggest edits, refine titles, and keep structures accurate with crowd insights.",
    },
    {
      icon: Share2,
      title: "Share",
      description: "Export, embed, or publish private snapshots for stakeholders across your org.",
    },
  ];

  const useCases = [
    {
      icon: Target,
      title: "SDRs",
      description: "Identify buying committees and route outreach to the right people every time.",
    },
    {
      icon: BarChart,
      title: "Analysts",
      description: "Understand org structures to inform diligence, comp sets, and strategy briefs.",
    },
    {
      icon: Users,
      title: "Recruiters",
      description: "Map talent pools, monitor hiring signals, and target teams with precision.",
    },
    {
      icon: Building2,
      title: "Researchers",
      description: "Compare companies by team shape, headcount, and leadership movements.",
    },
  ];

  const testimonials = [
    {
      quote: "OrgAtlas gives our SDRs the confidence to reach out with context in minutes.",
      author: "Marina Patel",
      role: "Revenue Operations, Northbeam",
    },
    {
      quote: "Superb diligence partner — org visibility has become a competitive advantage.",
      author: "Carlos Chen",
      role: "Principal, Apex Ventures",
    },
    {
      quote: "The clean UI and fast exports make sharing org snapshots effortless for our team.",
      author: "Emma Lutz",
      role: "Lead Recruiter, Stratus AI",
    },
  ];

  const onboardingSteps = [
    {
      step: "1. Discover companies",
      description: "Browse org charts and map the teams you care about.",
    },
    {
      step: "2. Build people lists",
      description: "Save targets by function, seniority, or region.",
    },
    {
      step: "3. Share & export",
      description: "Embed charts or export snapshots for briefs and decks.",
    },
  ];

  const industries = ["Software", "IT Services", "AI", "Fintech", "Manufacturing", "Healthcare"];

  const communityStats = [
    { label: "Companies mapped", value: "20k+" },
    { label: "People indexed", value: "1.5M+" },
    { label: "Edits contributed", value: "150k+" },
    { label: "Active contributors", value: "8k+" },
  ];

  const heroHighlights = [
    {
      icon: Users,
      label: "20k+ org charts",
      description: "Continuously curated by analysts and operators.",
    },
    {
      icon: BarChart,
      label: "Signal-rich intel",
      description: "Data-backed structure changes and hiring signals.",
    },
    {
      icon: Share2,
      label: "Effortless sharing",
      description: "Export decks, embed live charts, or create briefs.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="space-y-24 animate-slide-up">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-12 shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent opacity-80 blur-3xl"></div>
            <div className="relative space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-4 w-4" />
                OrgAtlas
              </span>
              <h1 className="text-5xl font-bold leading-[1.05] text-balance sm:text-7xl">
                Explore, contribute to, and share company org charts
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
                The enterprise-grade org intelligence platform for SDRs, analysts, recruiters, and researchers. Map decision
                makers, understand team structures, and accelerate your research.
              </p>

              <div className="max-w-2xl">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search companies or people..."
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      className="h-12 flex-1 rounded-xl border border-border/60 bg-background/60 pl-12 text-base text-foreground transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:bg-background"
                    />
                  </div>
                  <Button asChild size="lg" className="h-12 w-full rounded-xl px-8 font-semibold shadow-glow transition-all duration-200 hover:opacity-90 sm:w-auto">
                    <Link href={q ? `/discover?q=${encodeURIComponent(q)}` : "/discover"}>Search</Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="h-12 rounded-xl px-8 font-semibold shadow-glow transition-all duration-200 hover:opacity-90">
                  <Link href="/discover">Discover Companies</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl px-8 font-semibold text-primary transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="/org/microsoft">View Demo Org</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Trusted by */}
          <div className="animate-fade-in">
            <div className="mb-8 text-center text-sm font-medium text-muted-foreground">Trusted by research-driven teams</div>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
              {companies.slice(0, 3).map((c) => (
                <div key={c.id} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                  <Image src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} width={120} height={30} className="h-8 w-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How it works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our intuitive platform designed for enterprise teams
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item) => (
                <Card key={item.title} className="gradient-card border-border/50 shadow-sm hover-lift group">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary transition-transform duration-200 group-hover:scale-110">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-medium tracking-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Suggested companies */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Suggested companies</h2>
                <p className="text-muted-foreground">Discover organizations that match your research needs</p>
              </div>
              <Button asChild variant="outline" className="rounded-xl border-border/60 text-primary hover:bg-primary/10">
                <Link href="/discover">See all</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {companies.slice(0, 3).map((c) => (
                <Link key={c.id} href={`/org/${c.slug}`} className="group block h-full">
                  <Card className="gradient-card h-full border-border/50 shadow-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-4 text-lg font-medium leading-none">
                        <div className="rounded-lg bg-muted/40 p-2 transition-colors duration-200 group-hover:bg-primary/10">
                          <Image src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} width={32} height={32} className="h-8 w-8" />
                        </div>
                        {c.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="min-h-[40px] text-sm text-muted-foreground/90">
                        {c.description}
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {c.employee_count?.toLocaleString()} employees
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="h-4 w-4" />
                          {Math.floor((c.employee_count ?? 1000) / 10)} followers
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-border/60 text-primary font-medium hover:bg-primary/10"
              >
                <Link href="/discover">See all companies</Link>
              </Button>
            </div>
          </div>

          {/* Use cases */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Built for enterprise teams</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful tools designed for professionals who need accurate org intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item) => (
                <Card key={item.title} className="gradient-card border-border/50 shadow-sm hover-lift group">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 transition-transform duration-200 group-hover:scale-110">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-medium tracking-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-2xl font-bold text-center">What teams say</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[`“Helps our SDRs find champions in minutes.”`, `“Superb for diligence — team structures matter.”`, `“Clean, fast, and easy to share org views.”`].map((quote, i) => (
                <Card key={i} className="border-border/60 bg-card/80">
                  <CardContent className="p-6 text-sm text-muted-foreground">{quote}</CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Get started */}
          <div>
            <h2 className="text-2xl font-bold text-center">Get started in minutes</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">1. Discover companies</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Browse org charts and map the teams you care about.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">2. Build people lists</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Save targets by function, seniority, or region.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">3. Share & export</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Embed charts or export snapshots for briefs and decks.</CardContent>
              </Card>
            </div>
          </div>

          {/* Popular industries */}
          <div>
            <h2 className="text-2xl font-bold">Popular industries</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Software" },
                { label: "IT Services" },
                { label: "AI" },
                { label: "Fintech" },
                { label: "Manufacturing" },
                { label: "Healthcare" },
              ].map((f) => (
                <Link
                  key={f.label}
                  href={`/discover?industry=${encodeURIComponent(f.label)}`}
                  className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs hover:bg-primary/10"
                >
                  {f.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Top companies */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top companies</h2>
              <Button asChild variant="link" className="text-primary">
                <Link href="/discover">View more</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {companies.map((c) => (
                <Link key={c.id} href={`/org/${c.slug}`} className="group block h-full">
                  <Card className="border-border/60 bg-card/80 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-base font-medium">
                        <Image src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} width={96} height={24} className="h-6 w-auto" />
                        {c.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground line-clamp-3">{c.description}</div>
                      <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{c.employee_count?.toLocaleString()} employees</span>
                        <span>{c.hq_location}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Community stats */}
          <div>
            <h2 className="text-2xl font-bold text-center">Community impact</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">20k+</div><div className="mt-1 text-xs text-muted-foreground">Companies mapped</div></CardContent></Card>
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">1.5M+</div><div className="mt-1 text-xs text-muted-foreground">People indexed</div></CardContent></Card>
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">150k+</div><div className="mt-1 text-xs text-muted-foreground">Edits contributed</div></CardContent></Card>
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">8k+</div><div className="mt-1 text-xs text-muted-foreground">Active contributors</div></CardContent></Card>
            </div>
          </div>

          {/* Integrations CTA */}
          <div>
            <Card className="border-border/60 bg-card/80">
              <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-semibold"><Plug className="h-4 w-4" /> Integrations & Export</div>
                  <div className="mt-1 text-sm text-muted-foreground">Embed charts on your site or export as PNG for decks. API coming soon.</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" className="rounded-xl border-border/60 text-primary hover:bg-primary/10">
                    <Link href="/embed">Open Embed</Link>
                  </Button>
                  <Button asChild className="rounded-xl">
                    <Link href="/api">Join API waitlist</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="mb-4 font-medium text-foreground">Company</div>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground transition-colors hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground transition-colors hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-medium text-foreground">Product</div>
              <ul className="space-y-3">
                <li>
                  <Link href="/discover" className="text-muted-foreground transition-colors hover:text-foreground">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="text-muted-foreground transition-colors hover:text-foreground">
                    People
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="text-muted-foreground transition-colors hover:text-foreground">
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-medium text-foreground">Business</div>
              <ul className="space-y-3">
                <li>
                  <Link href="/pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/sales" className="text-muted-foreground transition-colors hover:text-foreground">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-muted-foreground transition-colors hover:text-foreground">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-medium text-foreground">Developers</div>
              <ul className="space-y-3">
                <li>
                  <Link href="/api" className="text-muted-foreground transition-colors hover:text-foreground">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground transition-colors hover:text-foreground">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-muted-foreground transition-colors hover:text-foreground">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-medium text-foreground">Connect</div>
              <ul className="space-y-3">
                <li>
                  <a href="https://x.com" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground">
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@orgatlas.app" className="text-muted-foreground transition-colors hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/15 p-1.5">
                <GitBranch className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">OrgAtlas</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OrgAtlas •
              <Link href="/terms" className="ml-1 transition-colors hover:text-foreground">
                Terms
              </Link>{" "}
              •
              <Link href="/privacy" className="ml-1 transition-colors hover:text-foreground">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
