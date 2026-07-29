import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Orbitron, Space_Grotesk } from "next/font/google";

import { EnsureScrollTop } from "@/components/EnsureScrollTop";
import {
  getLocaleDefinition,
  LOCALES,
  localePath,
  SITE_URL,
  toLocaleCode,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localeAlternates, ogAlternateLocales } from "@/i18n/metadata";
import "@/app/globals.css";

const space = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

interface LocaleParams {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale: locale.code }));
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocaleCode((await params).locale);
  const dict = getDictionary(locale);
  const definition = getLocaleDefinition(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: "Sirius",
    alternates: localeAlternates(locale, "/"),
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/sirius-logo.png", type: "image/png" },
      ],
      apple: [{ url: "/sirius-logo.png" }],
    },
    openGraph: {
      type: "website",
      locale: definition.ogLocale,
      alternateLocale: ogAlternateLocales(locale),
      url: localePath(locale, "/"),
      siteName: "Sirius",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LocaleParams) {
  const locale = toLocaleCode((await params).locale);
  const definition = getLocaleDefinition(locale);

  return (
    <html
      lang={definition.htmlLang}
      dir={definition.dir}
      className={`${space.variable} ${orbitron.variable} ${mono.variable}`}
    >
      <body>
        <EnsureScrollTop />
        {children}
      </body>
    </html>
  );
}
