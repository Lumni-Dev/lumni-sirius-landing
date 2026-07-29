import type { Dictionary } from "@/i18n/types";

const en: Dictionary = {
  meta: {
    title: "Sirius - Your local AI agent for Windows",
    description:
      "Sirius is a desktop AI agent that runs on your PC with your own API keys. Code, skills, voice, email, and more under a quiet starfield.",
  },
  nav: {
    features: "Features",
    providers: "Providers",
    principles: "Principles",
    download: "Coming soon",
    ariaPrimary: "Primary",
    language: "Language",
  },
  hero: {
    brand: "Sirius",
    title: "Your local AI agent",
    titleMuted: " under a quiet sky.",
    lead: "A Windows desktop agent that codes, speaks, and organizes with native tools and your own API keys.",
    ctaPrimary: "Coming soon",
    ctaSecondary: "Explore the night",
  },
  features: {
    kicker: "Capabilities",
    title: "What the star brings to your desk.",
    lead: "One composition for work: chat, tools, and integrations, without turning your desktop into a dashboard collage.",
    items: [
      {
        n: "01",
        label: "Agent",
        title: "Local AI on your PC",
        body: "Claude, GPT, Gemini, DeepSeek and more run on your machine with your own API keys. Soon slots cover the rest of the catalog.",
      },
      {
        n: "02",
        label: "Tools",
        title: "Shell, files, and patches",
        body: "Sirius inspects and edits your workspace with the provider’s own tools. No custom tool soup.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Personal skills & multi-agents",
        body: "Save /commands and specialist agents under ~/sirius. They activate when your message matches.",
      },
      {
        n: "04",
        label: "Voice",
        title: "Talk and listen",
        body: "Dictate into the composer and hear replies narrated, muted cleanly while Sirius speaks.",
      },
      {
        n: "05",
        label: "Work",
        title: "Email, notes, alarms, schedules",
        body: "Pin integrations on the rail: IMAP mail, quick notes, alarms, and daily scheduled prompts.",
      },
      {
        n: "06",
        label: "Control",
        title: "Effort, permissions, Auto",
        body: "Pick force and permission per turn, or leave Auto to choose the cheapest model that still performs.",
      },
    ],
  },
  providers: {
    kicker: "Constellation",
    title: "Every provider on the map.",
    lead: "Live backends shine now. The rest wait as Soon slots, ready when their native SDK or CLI lands.",
    ariaList: "AI providers",
    live: "Live",
    soon: "Soon",
  },
  principles: {
    kicker: "Principles",
    title: "Built like the app you already open.",
    items: [
      {
        kicker: "01 · Keys",
        title: "Stay on your machine",
        body: "API keys live in the OS keyring. The model runs locally through native SDKs and CLIs.",
      },
      {
        kicker: "02 · Force",
        title: "Spend only what you need",
        body: "Effort, permissions, and Auto routing pick the cheapest path that still gets the job done.",
      },
      {
        kicker: "03 · Sky",
        title: "A quiet place to work",
        body: "Starfield, orb, and Space Grotesk. The desktop opens like night, not a crowded dashboard.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Install on Windows. Paste your key. Ask for help under the Force.",
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
