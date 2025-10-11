"use client";

import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/data/companies";
import {
  BarChart,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Share2,
  Users,
  Target,
  Sparkles,
  Plug,
  Search,
  Quote,
  GitBranch,
} from "lucide-react";
import * as React from "react";
import Image from "next/image";

export default function Home() {
  const [q, setQ] = React.useState("");

  const getInitials = (value: string) =>
    value
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();

  const trustedCustomers = [
    {
      name: "Northbeam",
      team: "Revenue Operations",
      highlight: "Mapped 180 target accounts and prioritized outreach directly inside Salesforce.",
      metric: "3x faster sequences",
      metricDetail: "after 6 weeks",
    },
    {
      name: "Foresight Capital",
      team: "Investment Research",
      highlight: "Shares live charts with LPs to accelerate diligence and portfolio reviews.",
      metric: "40 hrs saved",
      metricDetail: "per sprint",
    },
    {
      name: "SignalWorks",
      team: "Market Intelligence",
      highlight: "Monitors leadership changes and hiring signals across 120 tracked companies.",
      metric: "Instant alerts",
      metricDetail: "pushed to Slack",
    },
    {
      name: "Apex Ventures",
      team: "Platform Team",
      highlight: "Onboards founders with curated talent maps and executive pipelines.",
      metric: "6 key hires",
      metricDetail: "sourced in Q1",
    },
    {
      name: "Stratus AI",
      team: "People Operations",
      highlight: "Combines workforce plans with public org data to model hiring scenarios in minutes.",
      metric: "Single source",
      metricDetail: "for headcount",
    },
  ];

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
      role: "Director of Revenue Operations",
      company: "Northbeam",
    },
    {
      quote: "Superb diligence partner — org visibility has become a competitive advantage.",
      author: "Carlos Chen",
      role: "Principal",
      company: "Apex Ventures",
    },
    {
      quote: "The clean UI and fast exports make sharing org snapshots effortless for our team.",
      author: "Emma Lutz",
      role: "Lead Recruiter",
      company: "Stratus AI",
    },
    {
      quote: "We rely on OrgAtlas signals to prep every leadership briefing and partner update.",
      author: "Ethan Cho",
      role: "Head of Market Intelligence",
      company: "SignalWorks",
    },
  ];

  const onboardingSteps = [
    {
      step: "1. Discover companies",
      description: "Browse org charts, territories, and hiring signals in one search.",
      tip: "Import target accounts from Salesforce or HubSpot to enrich instantly.",
      icon: Search,
    },
    {
      step: "2. Build people lists",
      description: "Save buying committees by function, seniority, or geography.",
      tip: "Tag champions, blockers, and influencers to sync with your sequences.",
      icon: Users,
    },
    {
      step: "3. Share & export",
      description: "Embed charts or export live snapshots for briefs and board decks.",
      tip: "Send updates to Slack or download branded PDFs with one click.",
      icon: Share2,
    },
  ];

  const industries = [
    { label: "Software", stat: "6,800 org charts", trend: "+12% new signals this quarter" },
    { label: "IT Services", stat: "4,100 org charts", trend: "Global delivery teams expanding" },
    { label: "AI", stat: "2,450 org charts", trend: "Funding announcements daily" },
    { label: "Fintech", stat: "1,980 org charts", trend: "Compliance hiring heats up" },
    { label: "Manufacturing", stat: "3,300 org charts", trend: "Operational excellence roles growing" },
    { label: "Healthcare", stat: "2,700 org charts", trend: "Clinical innovation teams scaling" },
  ];

  const communityStats = [
    { label: "Companies mapped", value: "20k+" },
    { label: "People indexed", value: "1.5M+" },
    { label: "Edits contributed", value: "150k+" },
    { label: "Active contributors", value: "8k+" },
  ];

  const companySignals: Record<string, string[]> = {
    tcs: [
      "Launching a global AI center of excellence in Q3",
      "Hiring 1,200 consultants across Europe",
      "Expanding cloud modernization practice",
    ],
    microsoft: [
      "Azure enterprise sales org restructured in North America",
      "Security engineering headcount up 18% YoY",
      "New VP of Copilot GTM announced",
    ],
    acme: [
      "Spinning up robotics innovation lab",
      "Centralizing procurement leadership",
      "Hiring senior manufacturing engineers",
    ],
    northbeam: [
      "Revenue ops team doubled for EMEA expansion",
      "Partner success pod stood up for strategic accounts",
      "Revamped data science leadership bench",
    ],
    "stratus-ai": [
      "Opened Austin talent hub for enterprise delivery",
      "Investing in executive recruiting partnerships",
      "New SVP of People Analytics hired",
    ],
    "apex-ventures": [
      "Portfolio talent network grew to 1,400 operators",
      "Fund II research pod now live",
      "Dedicated platform partner for GTM enablement",
    ],
    signalworks: [
      "Market intel analysts embedded with product",
      "Launching executive briefing center",
      "Expanding coverage to APAC disruptors",
    ],
  };

  const featuredCompanies = companies.filter((company) =>
    ["northbeam", "microsoft", "stratus-ai"].includes(company.id),
  );

  const trendingCompanies = companies.filter((company) =>
    ["tcs", "northbeam", "signalworks", "apex-ventures"].includes(company.id),
  );

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

          <div className="space-y-10 animate-fade-in">
            <div className="space-y-4 text-center">
              <span className="section-eyebrow">Trusted by research-driven teams</span>
              <p className="section-subheading">
                Revenue, diligence, and people teams use OrgAtlas to visualize structures, surface change, and move with clarity.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustedCustomers.map((customer) => (
                <Badge
                  key={customer.name}
                  className="rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground"
                >
                  {customer.name}
                </Badge>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {trustedCustomers.map((customer) => (
                <Card key={customer.name} className="border-border/60 bg-card/80 text-left shadow-glow">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-11 w-11 border border-border/40 bg-background/80">
                          <AvatarFallback className="text-xs font-semibold uppercase text-primary">
                            {getInitials(customer.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{customer.name}</div>
                          <div className="text-xs text-muted-foreground">{customer.team}</div>
                        </div>
                      </div>
                      <Badge className="rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        {customer.metric}
                      </Badge>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{customer.highlight}</p>
                    <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {customer.metricDetail}
                    </div>
                  </CardContent>
                </Card>
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
              <h2 className="section-heading">Start with momentum-rich organizations</h2>
              <p className="section-subheading">
                Curated picks from the OrgAtlas community so you can prioritize accounts already showing signal.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredCompanies.map((c) => {
                return (
                  <Link key={c.id} href={`/org/${c.slug}`} className="group block h-full">
                    <Card className="relative h-full border border-border/50 bg-card/80 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center justify-between gap-4 text-lg font-semibold leading-tight">
                          <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted/30 text-sm font-semibold uppercase text-foreground/90 transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
                              {c.logo_url ? (
                                <Image src={c.logo_url} alt={c.name} width={44} height={44} className="h-9 w-auto" />
                              ) : (
                                getInitials(c.name)
                              )}
                            </div>
                            <div className="text-left">
                              <div>{c.name}</div>
                              <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground/80">
                                {c.industry}
                              </div>
                            </div>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex h-full flex-col gap-4">
                        <div className="min-h-[48px] text-sm text-muted-foreground/90">{c.description}</div>
                        <ul className="space-y-2 text-xs text-muted-foreground/90">
                          {(companySignals[c.id] ?? []).map((signal) => (
                            <li key={signal} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{signal}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {c.employee_count?.toLocaleString()} employees
                          </span>
                          {c.hq_location ? (
                            <span className="flex items-center gap-1">
                              <Target className="h-4 w-4" />
                              {c.hq_location}
                            </span>
                          ) : null}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.author}
                  className="relative overflow-hidden border-border/60 bg-card/90 shadow-glow transition-all duration-200 hover:border-primary/40 hover:shadow-xl"
                >
                  <CardContent className="flex h-full flex-col gap-5 p-6">
                    <Quote className="h-5 w-5 text-primary" />
                    <p className="text-sm italic leading-relaxed text-muted-foreground">{testimonial.quote}</p>
                    <div className="mt-auto flex items-center gap-3 text-left">
                      <Avatar className="h-10 w-10 border border-border/40 bg-background/80">
                        <AvatarFallback className="text-xs font-semibold uppercase text-primary">
                          {getInitials(`${testimonial.author} ${testimonial.company}`)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="text-sm font-semibold text-foreground">{testimonial.author}</div>
                        <div>{testimonial.role}</div>
                        <div className="font-medium uppercase tracking-wide text-primary/80">{testimonial.company}</div>
                      </div>
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
                <Card
                  key={step.step}
                  className="border-border/60 bg-card/80 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 text-left">
                      <div className="text-base font-semibold text-foreground">{step.step}</div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="mt-auto rounded-xl border border-dashed border-border/60 bg-muted/10 p-3 text-xs leading-relaxed text-muted-foreground">
                      {step.tip}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 space-y-4">
              <span className="section-eyebrow">Popular industries</span>
              <h2 className="section-heading text-left">Keep tabs on the sectors you care about</h2>
              <p className="max-w-2xl text-left text-sm text-muted-foreground">
                Explore live headcount, leadership changes, and hiring momentum across the industries our customers follow most.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {industries.map((industry) => {
                return (
                  <Link
                    key={industry.label}
                    href={`/discover?industry=${encodeURIComponent(industry.label)}`}
                    className="group block h-full"
                  >
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card/70 p-5 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:bg-card/90">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-foreground">{industry.label}</div>
                          <div className="mt-2 inline-flex items-center rounded-full border border-border/50 bg-muted/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                            {industry.stat}
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                      </div>
                      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{industry.trend}</p>
                    </div>
                  </Link>
                );
              })}
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {trendingCompanies.map((c) => {
                return (
                  <Link key={c.id} href={`/org/${c.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col justify-between border border-border/60 bg-card/80 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl">
                      <CardHeader className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/30 text-xs font-semibold uppercase text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary">
                              {c.logo_url ? (
                                <Image src={c.logo_url} alt={c.name} width={56} height={24} className="h-6 w-auto" />
                              ) : (
                                getInitials(c.name)
                              )}
                            </div>
                            <div>
                              <div className="text-base font-semibold text-foreground">{c.name}</div>
                              <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground/80">{c.industry}</div>
                            </div>
                          </div>
                          <Badge className="rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                            Trending
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          {c.employee_count?.toLocaleString()} employees
                        </div>
                        {c.hq_location ? (
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-primary" />
                            {c.hq_location}
                          </div>
                        ) : null}
                        <ul className="space-y-2 pt-2">
                          {(companySignals[c.id] ?? []).slice(0, 2).map((signal) => (
                            <li key={signal} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{signal}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
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
