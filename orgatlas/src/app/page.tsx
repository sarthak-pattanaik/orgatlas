"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/data/companies";
import {
  BarChart,
  Building2,
  Share2,
  Users,
  Target,
  Sparkles,
  Plug,
  Search,
  GitBranch,
} from "lucide-react";
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
    <main className="relative min-h-screen overflow-hidden bg-background font-sans">
      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full glow-orb" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[420px] w-[420px] rounded-full glow-orb" />
      <div className="pointer-events-none absolute inset-x-1/3 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full glow-orb" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <section className="space-y-24">
          <div className="relative overflow-hidden rounded-3xl p-12 surface-panel">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.6_0.25_25/0.25),transparent_60%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div className="space-y-8">
                <span className="section-eyebrow w-fit bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> OrgAtlas platform
                </span>
                <h1 className="text-5xl font-semibold leading-tight tracking-tight text-balance sm:text-7xl">
                  Explore, contribute to, and share company org charts
                </h1>
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  The enterprise-grade org intelligence platform for SDRs, analysts, recruiters, and researchers. Map decision makers,
                  understand team structures, and accelerate your research.
                </p>
                <div className="max-w-2xl">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search companies or people..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        className="h-12 flex-1 rounded-xl border border-border/60 bg-background/60 pl-12 text-base text-foreground transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:bg-background"
                      />
                    </div>
                    <Button asChild size="lg" className="h-12 w-full rounded-xl px-8 font-medium shadow-glow transition-all duration-200 hover:opacity-90 sm:w-auto">
                      <Link href={q ? `/discover?q=${encodeURIComponent(q)}` : "/discover"}>Search</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="h-12 rounded-xl px-8 font-medium shadow-glow transition-all duration-200 hover:opacity-90">
                    <Link href="/discover">Discover Companies</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-xl px-8 font-medium text-primary transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    <Link href="/org/microsoft">View Demo Org</Link>
                  </Button>
                </div>
              </div>

              <div className="hidden flex-col justify-between gap-6 rounded-2xl border border-border/40 bg-background/30 p-6 shadow-glow backdrop-blur md:flex">
                {heroHighlights.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/60 p-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.label}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10 text-center animate-fade-in">
            <div className="flex justify-center">
              <span className="section-eyebrow">Trusted by research-driven teams</span>
            </div>
            <p className="section-subheading">
              Teams across GTM, research, and recruiting rely on OrgAtlas for always-fresh org intelligence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 transition-opacity duration-300 hover:opacity-100">
              {companies.slice(0, 5).map((c) => (
                <div key={c.id} className="rounded-xl border border-border/40 bg-muted/20 px-6 py-4">
                  <Image src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} width={140} height={40} className="h-8 w-auto" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-16 space-y-6 text-center">
              <span className="section-eyebrow">How it works</span>
              <h2 className="section-heading">From search to share in a few clicks</h2>
              <p className="section-subheading">
                Get started in minutes with an intuitive workspace designed to keep teams aligned and informed.
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

          <div>
            <div className="mb-16 space-y-6 text-center">
              <span className="section-eyebrow">Suggested companies</span>
              <h2 className="section-heading">Start with fast-growing organizations</h2>
              <p className="section-subheading">
                Discover organizations that match your research needs and keep your target lists up to date.
              </p>
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

          <div>
            <div className="mb-16 space-y-6 text-center">
              <span className="section-eyebrow">Use cases</span>
              <h2 className="section-heading">Built for enterprise teams</h2>
              <p className="section-subheading">
                Powerful tools designed for professionals who need accurate org intelligence at speed.
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

          <div>
            <div className="mb-12 space-y-6 text-center">
              <span className="section-eyebrow">Testimonials</span>
              <h2 className="section-heading">What teams say</h2>
              <p className="section-subheading">
                Customer-first feedback from GTM, diligence, and recruiting partners around the world.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="border-border/60 bg-card/80 shadow-glow">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <p className="text-base text-foreground/90">{testimonial.quote}</p>
                    <div className="space-y-1 text-left text-sm text-muted-foreground">
                      <div className="font-medium text-foreground">{testimonial.author}</div>
                      <div>{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12 space-y-6 text-center">
              <span className="section-eyebrow">Get started</span>
              <h2 className="section-heading">Launch OrgAtlas in minutes</h2>
              <p className="section-subheading">
                A guided onboarding flow helps teams import lists, collaborate securely, and deploy insights instantly.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {onboardingSteps.map((step) => (
                <Card key={step.step} className="border-border/60 bg-card/80 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base font-medium tracking-tight">{step.step}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{step.description}</CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 space-y-4">
              <span className="section-eyebrow">Popular industries</span>
              <h2 className="section-heading text-left">Keep tabs on the sectors you care about</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((label) => (
                <Link
                  key={label}
                  href={`/discover?industry=${encodeURIComponent(label)}`}
                  className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-4">
                <span className="section-eyebrow">Top companies</span>
                <h2 className="section-heading text-left">See what&apos;s trending on OrgAtlas</h2>
              </div>
              <Button asChild variant="link" className="self-start text-primary font-medium md:self-center">
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
                      <div className="line-clamp-3 text-sm text-muted-foreground">{c.description}</div>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span>{c.employee_count?.toLocaleString()} employees</span>
                        <span>{c.hq_location}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12 space-y-6 text-center">
              <span className="section-eyebrow">Community impact</span>
              <h2 className="section-heading">Powered by a global network</h2>
              <p className="section-subheading">
                Contributors and teams around the globe enrich the dataset so you always have the freshest view.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {communityStats.map((stat) => (
                <Card key={stat.label} className="border-border/60 bg-card/80 text-center shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-semibold text-primary">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="border-border/60 bg-card/80">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Plug className="h-4 w-4" /> Integrations & Export
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Embed charts on your site or export as PNG for decks. API coming soon.
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-border/60 text-primary font-medium hover:bg-primary/10"
                  >
                    <Link href="/embed">Open Embed</Link>
                  </Button>
                  <Button asChild className="rounded-xl font-medium">
                    <Link href="/api">Join API waitlist</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <footer className="border-t border-border/60 bg-card/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
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
