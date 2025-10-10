"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Share2, Bell } from "lucide-react";
import { OrgChartViewer, type OrgChartData } from "@/components/org/OrgChartViewer";
import type { Company } from "@/data/companies";

export function CompanyOrgClient({ slug, data, company }: { slug: string; data: OrgChartData; company?: Company }) {
  const [query, setQuery] = React.useState("");

  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src={company?.logo_url ?? `/${slug}.svg`} alt={company?.name ?? slug} width={48} height={48} className="rounded" />
          <div>
            <h1 className="text-2xl font-bold capitalize">{company?.name ?? slug}</h1>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">
              {company?.industry ?? "Industry"} • {company?.employee_count ? `${company.employee_count.toLocaleString()} employees` : "Size"} • {company?.hq_location ?? "HQ"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm"><Bell className="h-4 w-4 mr-1" /> Follow company</Button>
          <Button variant="outline" size="sm"><Share2 className="h-4 w-4 mr-1" /> Share</Button>
        </div>
      </div>

      <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 max-w-3xl">
        <span className={!expanded ? "line-clamp-2" : undefined}>{company?.description}</span>
        {company?.description && (
          <button className="text-xs text-red-500 ml-2" onClick={() => setExpanded((v) => !v)}>{expanded ? "Read less" : "Read more"}</button>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
        <div className="space-y-3">
          <Input placeholder="Search people by name or title" value={query} onChange={(e) => setQuery(e.target.value)} />

          <Tabs defaultValue="about" className="mt-4">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="text-sm text-neutral-600 dark:text-neutral-300">
              {company?.description ?? "Short description and overview."}
            </TabsContent>
            <TabsContent value="values" className="text-sm text-neutral-600 dark:text-neutral-300">
              Customer-obsessed • Ownership • Craft • Bias to action
            </TabsContent>
            <TabsContent value="photos" className="text-sm text-neutral-600 dark:text-neutral-300">
              Team photos placeholder.
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <OrgChartViewer data={data} filterQuery={query} showCTA={true} />
        </div>
      </div>
    </div>
  );
}
