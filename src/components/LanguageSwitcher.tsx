"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { rememberLocale } from "@/i18n/client";
import { LOCALES, localePath, stripLocalePrefix, type LocaleCode } from "@/i18n/config";

interface LanguageSwitcherProps {
  current: LocaleCode;
  ariaLabel: string;
}

export function LanguageSwitcher({ current, ariaLabel }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const route = stripLocalePrefix(pathname ?? "/");

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="lang-switcher">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={ariaLabel}
        className="lang-switcher-btn"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="lang-switcher-globe"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a13.5 13.5 0 0 1 0 18a13.5 13.5 0 0 1 0-18" />
        </svg>
        <span className="lang-switcher-code">{current}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`lang-switcher-chevron${isOpen ? " is-open" : ""}`}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </button>

      {isOpen ? (
        <ul role="menu" aria-label={ariaLabel} className="lang-switcher-menu">
          {LOCALES.map((locale) => {
            const isCurrent = locale.code === current;

            return (
              <li key={locale.code} role="none">
                <a
                  role="menuitem"
                  href={localePath(locale.code, route)}
                  hrefLang={locale.hreflang}
                  lang={locale.htmlLang}
                  aria-current={isCurrent ? "true" : undefined}
                  onClick={() => {
                    rememberLocale(locale.code);
                    setIsOpen(false);
                  }}
                  className={`lang-switcher-item${isCurrent ? " is-current" : ""}`}
                >
                  {locale.nativeName}
                  <span>{locale.code}</span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
