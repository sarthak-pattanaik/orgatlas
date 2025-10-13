import { cookies } from "next/headers";
import { cache } from "react";

const SESSION_COOKIE = "orgatlas-session";

type SessionPayload = {
  email: string;
};

export const getSession = cache(() => {
  const sessionCookie = cookies().get(SESSION_COOKIE)?.value;
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

export function createSession(email: string) {
  const value: SessionPayload = { email };
  cookies().set(SESSION_COOKIE, JSON.stringify(value), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export function destroySession() {
  cookies().delete(SESSION_COOKIE);
}
