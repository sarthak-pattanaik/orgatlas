"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Loader2, X } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import { queryKeys } from "@/lib/query-keys";
import type { PersonRecord } from "@/types";

const sorters: Record<string, (a: PersonRecord, b: PersonRecord) => number> = {
  name: (a, b) => a.name.localeCompare(b.name),
  title: (a, b) => (a.title ?? "").localeCompare(b.title ?? ""),
  company: (a, b) => a.company.localeCompare(b.company),
};

export function PeopleView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("q") ?? "";
  const departmentFilter = searchParams.get("department") ?? "all";
  const sortKey = searchParams.get("sort") ?? "name";
  const activePersonId = searchParams.get("person") ?? null;

  const [searchInput, setSearchInput] = useState(searchQuery);
  const { data, isLoading, isError } = useQuery({ queryKey: queryKeys.people(), queryFn: apiClient.getPeople });

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const people = useMemo(() => data ?? [], [data]);
  const departments = useMemo(() => {
    const values = new Set<string>(["all"]);
    people.forEach((person) => values.add(person.department));
    return Array.from(values);
  }, [people]);

  const filtered = useMemo(() => {
    return people
      .filter((person) => {
        const matchesSearch = searchQuery
          ? `${person.name} ${person.title ?? ""} ${person.company}`.toLowerCase().includes(searchQuery.toLowerCase())
          : true;
        const matchesDepartment = departmentFilter === "all" ? true : person.department === departmentFilter;
        return matchesSearch && matchesDepartment;
      })
      .sort(sorters[sortKey] ?? sorters.name);
  }, [departmentFilter, people, searchQuery, sortKey]);

  const selectedPerson = useMemo(() => filtered.find((person) => person.id === activePersonId) ?? null, [
    activePersonId,
    filtered,
  ]);

  const updateQuery = (next: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([key, value]) => {
      if (!value || value === "" || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">People</h1>
          <p className="text-sm text-muted-foreground">
            Explore leaders, hiring managers, and operators. Click a row to open detailed context.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="font-semibold">Sort by</span>
          <select
            value={sortKey}
            onChange={(event) => updateQuery({ sort: event.target.value })}
            className="rounded-md border bg-background px-3 py-2 text-xs"
          >
            <option value="name">Name</option>
            <option value="title">Title</option>
            <option value="company">Company</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
            updateQuery({ q: event.target.value });
          }}
          placeholder="Search by name, title, or company"
          className="h-11 w-full rounded-lg border bg-background px-3 text-sm sm:max-w-sm"
        />
        <select
          value={departmentFilter}
          onChange={(event) => updateQuery({ department: event.target.value })}
          className="h-11 rounded-lg border bg-background px-3 text-sm sm:w-48"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept === "all" ? "All departments" : dept}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/60 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card text-sm">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-muted-foreground">
                  <Loader2 className="mx-auto h-5 w-5 animate-spin" aria-hidden />
                </td>
              </tr>
            ) : null}
            {isError ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-destructive">
                  Unable to load people directory. Please try again later.
                </td>
              </tr>
            ) : null}
            {!isLoading && !isError && filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-muted-foreground">
                  No people match your filters yet.
                </td>
              </tr>
            ) : null}
            {!isLoading && !isError
              ? filtered.map((person) => {
                  const isActive = selectedPerson?.id === person.id;
                  return (
                    <tr
                      key={person.id}
                      onClick={() => updateQuery({ person: person.id })}
                      className={`cursor-pointer transition hover:bg-primary/5 ${isActive ? "bg-primary/10" : ""}`}
                    >
                      <td className="px-4 py-4 font-semibold text-foreground">{person.name}</td>
                      <td className="px-4 py-4 text-muted-foreground">{person.title}</td>
                      <td className="px-4 py-4 text-muted-foreground">{person.company}</td>
                      <td className="px-4 py-4 text-muted-foreground">{person.department}</td>
                      <td className="px-4 py-4 text-muted-foreground">{person.location}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>

      {selectedPerson ? (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/30 backdrop-blur-sm">
          <div className="h-full w-full max-w-md overflow-y-auto border-l bg-background p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">{selectedPerson.name}</h2>
                <p className="text-sm text-muted-foreground">{selectedPerson.title}</p>
                <p className="text-sm text-muted-foreground">{selectedPerson.company}</p>
              </div>
              <button
                type="button"
                onClick={() => updateQuery({ person: null })}
                className="rounded-full border border-border p-1 text-muted-foreground transition hover:text-foreground"
              >
                <span className="sr-only">Close panel</span>
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>{selectedPerson.bio}</p>
              <div>
                <p className="font-semibold text-foreground">Contact</p>
                <p>{selectedPerson.email}</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Links</p>
                <ul className="space-y-2">
                  {selectedPerson.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer" className="text-primary underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
