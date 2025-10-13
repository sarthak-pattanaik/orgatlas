"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession } from "./session";

export type AuthState = {
  error?: string;
};

const DEMO_EMAIL = "demo@orgatlas.com";
const DEMO_PASSWORD = "demo123";

export async function loginAction(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Email and password are required." };
  }

  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return { error: "Invalid email or password. Use demo@orgatlas.com / demo123." };
  }

  createSession(email);
  redirect("/app");
}

export async function logoutAction() {
  destroySession();
  redirect("/");
}

export const demoCredentials = {
  email: DEMO_EMAIL,
  password: DEMO_PASSWORD,
};
