"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
            A modern, interactive org chart platform for SDRs, analysts, recruiters, and researchers.
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60">
            <h3 className="font-semibold">Interactive Viewer</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              Zoom, pan, and expand sub-teams with a beautiful layout.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60">
            <h3 className="font-semibold">Contribution System</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              Suggest edits and track approvals with a lightweight proposal flow.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60">
            <h3 className="font-semibold">Search & Directory</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              Find companies and filter by size, industry, and more.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
