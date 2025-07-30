import { NextRequest, NextResponse } from "next/server";
import { PAGE_ROUTES } from "./routes";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";
  const path = url.pathname;
  const env = process.env.NODE_ENV;

  // Check if we're in production
  const isProduction =
    env === "production" || host.includes("menorcabrokers.com");

  // Handle static routes and service subpages
  for (const { default: def, en, cat, fr } of PAGE_ROUTES) {
    // In production, check the path directly
    // In development, also check if the path matches the language version
    if (isProduction || env === "development") {
      // Check for English path
      if (path === en || path === `/${en}`) {
        url.pathname = def;
        return NextResponse.rewrite(url);
      }
      // Check for Catalan path
      if (path === cat || path === `/${cat}`) {
        url.pathname = def;
        return NextResponse.rewrite(url);
      }
      // Check for French path
      if (path === fr || path === `/${fr}`) {
        url.pathname = def;
        return NextResponse.rewrite(url);
      }
    }
  }

  return NextResponse.next();
}
