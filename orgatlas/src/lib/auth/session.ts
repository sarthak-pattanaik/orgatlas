import { cookies } from "next/headers";
import { cache } from "react";

const SESSION_COOKIE = "orgatlas-session";

export type SessionPayload = {
  id: string;
  email: string;
  name: string;
  role: string;
  organization: string;
};

export const getSession = cache(async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionCookie) {
    return null;
  }

  try {
    const parsed = JSON.parse(sessionCookie) as Partial<SessionPayload>;
    if (!parsed?.email || !parsed.id || !parsed.name || !parsed.role || !parsed.organization) {
      return null;
    }
    return parsed as SessionPayload;
  } catch {
    return null;
  }
});

export async function createSession(payload: SessionPayload) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, JSON.stringify(payload), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
