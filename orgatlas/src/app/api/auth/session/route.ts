import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { parseSession, SESSION_COOKIE } from "@/lib/session";

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE)?.value;
  const session = parseSession(sessionCookie);
  return NextResponse.json(session);
}
