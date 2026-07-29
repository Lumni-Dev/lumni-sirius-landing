import { NextResponse, type NextRequest } from "next/server";

import {
  DEFAULT_LOCALE,
  isLocaleCode,
  LOCALE_COOKIE,
  negotiateLocale,
} from "@/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes("opengraph-image")
  ) {
    return;
  }

  const [, first] = pathname.split("/");

  if (isLocaleCode(first)) {
    if (first === DEFAULT_LOCALE) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
      return NextResponse.redirect(url, 308);
    }
    return;
  }

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred = isLocaleCode(cookie)
    ? cookie
    : (negotiateLocale(request.headers.get("accept-language")) ?? DEFAULT_LOCALE);

  if (preferred !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 307);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

/** Nome exigido pelo Next: `config` (não `proxyConfig`). */
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
