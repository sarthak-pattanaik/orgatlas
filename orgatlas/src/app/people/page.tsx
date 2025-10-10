"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LeftRailCard } from "@/components/common/LeftRailCard";
import { PersonRow } from "@/components/common/PersonRow";
import { people } from "@/data/people";

export default function PeoplePage() {
  const [keyword, setKeyword] = React.useState("");
  const filtered = people.filter((p) => `${p.fullName} ${p.title ?? ""}`.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
      <div>
        <Tabs defaultValue="search">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="lists">Lists</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-6 space-y-4">
          <LeftRailCard title="Keyword">
            <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Person or title" />
          </LeftRailCard>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="company">
              <AccordionTrigger>Company name</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><Checkbox id="microsoft" /><label htmlFor="microsoft">Microsoft</label></div>
                  <div className="flex items-center gap-2"><Checkbox id="tcs" /><label htmlFor="tcs">TCS</label></div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="industry">
              <AccordionTrigger>Industries</AccordionTrigger>
              <AccordionContent>Software, IT Services, Manufacturing</AccordionContent>
            </AccordionItem>
            <AccordionItem value="hq">
              <AccordionTrigger>HQ</AccordionTrigger>
              <AccordionContent>Redmond, Mumbai, San Francisco</AccordionContent>
            </AccordionItem>
            <AccordionItem value="range">
              <AccordionTrigger>Employee range</AccordionTrigger>
              <AccordionContent>1-50, 51-200, 201-1k, 1k+</AccordionContent>
            </AccordionItem>
            <AccordionItem value="type">
              <AccordionTrigger>Company type</AccordionTrigger>
              <AccordionContent>Public, Private</AccordionContent>
            </AccordionItem>
            <AccordionItem value="stage">
              <AccordionTrigger>Funding stage</AccordionTrigger>
              <AccordionContent>Seed, Series A-F, Public</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-600 dark:text-neutral-300">{filtered.length} results</div>
          <div className="text-xs text-neutral-500">Some features are available on paid plans</div>
        </div>
        <div className="mt-2 space-y-1" role="list" aria-label="People results">
          {filtered.slice(0, 20).map((p) => (
            <div role="listitem" key={p.id}>
              <PersonRow name={p.fullName} title={p.title} company={p.companySlug} />
            </div>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div className="mt-4">
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded" />
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
            </div>
          </div>
        ) : null}
        {filtered.length > 20 ? (
          <div className="mt-4 p-4 rounded-md border border-dashed border-neutral-300 dark:border-neutral-800 text-sm">
            Upgrade to view more results.
          </div>
        ) : null}
      </div>
    </div>
  );
}
