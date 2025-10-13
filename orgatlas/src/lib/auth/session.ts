import { cookies } from "next/headers";
import { cache } from "react";

const SESSION_COOKIE = "orgatlas-session";

type SessionPayload = {
  email: string;
};

export const getSession = cache(async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionCookie) {
    return null;
  }

  try {
    const parsed = JSON.parse(sessionCookie) as SessionPayload;
    if (!parsed?.email) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
});

export async function createSession(email: string) {
  const value: SessionPayload = { email };
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, JSON.stringify(value), {
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
