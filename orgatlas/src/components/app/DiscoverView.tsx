"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Loader2, RefreshCw } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import { queryKeys } from "@/lib/query-keys";
import type { DiscoverResult } from "@/types";

const defaultTags = ["Climate", "AI", "Fintech", "Security", "DevTools"];

export function DiscoverView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState<string | undefined>();
  const [visibleCount, setVisibleCount] = useState(3);

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: queryKeys.discover(searchTerm, activeTag),
    queryFn: () => apiClient.getDiscover({ search: searchTerm, tag: activeTag }),
  });

  const results = useMemo(() => data ?? [], [data]);
  const tags = useMemo(() => {
    const tagSet = new Set<string>(defaultTags);
    results.forEach((item) => item.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet.values());
  }, [results]);

  const visibleResults = results.slice(0, visibleCount);
  const hasMore = results.length > visibleCount;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Discover</h1>
          <p className="text-sm text-muted-foreground">
            Monitor priority accounts with live signals, funding events, and buying committee changes.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSearchTerm("");
            setActiveTag(undefined);
            setVisibleCount(3);
            void refetch();
          }}
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition hover:border-primary hover:text-primary"
        >
          <RefreshCw className="h-4 w-4" aria-hidden />
          Reset filters
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="flex items-center gap-3 rounded-lg border bg-background px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
            <input
              type="search"
              placeholder="Search companies, industries, or signals"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="h-9 w-full border-0 bg-transparent text-sm outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setActiveTag(isActive ? undefined : tag);
                    setVisibleCount(3);
                  }}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-sm font-semibold text-foreground">Insights</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Signals refresh every morning at 7am local time.</li>
            <li>Enable CRM sync from Settings → Integrations (Pro+).</li>
            <li>Need custom watchlists? Contact success@orgatlas.app.</li>
          </ul>
        </div>
      </div>

      <section className="space-y-4">
        {isLoading || isRefetching ? (
          <div className="flex h-48 items-center justify-center rounded-2xl border bg-card">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" aria-hidden />
          </div>
        ) : null}

        {isError ? (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-sm text-destructive">
            We could not load the latest signals. Please try again.
          </div>
        ) : null}

        {!isLoading && !isError ? (
          <div className="grid gap-6">
            {visibleResults.map((result: DiscoverResult) => (
              <article key={result.id} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold text-foreground">{result.title}</h2>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Updated {new Date(result.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{result.summary}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {result.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                      {tag}
                    </span>
                  ))}
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {result.industry}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {!isLoading && !isError && results.length === 0 ? (
          <div className="rounded-2xl border bg-card p-10 text-center text-sm text-muted-foreground">
            No signals match your filters yet. Adjust your search or subscribe to new industries.
          </div>
        ) : null}

        {hasMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + 3)}
            className="mx-auto flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            Load more
          </button>
        ) : null}
      </section>
    </div>
  );
}
