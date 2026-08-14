import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Orbitron, Space_Grotesk } from "next/font/google";

import { EnsureScrollTop } from "@/components/EnsureScrollTop";
import { content, SITE_URL } from "@/content";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: content.meta.title,
  description: content.meta.description,
  applicationName: "Sirius",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/sirius-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/sirius-logo.png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Sirius",
    title: content.meta.title,
    description: content.meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${space.variable} ${orbitron.variable} ${mono.variable}`}
    >
      <body>
        <EnsureScrollTop />
        {children}
      </body>
    </html>
  );
}
