import type { Metadata } from "next";

import { LOCALES, localePath, type LocaleCode } from "@/i18n/config";

export function localeAlternates(locale: LocaleCode, route: string): Metadata["alternates"] {
  return {
    canonical: localePath(locale, route),
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [l.hreflang, localePath(l.code, route)])),
      "x-default": route,
    },
  };
}

export function ogAlternateLocales(locale: LocaleCode): string[] {
  return LOCALES.filter((l) => l.code !== locale).map((l) => l.ogLocale);
}
