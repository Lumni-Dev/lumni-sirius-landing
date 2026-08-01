import type { Dictionary } from "@/i18n/types";

const fr: Dictionary = {
  meta: {
    title: "Sirius - Votre agent IA local pour Windows",
    description:
      "Sirius est un agent IA de bureau qui s’exécute sur votre PC. Trois modèles Sirius, 940 outils MCP et une approbation par action, sur votre PC et sous votre contrôle.",
  },
  nav: {
    features: "Fonctionnalités",
    models: "Modèles",
    principles: "Principes",
    download: "Bientôt",
    ariaPrimary: "Principal",
    language: "Langue",
  },
  hero: {
    brand: "Sirius",
    title: "Votre agent IA local",
    titleMuted: " pour Windows.",
    lead: "Un agent de bureau pour Windows qui code, modifie des fichiers et organise votre travail avec 940 outils natifs, directement sur votre machine.",
    ctaPrimary: "Bientôt",
    ctaSecondary: "Voir les capacités",
  },
  features: {
    kicker: "Capacités",
    title: "Ce que Sirius apporte à votre bureau.",
    lead: "Une composition pour le vrai travail : chat, outils et intégrations, sans transformer le bureau en collage de panneaux.",
    items: [
      {
        n: "01",
        label: "Agent",
        title: "IA locale sur votre PC",
        body: "Trois modèles Sirius s’exécutent sur votre machine et sont choisis automatiquement pour chaque tâche. Vous demandez, Sirius s’en occupe.",
      },
      {
        n: "02",
        label: "Outils",
        title: "940 outils MCP",
        body: "48 familles, des fichiers et git aux bases de données, à Office, aux images et aux PDF, sélectionnés par embeddings à chaque requête.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills et sous-agents",
        body: "Enregistrez des /commandes et des agents spécialistes. Ils s’activent quand le message correspond, sans rien à configurer.",
      },
      {
        n: "04",
        label: "Streaming",
        title: "Réponses en direct",
        body: "Les réponses arrivent en streaming et chaque action passe par une approbation Autoriser ou Refuser avant de s’exécuter.",
      },
      {
        n: "05",
        label: "Travail",
        title: "Notes, rappels, plannings",
        body: "Notes rapides, rappels, alarmes et prompts quotidiens planifiés, conservés dans des fichiers locaux sur votre PC.",
      },
      {
        n: "06",
        label: "Contrôle",
        title: "Effort, permissions, Auto",
        body: "Choisissez effort et permission à chaque tour, ou laissez Auto choisir le modèle le moins cher qui fait quand même le travail.",
      },
    ],
  },
  models: {
    kicker: "Modèles",
    title: "Trois modèles, un seul assistant.",
    lead: "Sirius choisit le bon modèle pour chaque requête. Vous ne gérez jamais un modèle, vous demandez simplement.",
    ariaList: "Modèles Sirius",
    items: [
      {
        name: "Sirius 1",
        tier: "Rapide",
        body: "Pour le chat et les tâches légères. Des réponses courtes, économiques et sans attente.",
      },
      {
        name: "Sirius 2",
        tier: "Équilibré",
        body: "Le choix par défaut au quotidien : fichiers, terminal, données et documents, avec un solide équilibre entre coût et qualité.",
      },
      {
        name: "Sirius 3",
        tier: "Le plus capable",
        body: "Pour le raisonnement et les flux à plusieurs étapes, appelé uniquement quand la tâche en a vraiment besoin.",
      },
    ],
  },
  principles: {
    kicker: "Principes",
    title: "Conçu comme l’app que vous ouvrez déjà.",
    items: [
      {
        kicker: "01 · Local",
        title: "Tout reste sur votre machine",
        body: "Sirius est une app native à Windows qui s’exécute sur votre PC, sans navigateur et sans port publié.",
      },
      {
        kicker: "02 · Effort",
        title: "Ne dépensez que le nécessaire",
        body: "L’effort, les permissions et le routage Auto choisissent le chemin le moins cher qui livre quand même le résultat.",
      },
      {
        kicker: "03 · Focus",
        title: "Un endroit calme pour travailler",
        body: "Une interface épurée avec Space Grotesk. Le bureau reste concentré, pas un tableau de bord surchargé.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Installez sur Windows. Ouvrez-le. Demandez de l’aide.",
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
