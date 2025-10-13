"use server";

import { redirect } from "next/navigation";
import { DEMO_CREDENTIALS } from "./constants";
import { createSession, destroySession } from "./session";

export type AuthState = {
  error?: string;
};

export async function loginAction(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Email and password are required." };
  }

  if (email !== DEMO_CREDENTIALS.email || password !== DEMO_CREDENTIALS.password) {
    return { error: "Invalid email or password. Use demo@orgatlas.com / demo123." };
  }

  await createSession(email);
  redirect("/app");
}

export async function logoutAction() {
  await destroySession();
  redirect("/");
}
