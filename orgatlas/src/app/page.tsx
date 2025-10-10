"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/data/companies";
import { BarChart, Building2, Share2, Users, Target, Sparkles } from "lucide-react";
import * as React from "react";

export default function Home() {
  const [q, setQ] = React.useState("");
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <span className="inline-block text-xs tracking-widest uppercase text-red-500 font-semibold">OrgAtlas</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Explore, contribute to, and share company org charts
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            The enterprise-grade org intelligence platform for SDRs, analysts, recruiters, and researchers.
          </p>
          <div className="mt-6 max-w-2xl mx-auto">
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
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
              <Link href="/explore">Explore Companies</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/org/microsoft">View Demo Org</Link>
            </Button>
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-16">
          <div className="text-center text-xs uppercase tracking-widest text-neutral-500">Trusted by research-driven teams</div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 opacity-80">
            {companies.slice(0, 3).map((c) => (
              <img key={c.id} src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} className="h-6" />
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

        {/* Featured companies */}
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured companies</h2>
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
                      <img src={c.logo_url ?? `/${c.slug}.svg`} alt={c.name} className="h-6" />
                      {c.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{c.description}</div>
                    <div className="mt-2 text-xs text-neutral-500">{c.employee_count?.toLocaleString()} employees • {c.hq_location}</div>
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

        {/* Footer */}
        <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800 py-10 text-sm text-neutral-600 dark:text-neutral-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-semibold">OrgAtlas</div>
            <div className="flex items-center gap-6">
              <Link href="/explore">Explore</Link>
              <Link href="/embed">Embed</Link>
              <a href="mailto:hello@orgatlas.app">Contact</a>
            </div>
            <div className="text-xs">© {new Date().getFullYear()} OrgAtlas</div>
          </div>
        </footer>
      </div>
    </main>
  );
}
