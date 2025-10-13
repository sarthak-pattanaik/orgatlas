"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession } from "./session";
import { verifyUserCredentials } from "./users";

export type AuthState = {
  error?: string;
};

export async function loginAction(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Email and password are required." };
  }

  const user = verifyUserCredentials(email, password);
  if (!user) {
    return { error: "Invalid email or password. Use demo@orgatlas.com / demo123." };
  }

  await createSession({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    organization: user.organization,
  });
  redirect("/app");
}

export async function logoutAction() {
  await destroySession();
  redirect("/");
}
