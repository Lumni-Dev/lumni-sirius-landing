import { LOCALE_COOKIE, type LocaleCode } from "@/i18n/config";

/** Persiste a escolha explícita de idioma; o proxy passa a respeitá-la. */
export function rememberLocale(code: LocaleCode): void {
  document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; SameSite=Lax`;
}
