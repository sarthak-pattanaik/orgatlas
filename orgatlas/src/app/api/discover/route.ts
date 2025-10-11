import { NextResponse } from "next/server";
import { discoverResults } from "@/data/app";

export function GET(request: Request) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search")?.toLowerCase();
  const tag = url.searchParams.get("tag")?.toLowerCase();

  const filtered = discoverResults.filter((result) => {
    const matchesSearch = search
      ? result.title.toLowerCase().includes(search) || result.summary.toLowerCase().includes(search)
      : true;
    const matchesTag = tag ? result.tags.some((item) => item.toLowerCase().includes(tag)) : true;
    return matchesSearch && matchesTag;
  });

  return NextResponse.json({ data: filtered, total: filtered.length });
}
