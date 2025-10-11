import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { parseSession, SESSION_COOKIE } from "./src/lib/session";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const sessionCookie = request.cookies.get(SESSION_COOKIE)?.value;
  const session = parseSession(sessionCookie);

  if (pathname.startsWith("/app")) {
    if (!session) {
      const loginUrl = new URL("/login", request.url);
      const redirectTo = `${pathname}${search}`.replace(/\/?$/, "");
      if (redirectTo && redirectTo !== "/login") {
        loginUrl.searchParams.set("redirectTo", redirectTo);
      }
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  if (pathname === "/login" && session) {
    const appUrl = new URL("/app/discover", request.url);
    return NextResponse.redirect(appUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/login"],
};
