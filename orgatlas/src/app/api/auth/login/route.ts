import { NextResponse } from "next/server";
import { deriveNameFromEmail, serializeSession, SESSION_COOKIE } from "@/lib/session";
import type { SessionUser } from "@/types";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email: string | undefined = body.email;
  const password: string | undefined = body.password;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  if (!password || typeof password !== "string" || password.length < 3) {
    return NextResponse.json({ error: "Password must be at least 3 characters." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user: SessionUser = {
    email: normalizedEmail,
    name: deriveNameFromEmail(normalizedEmail),
  };

  const response = NextResponse.json(user);

  response.cookies.set({
    name: SESSION_COOKIE,
    value: serializeSession(user),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
