"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import type { SessionUser } from "@/types";
import { useToast } from "@/components/ui/toast";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthContextValue {
  user: SessionUser | null;
  status: AuthStatus;
  login: (input: { email: string; password: string }) => Promise<SessionUser>;
  loginAsDemo: () => Promise<SessionUser>;
  logout: () => Promise<void>;
  lastAttemptedRoute: string | null;
  setLastAttemptedRoute: (value: string | null) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [lastAttemptedRoute, setLastAttemptedRoute] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { pushToast } = useToast();

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      try {
        const session = await apiClient.getSession();
        if (!isMounted) return;

        if (session) {
          setUser(session);
          setStatus("authenticated");
        } else {
          setUser(null);
          setStatus("unauthenticated");
        }
      } catch (error) {
        if (!isMounted) return;
        console.error("Failed to load session", error);
        setUser(null);
        setStatus("unauthenticated");
      }
    }

    loadSession();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/app")) {
      setLastAttemptedRoute(pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ""));
    }
  }, [pathname, searchParams]);

  const handleSuccessLogin = useCallback(
    (session: SessionUser) => {
      setUser(session);
      setStatus("authenticated");
      pushToast({
        title: "Welcome back",
        description: `Signed in as ${session.name}`,
        variant: "success",
      });
      return session;
    },
    [pushToast],
  );

  const login = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      const session = await apiClient.login({ email, password });
      return handleSuccessLogin(session);
    },
    [handleSuccessLogin],
  );

  const loginAsDemo = useCallback(async () => {
    const session = await apiClient.login({ email: "demo@orgatlas.app", password: "demo" });
    return handleSuccessLogin(session);
  }, [handleSuccessLogin]);

  const logout = useCallback(async () => {
    await apiClient.logout();
    setUser(null);
    setStatus("unauthenticated");
    pushToast({ title: "Signed out", description: "You have been logged out.", variant: "warning" });
    router.push("/login");
  }, [pushToast, router]);

  const value = useMemo(
    () => ({
      user,
      status,
      login,
      loginAsDemo,
      logout,
      lastAttemptedRoute,
      setLastAttemptedRoute,
    }),
    [lastAttemptedRoute, login, loginAsDemo, logout, setLastAttemptedRoute, status, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
