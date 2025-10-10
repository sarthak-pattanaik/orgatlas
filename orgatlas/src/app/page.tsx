"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/data/companies";
import { BarChart, Building2, Share2, Users, Target, Sparkles, Plug } from "lucide-react";
import { StatCard } from "@/components/common/StatCard";
import * as React from "react";
import Image from "next/image";

export default function Home() {
  const [q, setQ] = React.useState("");
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200 text-xs text-center py-2">
        You&apos;re on the free plan. Upgrade for unlimited lists, saved contacts, and exports.
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-8 px-6 py-10">
        {/* Left rail */}
        <aside className="hidden lg:block space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Your Plan</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
              Free — 5 saved contacts, 3 lists.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Community</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
              Join a company to contribute org updates.
            </CardContent>
          </Card>
        </aside>

        {/* Main column */}
        <section>
          <span className="inline-block text-xs tracking-widest uppercase text-red-500 font-semibold">OrgAtlas</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Explore, contribute to, and share company org charts
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl">
            The enterprise-grade org intelligence platform for SDRs, analysts, recruiters, and researchers.
          </p>
          <div className="mt-6 max-w-2xl">
            <div className="flex gap-2">
              <Input
                placeholder="Search companies or people"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <Button asChild className="bg-red-500 hover:bg-red-600">
                <Link href={q ? `/explore?q=${encodeURIComponent(q)}` : "/explore"}>Search</Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
              <Link href="/explore">Explore Companies</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/org/microsoft">View Demo Org</Link>
            </Button>
          </div>

          {/* Trusted by */}
          <div className="mt-16">
            <div className="text-center text-xs uppercase tracking-widest text-neutral-500">Trusted by research-driven teams</div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 opacity-80">
              {companies.slice(0, 3).map((c) => (
                <Image key={c.id} src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} width={96} height={24} className="h-6 w-auto" />
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center">How it works</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><Building2 className="h-4 w-4" /> Discover</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Find companies and teams with powerful search and filters.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><Users className="h-4 w-4" /> Explore</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Zoom, pan, and expand org charts to map decision makers.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><Sparkles className="h-4 w-4" /> Contribute</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Suggest edits, fix titles, and keep structures up-to-date.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><Share2 className="h-4 w-4" /> Share</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Share links, embed charts, or export for decks and briefs.</CardContent>
              </Card>
            </div>
          </div>

          {/* Suggested companies */}
          <div className="mt-20">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Suggested companies</h2>
              <Button asChild variant="link" className="text-red-500">
                <Link href="/explore">See all</Link>
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.slice(0, 3).map((c) => (
                <Link key={c.id} href={`/org/${c.slug}`}>
                  <Card className="hover:shadow-sm transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-base">
                        <Image src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} width={96} height={24} className="h-6 w-auto" />
                        {c.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{c.description}</div>
                      <div className="mt-2 text-xs text-neutral-500 flex items-center gap-3">
                        <span>{c.employee_count?.toLocaleString()} employees</span>
                        <span>{Math.floor((c.employee_count ?? 1000) / 10)} followers</span>
                        <span>{Math.floor(Math.random() * 20)} jobs</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center">Built for enterprise teams</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><Target className="h-4 w-4" /> SDRs</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Identify buying committees and route outreach to the right people.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><BarChart className="h-4 w-4" /> Analysts</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Understand org structures to inform research and diligence.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><Users className="h-4 w-4" /> Recruiters</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Map talent pools and target teams with precision.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base"><Building2 className="h-4 w-4" /> Researchers</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Compare companies by team shape, headcount, and leadership.</CardContent>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center">What teams say</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[`“Helps our SDRs find champions in minutes.”`, `“Superb for diligence — team structures matter.”`, `“Clean, fast, and easy to share org views.”`].map((quote, i) => (
                <Card key={i}>
                  <CardContent className="p-6 text-sm text-neutral-700 dark:text-neutral-300">{quote}</CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Get started */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center">Get started in minutes</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">1. Discover companies</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Browse org charts and map the teams you care about.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">2. Build people lists</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Save targets by function, seniority, or region.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">3. Share & export</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">Embed charts or export snapshots for briefs and decks.</CardContent>
              </Card>
            </div>
          </div>

          {/* Popular industries */}
          <div className="mt-20">
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
                <Link key={f.label} href={`/discover?industry=${encodeURIComponent(f.label)}`} className="inline-flex items-center rounded-full border px-3 py-1 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-900">
                  {f.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Top companies */}
          <div className="mt-20">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top companies</h2>
              <Button asChild variant="link" className="text-red-500">
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
                      <div className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{c.description}</div>
                      <div className="mt-2 text-xs text-neutral-500 flex items-center gap-3">
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
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center">Community impact</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">20k+</div><div className="text-xs text-neutral-500 mt-1">Companies mapped</div></CardContent></Card>
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">1.5M+</div><div className="text-xs text-neutral-500 mt-1">People indexed</div></CardContent></Card>
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">150k+</div><div className="text-xs text-neutral-500 mt-1">Edits contributed</div></CardContent></Card>
              <Card><CardContent className="p-6 text-center"><div className="text-3xl font-extrabold">8k+</div><div className="text-xs text-neutral-500 mt-1">Active contributors</div></CardContent></Card>
            </div>
          </div>

          {/* Integrations CTA */}
          <div className="mt-20">
            <Card>
              <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-semibold"><Plug className="h-4 w-4" /> Integrations & Export</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">Embed charts on your site or export as PNG for decks. API coming soon.</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline"><Link href="/embed">Open Embed</Link></Button>
                  <Button asChild className="bg-red-500 hover:bg-red-600"><Link href="/api">Join API waitlist</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Right rail */}
        <aside className="hidden lg:block space-y-4">
          <StatCard label="Contacts" value={12} />
          <StatCard label="Saved" value={7} />
          <Card>
            <CardContent className="p-4 text-sm">Upgrade to unlock AI Mode, bulk exports, and more.</CardContent>
          </Card>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 text-sm text-neutral-600 dark:text-neutral-300">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Product</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/discover">Discover</Link></li>
              <li><Link href="/people">People</Link></li>
              <li><Link href="/jobs">Jobs</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Business</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/sales">Sales</Link></li>
              <li><Link href="/partners">Partners</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Enrich</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/api">API</Link></li>
              <li><Link href="/docs">Docs</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Social</div>
            <ul className="mt-2 space-y-1">
              <li><a href="https://x.com" target="_blank">X</a></li>
              <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
              <li><a href="mailto:hello@orgatlas.app">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">© {new Date().getFullYear()} OrgAtlas • Terms • Privacy</div>
      </footer>
    </main>
  );
}
