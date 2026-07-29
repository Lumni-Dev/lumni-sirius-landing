export const SITE_URL = "https://sirius.lumni.dev.br";

/** Cookie que registra a escolha explícita de idioma do usuário. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export type LocaleCode =
  | "pt"
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "nl"
  | "ru"
  | "ja"
  | "ko"
  | "zh"
  | "ar";

export interface LocaleDefinition {
  readonly code: LocaleCode;
  readonly htmlLang: string;
  readonly hreflang: string;
  readonly ogLocale: string;
  readonly nativeName: string;
  readonly dir: "ltr" | "rtl";
}

export const LOCALES: readonly LocaleDefinition[] = [
  { code: "pt", htmlLang: "pt-BR", hreflang: "pt-BR", ogLocale: "pt_BR", nativeName: "Português", dir: "ltr" },
  { code: "en", htmlLang: "en", hreflang: "en", ogLocale: "en_US", nativeName: "English", dir: "ltr" },
  { code: "es", htmlLang: "es", hreflang: "es", ogLocale: "es_ES", nativeName: "Español", dir: "ltr" },
  { code: "fr", htmlLang: "fr", hreflang: "fr", ogLocale: "fr_FR", nativeName: "Français", dir: "ltr" },
  { code: "de", htmlLang: "de", hreflang: "de", ogLocale: "de_DE", nativeName: "Deutsch", dir: "ltr" },
  { code: "it", htmlLang: "it", hreflang: "it", ogLocale: "it_IT", nativeName: "Italiano", dir: "ltr" },
  { code: "nl", htmlLang: "nl", hreflang: "nl", ogLocale: "nl_NL", nativeName: "Nederlands", dir: "ltr" },
  { code: "ru", htmlLang: "ru", hreflang: "ru", ogLocale: "ru_RU", nativeName: "Русский", dir: "ltr" },
  { code: "ja", htmlLang: "ja", hreflang: "ja", ogLocale: "ja_JP", nativeName: "日本語", dir: "ltr" },
  { code: "ko", htmlLang: "ko", hreflang: "ko", ogLocale: "ko_KR", nativeName: "한국어", dir: "ltr" },
  { code: "zh", htmlLang: "zh-CN", hreflang: "zh-CN", ogLocale: "zh_CN", nativeName: "中文", dir: "ltr" },
  { code: "ar", htmlLang: "ar", hreflang: "ar", ogLocale: "ar_AR", nativeName: "العربية", dir: "rtl" },
];

export const DEFAULT_LOCALE: LocaleCode = "pt";

const CODES = new Set<string>(LOCALES.map((locale) => locale.code));

export function isLocaleCode(value: string | undefined | null): value is LocaleCode {
  return typeof value === "string" && CODES.has(value);
}

export function toLocaleCode(value: string): LocaleCode {
  return isLocaleCode(value) ? value : DEFAULT_LOCALE;
}

export function getLocaleDefinition(code: LocaleCode): LocaleDefinition {
  const found = LOCALES.find((locale) => locale.code === code);
  if (!found) throw new Error(`Locale desconhecido: ${code}`);
  return found;
}

export function negotiateLocale(acceptLanguage: string | null): LocaleCode | undefined {
  if (!acceptLanguage) return undefined;

  const entries = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .filter((entry) => entry.tag && entry.tag !== "*" && entry.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const entry of entries) {
    const primary = entry.tag.split("-")[0];
    if (isLocaleCode(primary)) return primary;
  }

  return undefined;
}

export function stripLocalePrefix(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (!isLocaleCode(first)) return pathname;
  const stripped = `/${rest.join("/")}`;
  return stripped === "//" ? "/" : stripped;
}

export function localePath(code: LocaleCode, route: string): string {
  const clean = route === "/" ? "" : route;
  if (code === DEFAULT_LOCALE) return clean || "/";
  return `/${code}${clean}`;
}
