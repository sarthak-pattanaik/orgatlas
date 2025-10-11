"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Bookmark, BookmarkCheck, Filter, Loader2 } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import { queryKeys } from "@/lib/query-keys";
import type { JobListing } from "@/types";

export function JobsView() {
  const { data, isLoading, isError } = useQuery({ queryKey: queryKeys.jobs(), queryFn: apiClient.getJobs });
  const [teamFilter, setTeamFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  const jobs = useMemo(() => data ?? [], [data]);
  const teams = useMemo(() => Array.from(new Set(["all", ...jobs.map((job) => job.team)])), [jobs]);
  const locations = useMemo(() => Array.from(new Set(["all", ...jobs.map((job) => job.location)])), [jobs]);

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesTeam = teamFilter === "all" ? true : job.team === teamFilter;
      const matchesLocation = locationFilter === "all" ? true : job.location === locationFilter;
      return matchesTeam && matchesLocation;
    });
  }, [jobs, teamFilter, locationFilter]);

  const toggleBookmark = (id: string) => {
    setBookmarks((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Jobs</h1>
          <p className="text-sm text-muted-foreground">
            Track open roles to uncover initiatives, hiring velocity, and potential champions inside each account.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
          <Filter className="h-4 w-4" aria-hidden /> Smart filters enabled
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          value={teamFilter}
          onChange={(event) => setTeamFilter(event.target.value)}
          className="h-11 rounded-lg border bg-background px-3 text-sm sm:w-56"
        >
          {teams.map((team) => (
            <option key={team} value={team}>
              {team === "all" ? "All teams" : team}
            </option>
          ))}
        </select>
        <select
          value={locationFilter}
          onChange={(event) => setLocationFilter(event.target.value)}
          className="h-11 rounded-lg border bg-background px-3 text-sm sm:w-56"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location === "all" ? "All locations" : location}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div className="flex h-48 items-center justify-center rounded-2xl border bg-card">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" aria-hidden />
        </div>
      ) : null}

      {isError ? (
        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-sm text-destructive">
          Unable to load job intel right now. Please refresh.
        </div>
      ) : null}

      {!isLoading && !isError && filtered.length === 0 ? (
        <div className="rounded-2xl border bg-card p-12 text-center text-sm text-muted-foreground">
          No roles match your filters. Adjust your filters to see more opportunities.
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((job: JobListing) => {
          const isBookmarked = bookmarks.has(job.id);
          return (
            <article key={job.id} className="flex h-full flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{job.role}</h2>
                    <p className="text-sm text-muted-foreground">{job.team} · {job.level}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      job.status === "Open"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-100"
                        : job.status === "Paused"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-100"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{job.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{job.location}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleBookmark(job.id)}
                  className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    isBookmarked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {isBookmarked ? <BookmarkCheck className="h-4 w-4" aria-hidden /> : <Bookmark className="h-4 w-4" aria-hidden />}
                  {isBookmarked ? "Bookmarked" : "Bookmark"}
                </button>
                <button
                  type="button"
                  className="rounded-md border border-primary/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  View role
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
