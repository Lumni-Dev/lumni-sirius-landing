import type { Dictionary } from "@/i18n/types";

const de: Dictionary = {
  meta: {
    title: "Sirius - Dein lokaler KI-Agent für Windows",
    description:
      "Sirius ist ein Desktop-KI-Agent, der auf deinem PC mit deinen eigenen API-Keys läuft. Code, Skills, Stimme, E-Mail und mehr unter einem ruhigen Sternenhimmel.",
  },
  nav: {
    features: "Funktionen",
    providers: "Anbieter",
    principles: "Prinzipien",
    download: "Demnächst",
    ariaPrimary: "Primär",
    language: "Sprache",
  },
  hero: {
    brand: "Sirius",
    title: "Dein lokaler KI-Agent",
    titleMuted: "  für Windows.",
    lead: "Ein Windows-Desktop-Agent, der mit nativen Tools und deinen eigenen API-Keys programmiert, spricht und organisiert.",
    ctaPrimary: "Demnächst",
    ctaSecondary: "Funktionen ansehen",
  },
  features: {
    kicker: "Fähigkeiten",
    title: "Was Sirius auf deinen Schreibtisch bringt.",
    lead: "Eine Komposition für die Arbeit: Chat, Tools und Integrationen — ohne deinen Desktop in ein Dashboard-Collage zu verwandeln.",
    items: [
      {
        n: "01",
        label: "Agent",
        title: "Lokale KI auf deinem PC",
        body: "Claude, GPT, Gemini, DeepSeek und mehr laufen auf deiner Maschine mit deinen eigenen API-Keys. Soon-Slots decken den Rest des Katalogs ab.",
      },
      {
        n: "02",
        label: "Tools",
        title: "Shell, Dateien und Patches",
        body: "Sirius prüft und bearbeitet deinen Workspace mit den eigenen Tools des Anbieters. Keine selbstgebaute Tool-Suppe.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Persönliche Skills & Multi-Agents",
        body: "Speichere /Befehle und Spezialisten-Agents unter ~/sirius. Sie aktivieren sich, wenn deine Nachricht passt.",
      },
      {
        n: "04",
        label: "Stimme",
        title: "Sprechen und zuhören",
        body: "Diktiere in den Composer und höre Antworten vorgelesen — Mikrofon sauber stumm, während Sirius spricht.",
      },
      {
        n: "05",
        label: "Arbeit",
        title: "E-Mail, Notizen, Alarme, Pläne",
        body: "Pinne Integrationen an die Rail: IMAP-Mail, Schnellnotizen, Alarme und täglich geplante Prompts.",
      },
      {
        n: "06",
        label: "Kontrolle",
        title: "Aufwand, Berechtigungen, Auto",
        body: "Wähle Force und Berechtigung pro Turn, oder lass Auto das günstigste Modell wählen, das trotzdem liefert.",
      },
    ],
  },
  providers: {
    kicker: "Konstellation",
    title: "Jeder Anbieter an einem Ort.",
    lead: "Live-Backends leuchten jetzt. Der Rest wartet als Soon-Slots, bereit wenn ihr natives SDK oder CLI kommt.",
    ariaList: "KI-Anbieter",
    live: "Live",
    soon: "Soon",
  },
  principles: {
    kicker: "Prinzipien",
    title: "Gebaut wie die App, die du schon öffnest.",
    items: [
      {
        kicker: "01 · Schlüssel",
        title: "Bleib auf deiner Maschine",
        body: "API-Keys liegen im OS-Keyring. Das Modell läuft lokal über native SDKs und CLIs.",
      },
      {
        kicker: "02 · Aufwand",
        title: "Gib nur aus, was nötig ist",
        body: "Aufwand, Berechtigungen und Auto-Routing wählen den günstigsten Weg, der die Aufgabe trotzdem erledigt.",
      },
      {
        kicker: "03 · Fokus",
        title: "Ein ruhiger Ort zum Arbeiten",
        body: "Starfield, Orb und Space Grotesk. Der Desktop öffnet sich wie die Nacht — nicht wie ein überfülltes Dashboard.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Auf Windows installieren. Key einfügen. Unter der Force um Hilfe bitten.",
    button: "Demnächst",
    mailSubject: "Sirius-Download",
  },
  footer: {
    companyDescription:
      "Lumni baut Systeme, automatisiert Prozesse und bettet Ingenieure in dein Team ein. Von der ersten Diagnose bis zum Code in Produktion.",
    servicesHeading: "Leistungen",
    contactHeading: "Kontakt",
    services: [
      "Systementwicklung und Anwendungen",
      "Prozessautomatisierung",
      "Technologieberatung",
      "Cybersicherheit",
      "Entwicklungsunterstützung",
    ],
    servicesHref: "https://lumni.dev.br/de#servicos",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    backToTop: "Nach oben",
    rights: "Alle Rechte vorbehalten.",
    ariaLegalNav: "Rechtliche Seiten",
    privacyHref: "https://lumni.dev.br/de/privacy",
    termsHref: "https://lumni.dev.br/de/terms",
  },
};

export default de;
