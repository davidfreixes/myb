import { NextRequest, NextResponse } from "next/server";
import { PAGE_ROUTES } from "./routes";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";
  const path = url.pathname;
  const env = process.env.NODE_ENV;

  // 1. Handle static routes and service subpages BEFORE city dynamic routes
  for (const { default: def, en, cat, fr } of PAGE_ROUTES) {
    // Static routes
    if (
      (host.includes("instantfreight.ai") || env === "development") &&
      path === en
    ) {
      url.pathname = def;
      return NextResponse.rewrite(url);
    }
    if (env === "development" && path === cat) {
      url.pathname = def;
      return NextResponse.rewrite(url);
    }
    if (env === "development" && path === fr) {
      url.pathname = def;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // only run on those friendly public slugs
  matcher: [
    "/:path*", // (si quieres cubrir todo)
  ],
};
