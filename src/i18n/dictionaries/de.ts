import type { Dictionary } from "@/i18n/types";

const de: Dictionary = {
  meta: {
    title: "Sirius - Dein lokaler KI-Agent für Windows",
    description:
      "Sirius ist ein Desktop-KI-Agent, der auf deinem PC läuft. Drei Sirius-Modelle, 940 MCP-Tools und Freigabe pro Aktion, auf deinem PC und unter deiner Kontrolle.",
  },
  nav: {
    features: "Funktionen",
    models: "Modelle",
    principles: "Prinzipien",
    download: "Demnächst",
    ariaPrimary: "Primär",
    language: "Sprache",
  },
  hero: {
    brand: "Sirius",
    title: "Dein lokaler KI-Agent",
    titleMuted: " für Windows.",
    lead: "Ein Desktop-Agent für Windows, der programmiert, Dateien bearbeitet und deine Arbeit organisiert, mit 940 nativen Tools, direkt auf deiner Maschine.",
    ctaPrimary: "Demnächst",
    ctaSecondary: "Fähigkeiten ansehen",
  },
  features: {
    kicker: "Fähigkeiten",
    title: "Was Sirius auf deinen Schreibtisch bringt.",
    lead: "Eine Komposition für echte Arbeit: Chat, Tools und Integrationen, ohne den Desktop in eine Collage aus Panels zu verwandeln.",
    items: [
      {
        n: "01",
        label: "Agent",
        title: "Lokale KI auf deinem PC",
        body: "Drei Sirius-Modelle laufen auf deiner Maschine und werden für jede Aufgabe automatisch ausgewählt. Du fragst, Sirius erledigt es.",
      },
      {
        n: "02",
        label: "Tools",
        title: "940 MCP-Tools",
        body: "48 Familien, von Dateien und git bis zu Datenbanken, Office, Bildern und PDFs, bei jeder Anfrage per Embeddings ausgewählt.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills und Subagenten",
        body: "Speichere /Befehle und spezialisierte Agenten. Sie aktivieren sich, wenn die Nachricht passt, ganz ohne Konfiguration.",
      },
      {
        n: "04",
        label: "Streaming",
        title: "Live-Antworten",
        body: "Antworten kommen im Streaming an, und jede Aktion durchläuft vor der Ausführung eine Freigabe mit Erlauben oder Ablehnen.",
      },
      {
        n: "05",
        label: "Arbeit",
        title: "Notizen, Erinnerungen, Zeitpläne",
        body: "Schnellnotizen, Erinnerungen, Alarme und täglich geplante Prompts, gespeichert in lokalen Dateien auf deinem PC.",
      },
      {
        n: "06",
        label: "Kontrolle",
        title: "Aufwand, Berechtigungen, Auto",
        body: "Wähle Aufwand und Berechtigung pro Turn, oder lass Auto das günstigste Modell wählen, das die Aufgabe trotzdem erledigt.",
      },
    ],
  },
  models: {
    kicker: "Modelle",
    title: "Drei Modelle, ein Assistent.",
    lead: "Sirius wählt das richtige Modell für jede Anfrage. Du verwaltest nie ein Modell, du fragst einfach.",
    ariaList: "Sirius-Modelle",
    items: [
      {
        name: "Sirius 1",
        tier: "Schnell",
        body: "Für Chat und leichte Aufgaben. Kurze, günstige Antworten ohne Wartezeit.",
      },
      {
        name: "Sirius 2",
        tier: "Ausgewogen",
        body: "Der Alltagsstandard: Dateien, Terminal, Daten und Dokumente, mit einem soliden Gleichgewicht aus Kosten und Qualität.",
      },
      {
        name: "Sirius 3",
        tier: "Am leistungsfähigsten",
        body: "Für Reasoning und mehrstufige Abläufe, nur aufgerufen, wenn die Aufgabe es wirklich braucht.",
      },
    ],
  },
  principles: {
    kicker: "Prinzipien",
    title: "Gebaut wie die App, die du schon öffnest.",
    items: [
      {
        kicker: "01 · Lokal",
        title: "Es bleibt auf deiner Maschine",
        body: "Sirius ist eine native Windows-App, die auf deinem PC läuft, ohne Browser und ohne veröffentlichten Port.",
      },
      {
        kicker: "02 · Aufwand",
        title: "Gib nur aus, was nötig ist",
        body: "Aufwand, Berechtigungen und Auto-Routing wählen den günstigsten Weg, der das Ergebnis trotzdem liefert.",
      },
      {
        kicker: "03 · Fokus",
        title: "Ein ruhiger Ort zum Arbeiten",
        body: "Eine klare Oberfläche mit Space Grotesk. Der Desktop bleibt fokussiert, kein überfülltes Dashboard.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Auf Windows installieren. Öffnen. Um Hilfe bitten.",
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
