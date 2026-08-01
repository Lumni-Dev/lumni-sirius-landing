import type { Dictionary } from "@/i18n/types";

const en: Dictionary = {
  meta: {
    title: "Sirius - Your local AI agent for Windows",
    description:
      "Sirius is a desktop AI agent that runs on your PC with your own API key. Three Sirius models, 940 MCP tools and per-action approval, on your PC and under your control.",
  },
  nav: {
    features: "Features",
    models: "Models",
    principles: "Principles",
    download: "Coming soon",
    ariaPrimary: "Primary",
    language: "Language",
  },
  hero: {
    brand: "Sirius",
    title: "Your local AI agent",
    titleMuted: " for Windows.",
    lead: "A desktop agent for Windows that codes, edits files and organizes your work with 940 native tools and your own API key.",
    ctaPrimary: "Coming soon",
    ctaSecondary: "See capabilities",
  },
  features: {
    kicker: "Capabilities",
    title: "What Sirius brings to your desk.",
    lead: "A composition for real work: chat, tools and integrations, without turning the desktop into a collage of panels.",
    items: [
      {
        n: "01",
        label: "Agent",
        title: "Local AI on your PC",
        body: "Three Sirius models run with your API key and are picked automatically for each task. You ask, Sirius handles it.",
      },
      {
        n: "02",
        label: "Tools",
        title: "940 MCP tools",
        body: "48 families, from files and git to databases, Office, images and PDFs, selected by embeddings on every request.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills and subagents",
        body: "Save /commands and specialist agents. They activate when the message matches, with nothing to configure.",
      },
      {
        n: "04",
        label: "Streaming",
        title: "Live replies",
        body: "Replies arrive in streaming and every action goes through an Allow or Deny approval before it runs.",
      },
      {
        n: "05",
        label: "Work",
        title: "Notes, reminders, schedules",
        body: "Quick notes, reminders, alarms and scheduled daily prompts, kept in local files on your PC.",
      },
      {
        n: "06",
        label: "Control",
        title: "Effort, permissions, Auto",
        body: "Pick effort and permission per turn, or let Auto choose the cheapest model that still gets it done.",
      },
    ],
  },
  models: {
    kicker: "Models",
    title: "Three models, one assistant.",
    lead: "Sirius picks the right model for each request. You never manage a model, you just ask.",
    ariaList: "Sirius models",
    items: [
      {
        name: "Sirius 1",
        tier: "Fast",
        body: "For chat and light tasks. Short, cheap replies with no wait.",
      },
      {
        name: "Sirius 2",
        tier: "Balanced",
        body: "The everyday default: files, terminal, data and documents, with a solid balance of cost and quality.",
      },
      {
        name: "Sirius 3",
        tier: "Most capable",
        body: "For reasoning and many-step flows, called only when the task truly needs it.",
      },
    ],
  },
  principles: {
    kicker: "Principles",
    title: "Built like the app you already open.",
    items: [
      {
        kicker: "01 · Keys",
        title: "It stays on your machine",
        body: "Your API key stays on your PC. The app is native to Windows, with no browser and no published port.",
      },
      {
        kicker: "02 · Effort",
        title: "Spend only what you need",
        body: "Effort, permissions and Auto routing pick the cheapest path that still delivers the result.",
      },
      {
        kicker: "03 · Focus",
        title: "A calm place to work",
        body: "A clean interface with Space Grotesk. The desktop stays focused, not a crowded dashboard.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Install on Windows. Paste your key. Ask for help.",
    button: "Coming soon",
    mailSubject: "Sirius download",
  },
  footer: {
    companyDescription:
      "Lumni builds systems, automates processes and embeds engineers into your team. From the first diagnosis to code running in production.",
    servicesHeading: "Services",
    contactHeading: "Contact",
    services: [
      "Systems and application development",
      "Process automation",
      "Technology consulting",
      "Cybersecurity",
      "Development support",
    ],
    servicesHref: "https://lumni.dev.br/en#servicos",
    privacy: "Privacy",
    terms: "Terms",
    backToTop: "Back to top",
    rights: "All rights reserved.",
    ariaLegalNav: "Legal pages",
    privacyHref: "https://lumni.dev.br/en/privacy",
    termsHref: "https://lumni.dev.br/en/terms",
  },
};

export default en;
