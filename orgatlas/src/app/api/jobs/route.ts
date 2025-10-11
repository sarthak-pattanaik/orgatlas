import { NextResponse } from "next/server";
import { jobBoard } from "@/data/app";

export function GET() {
  return NextResponse.json({ data: jobBoard });
}
