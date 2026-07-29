import type { Dictionary } from "@/i18n/types";

const fr: Dictionary = {
  meta: {
    title: "Sirius | Votre agent IA local pour Windows",
    description:
      "Sirius est un agent IA de bureau qui s’exécute sur votre PC avec vos propres clés API. Code, skills, voix, e-mail et plus sous un ciel étoilé.",
  },
  nav: {
    features: "Fonctionnalités",
    providers: "Fournisseurs",
    principles: "Principes",
    download: "Bientôt",
    ariaPrimary: "Principal",
    language: "Langue",
  },
  hero: {
    brand: "Sirius",
    title: "Votre agent IA local",
    titleMuted: " sous un ciel tranquille.",
    lead: "Un agent de bureau pour Windows qui code, parle et organise avec des outils natifs et vos propres clés API.",
    ctaPrimary: "Bientôt",
    ctaSecondary: "Explorer la nuit",
  },
  features: {
    kicker: "Capacités",
    title: "Ce que l’étoile apporte à votre bureau.",
    lead: "Une seule composition pour le travail : chat, outils et intégrations, sans transformer votre bureau en collage de tableaux de bord.",
    items: [
      {
        n: "01",
        label: "Agent",
        title: "IA locale sur votre PC",
        body: "Claude, GPT, Gemini, DeepSeek et plus s’exécutent sur votre machine avec vos propres clés API. Les slots Soon couvrent le reste du catalogue.",
      },
      {
        n: "02",
        label: "Outils",
        title: "Shell, fichiers et correctifs",
        body: "Sirius inspecte et modifie votre workspace avec les outils propres du fournisseur. Pas de soupe d’outils custom.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills personnelles et multi-agents",
        body: "Enregistrez des /commandes et des agents spécialistes dans ~/sirius. Ils s’activent quand votre message correspond.",
      },
      {
        n: "04",
        label: "Voix",
        title: "Parlez et écoutez",
        body: "Dictez dans le composer et écoutez les réponses narrées, micro coupé proprement pendant que Sirius parle.",
      },
      {
        n: "05",
        label: "Travail",
        title: "E-mail, notes, alarmes, plannings",
        body: "Épinglez des intégrations sur la rail : mail IMAP, notes rapides, alarmes et prompts quotidiens planifiés.",
      },
      {
        n: "06",
        label: "Contrôle",
        title: "Effort, permissions, Auto",
        body: "Choisissez force et permission à chaque tour, ou laissez Auto choisir le modèle le moins cher qui tient encore la performance.",
      },
    ],
  },
  providers: {
    kicker: "Constellation",
    title: "Chaque fournisseur sur la carte.",
    lead: "Les backends en ligne brillent déjà. Le reste attend en slots Soon, prêts dès que leur SDK ou CLI natif arrive.",
    ariaList: "Fournisseurs d’IA",
    live: "En ligne",
    soon: "Soon",
  },
  principles: {
    kicker: "Principes",
    title: "Conçu comme l’app que vous ouvrez déjà.",
    items: [
      {
        kicker: "01 · Clés",
        title: "Restez sur votre machine",
        body: "Les clés API vivent dans le keyring du système. Le modèle s’exécute localement via des SDK et CLI natifs.",
      },
      {
        kicker: "02 · Force",
        title: "Ne dépensez que le nécessaire",
        body: "L’effort, les permissions et le routage Auto choisissent le chemin le moins cher qui mène encore au résultat.",
      },
      {
        kicker: "03 · Ciel",
        title: "Un endroit calme pour travailler",
        body: "Starfield, orb et Space Grotesk. Le bureau s’ouvre comme la nuit, pas comme un dashboard surchargé.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Installez sur Windows. Collez votre clé. Demandez de l’aide sous la Force.",
    button: "Bientôt",
    mailSubject: "Téléchargement de Sirius",
  },
  footer: {
    companyDescription:
      "Lumni construit des systèmes, automatise des processus et intègre des ingénieurs à votre équipe. Du premier diagnostic au code en production.",
    servicesHeading: "Services",
    contactHeading: "Contact",
    services: [
      "Développement de systèmes et d’applications",
      "Automatisation des processus",
      "Conseil en technologie",
      "Cybersécurité",
      "Support au développement",
    ],
    servicesHref: "https://lumni.dev.br/fr#servicos",
    privacy: "Confidentialité",
    terms: "Conditions",
    backToTop: "Retour en haut",
    rights: "Tous droits réservés.",
    ariaLegalNav: "Pages légales",
    privacyHref: "https://lumni.dev.br/fr/privacy",
    termsHref: "https://lumni.dev.br/fr/terms",
  },
};

export default fr;
