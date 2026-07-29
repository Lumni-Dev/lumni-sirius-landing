import { LOCALE_COOKIE, type LocaleCode } from "@/i18n/config";

/** Persiste a escolha explícita de idioma; o proxy passa a respeitá-la. */
export function rememberLocale(code: LocaleCode): void {
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; SameSite=Lax${secure}`;
}
