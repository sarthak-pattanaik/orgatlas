"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  const [q, setQ] = React.useState("");
  const filtered = jobs.filter((j) => `${j.title} ${j.companySlug}`.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Find a team you want to work with</h1>
      <div className="mt-4 flex items-center gap-2">
        <Input placeholder="Search jobs" value={q} onChange={(e) => setQ(e.target.value)} />
        <Badge variant="secondary">Saved</Badge>
      </div>

      <div className="mt-6 space-y-3">
        {filtered.map((j) => (
          <div key={j.id} className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900">
            <div className="flex items-center justify-between">
              <div className="font-medium">{j.title}</div>
              <div className="text-xs text-neutral-500">{new Date(j.postedAt).toLocaleDateString()}</div>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">{j.companySlug}</div>
            <div className="mt-2 flex items-center gap-2">
              <Badge>{j.functionTag}</Badge>
              {j.location ? <Badge variant="secondary">{j.location}</Badge> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
