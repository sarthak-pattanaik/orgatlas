import { NextResponse } from "next/server";
import { peopleDirectory } from "@/data/app";

export function GET() {
  return NextResponse.json({ data: peopleDirectory });
}
