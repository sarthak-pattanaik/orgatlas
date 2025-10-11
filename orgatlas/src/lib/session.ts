import type { SessionUser } from "@/types";

export const SESSION_COOKIE = "orgatlas_session";

function encodeBase64Url(value: string) {
  if (typeof btoa === "function") {
    return btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf8").toString("base64url");
  }
  throw new Error("No base64 encoder available");
}

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");

  if (typeof atob === "function") {
    return atob(padded);
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(padded, "base64").toString("utf8");
  }
  throw new Error("No base64 decoder available");
}

export function serializeSession(user: SessionUser): string {
  return encodeBase64Url(JSON.stringify(user));
}

export function parseSession(cookieValue?: string | null): SessionUser | null {
  if (!cookieValue) {
    return null;
  }

  try {
    const decoded = decodeBase64Url(cookieValue);
    const parsed = JSON.parse(decoded);
    if (typeof parsed?.email === "string" && typeof parsed?.name === "string") {
      return { email: parsed.email, name: parsed.name } satisfies SessionUser;
    }
    return null;
  } catch (error) {
    console.error("Failed to parse session cookie", error);
    return null;
  }
}

export function deriveNameFromEmail(email: string) {
  const base = email.split("@")[0]?.replace(/[._]/g, " ") ?? "Guest";
  return base
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
    .trim();
}
