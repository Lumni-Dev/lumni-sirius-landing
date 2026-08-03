import type { Dictionary } from "@/i18n/types";

const es: Dictionary = {
  meta: {
    title: "Sirius - Tu agente de IA local para Windows",
    description:
      "Sirius es un agente de IA de escritorio que se ejecuta en tu PC. Tres modelos Sirius, 940 herramientas MCP y aprobación por acción, en tu PC y bajo tu control.",
  },
  nav: {
    features: "Funciones",
    models: "Modelos",
    principles: "Principios",
    download: "Próximamente",
    ariaPrimary: "Principal",
    language: "Idioma",
  },
  hero: {
    brand: "Sirius",
    title: "Tu agente de IA local",
    titleMuted: " para Windows.",
    lead: "Un agente de escritorio para Windows que programa, edita archivos y organiza tu trabajo con 940 herramientas nativas, directamente en tu máquina.",
    ctaPrimary: "Próximamente",
    ctaSecondary: "Ver capacidades",
  },
  features: {
    kicker: "Capacidades",
    title: "Lo que Sirius trae a tu escritorio.",
    lead: "Una composición para el trabajo real: chat, herramientas e integraciones, sin convertir el escritorio en un collage de paneles.",
    items: [
      {
        n: "01",
        label: "Agente",
        title: "IA local en tu PC",
        body: "Tres modelos Sirius se ejecutan en tu máquina y se eligen automáticamente para cada tarea. Tú pides, Sirius se encarga.",
      },
      {
        n: "02",
        label: "Herramientas",
        title: "940 herramientas MCP",
        body: "48 familias, desde archivos y git hasta bases de datos, Office, imágenes y PDF, seleccionadas por embeddings en cada solicitud.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills y subagentes",
        body: "Guarda /comandos y agentes especialistas. Se activan cuando el mensaje coincide, sin nada que configurar.",
      },
      {
        n: "04",
        label: "Streaming",
        title: "Respuestas en vivo",
        body: "Las respuestas llegan en streaming y cada acción pasa por una aprobación de Permitir o Denegar antes de ejecutarse.",
      },
      {
        n: "05",
        label: "Trabajo",
        title: "Notas, recordatorios, agendas",
        body: "Notas rápidas, recordatorios, alarmas y prompts diarios programados, guardados en archivos locales de tu PC.",
      },
      {
        n: "06",
        label: "Control",
        title: "Esfuerzo, permisos, Auto",
        body: "Elige esfuerzo y permiso por turno, o deja que Auto elija el modelo más barato que aún resuelva la tarea.",
      },
    ],
  },
  models: {
    kicker: "Modelos",
    title: "Tres modelos, un asistente.",
    lead: "Sirius elige el modelo adecuado para cada solicitud. Nunca gestionas un modelo, solo pides.",
    ariaList: "Modelos Sirius",
    items: [
      {
        name: "Sirius A",
        tier: "Rápido",
        body: "Para chat y tareas ligeras. Respuestas cortas, baratas y sin espera.",
      },
      {
        name: "Sirius B",
        tier: "Equilibrado",
        body: "El valor por defecto del día a día: archivos, terminal, datos y documentos, con un sólido equilibrio entre coste y calidad.",
      },
      {
        name: "Sirius X",
        tier: "El más capaz",
        body: "Para razonamiento y flujos de muchos pasos, invocado solo cuando la tarea realmente lo necesita.",
      },
    ],
  },
  principles: {
    kicker: "Principios",
    title: "Hecho como la app que ya abres.",
    items: [
      {
        kicker: "01 · Local",
        title: "Se queda en tu máquina",
        body: "Sirius es una app nativa de Windows que se ejecuta en tu PC, sin navegador y sin puerto publicado.",
      },
      {
        kicker: "02 · Esfuerzo",
        title: "Gasta solo lo necesario",
        body: "El esfuerzo, los permisos y el enrutamiento Auto eligen el camino más barato que aún entrega el resultado.",
      },
      {
        kicker: "03 · Foco",
        title: "Un lugar calmado para trabajar",
        body: "Una interfaz limpia con Space Grotesk. El escritorio se mantiene enfocado, no como un dashboard abarrotado.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Instala en Windows. Ábrelo. Pide ayuda.",
    button: "Próximamente",
    mailSubject: "Descarga de Sirius",
  },
  footer: {
    companyDescription:
      "Lumni construye sistemas, automatiza procesos e incorpora ingenieros a tu equipo. Del primer diagnóstico al código en producción.",
    servicesHeading: "Servicios",
    contactHeading: "Contacto",
    services: [
      "Desarrollo de sistemas y aplicaciones",
      "Automatización de procesos",
      "Consultoría tecnológica",
      "Ciberseguridad",
      "Soporte al desarrollo",
    ],
    servicesHref: "https://lumni.dev.br/es#servicos",
    privacy: "Privacidad",
    terms: "Términos",
    backToTop: "Volver arriba",
    rights: "Todos los derechos reservados.",
    ariaLegalNav: "Páginas legales",
    privacyHref: "https://lumni.dev.br/es/privacy",
    termsHref: "https://lumni.dev.br/es/terms",
  },
};

export default es;
