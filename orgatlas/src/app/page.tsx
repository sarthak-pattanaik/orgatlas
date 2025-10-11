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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Discover", description: "Find companies and teams with powerful search and filters" },
                { icon: Users, title: "Explore", description: "Zoom, pan, and expand org charts to map decision makers" },
                { icon: Sparkles, title: "Contribute", description: "Suggest edits, fix titles, and keep structures up-to-date" },
                { icon: Share2, title: "Share", description: "Share links, embed charts, or export for decks and briefs" }
              ].map((item, index) => (
                <Card key={index} className="gradient-card border-border/50 shadow-sm hover-lift group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.slice(0, 3).map((c) => (
                <Link key={c.id} href={`/org/${c.slug}`}>
                  <Card className="gradient-card border-border/50 shadow-sm hover-lift h-full group">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-4 text-lg leading-none">
                        <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-200">
                          <Image src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} width={32} height={32} className="h-8 w-8" />
                        </div>
                        {c.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-muted-foreground line-clamp-2 min-h-[40px] mb-4">{c.description}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
          </div>

          {/* Use cases */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Built for enterprise teams</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful tools designed for professionals who need accurate org intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "SDRs", description: "Identify buying committees and route outreach to the right people" },
                { icon: BarChart, title: "Analysts", description: "Understand org structures to inform research and diligence" },
                { icon: Users, title: "Recruiters", description: "Map talent pools and target teams with precision" },
                { icon: Building2, title: "Researchers", description: "Compare companies by team shape, headcount, and leadership" }
              ].map((item, index) => (
                <Card key={index} className="gradient-card border-border/50 shadow-sm hover-lift group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.map((c) => (
                <Link key={c.id} href={`/org/${c.slug}`}>
                  <Card className="hover:shadow-sm transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-base">
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
              <div className="font-bold text-foreground mb-4">Company</div>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-foreground mb-4">Product</div>
              <ul className="space-y-3">
                <li><Link href="/discover" className="text-muted-foreground hover:text-foreground transition-colors">Discover</Link></li>
                <li><Link href="/people" className="text-muted-foreground hover:text-foreground transition-colors">People</Link></li>
                <li><Link href="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">Jobs</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-foreground mb-4">Business</div>
              <ul className="space-y-3">
                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/sales" className="text-muted-foreground hover:text-foreground transition-colors">Sales</Link></li>
                <li><Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-foreground mb-4">Developers</div>
              <ul className="space-y-3">
                <li><Link href="/api" className="text-muted-foreground hover:text-foreground transition-colors">API</Link></li>
                <li><Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</Link></li>
                <li><Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-foreground mb-4">Connect</div>
              <ul className="space-y-3">
                <li><a href="https://x.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">X</a></li>
                <li><a href="https://www.linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="mailto:hello@orgatlas.app" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg gradient-primary">
                <GitBranch className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">OrgAtlas</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OrgAtlas • <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link> • <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
