import type { Dictionary } from "@/i18n/types";

const es: Dictionary = {
  meta: {
    title: "Sirius - Tu agente de IA local para Windows",
    description:
      "Sirius es un agente de IA de escritorio que se ejecuta en tu PC con tus propias claves de API. Código, skills, voz, correo y más — local y bajo tu control.",
  },
  nav: {
    features: "Funciones",
    providers: "Proveedores",
    principles: "Principios",
    download: "Próximamente",
    ariaPrimary: "Principal",
    language: "Idioma",
  },
  hero: {
    brand: "Sirius",
    title: "Tu agente de IA local",
    titleMuted: " para Windows.",
    lead: "Un agente de escritorio para Windows que programa, habla y organiza con herramientas nativas y tus propias claves de API.",
    ctaPrimary: "Próximamente",
    ctaSecondary: "Ver capacidades",
  },
  features: {
    kicker: "Capacidades",
    title: "Lo que Sirius trae a tu escritorio.",
    lead: "Una sola composición para el trabajo: chat, herramientas e integraciones, sin convertir tu escritorio en un collage de paneles.",
    items: [
      {
        n: "01",
        label: "Agente",
        title: "IA local en tu PC",
        body: "Claude, GPT, Gemini, DeepSeek y más se ejecutan en tu máquina con tus propias claves de API. Los slots Soon cubren el resto del catálogo.",
      },
      {
        n: "02",
        label: "Herramientas",
        title: "Shell, archivos y parches",
        body: "Sirius inspecciona y edita tu workspace con las herramientas propias del proveedor. Sin sopa de tools personalizadas.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills personales y multiagentes",
        body: "Guarda /comandos y agentes especialistas en ~/sirius. Se activan cuando tu mensaje coincide.",
      },
      {
        n: "04",
        label: "Voz",
        title: "Habla y escucha",
        body: "Dicta en el composer y escucha las respuestas narradas, con el micrófono silenciado mientras Sirius habla.",
      },
      {
        n: "05",
        label: "Trabajo",
        title: "Correo, notas, alarmas, agendas",
        body: "Fija integraciones en la rail: correo IMAP, notas rápidas, alarmas y prompts diarios programados.",
      },
      {
        n: "06",
        label: "Control",
        title: "Esfuerzo, permisos, Auto",
        body: "Elige fuerza y permiso por turno, o deja que Auto elija el modelo más barato que aún rinda.",
      },
    ],
  },
  providers: {
    kicker: "Proveedores",
    title: "Cada proveedor en un solo lugar.",
    lead: "Los backends en vivo ya están listos. El resto espera como slots Soon, listos cuando llegue su SDK o CLI nativo.",
    ariaList: "Proveedores de IA",
    live: "En vivo",
    soon: "Soon",
  },
  principles: {
    kicker: "Principios",
    title: "Hecho como la app que ya abres.",
    items: [
      {
        kicker: "01 · Claves",
        title: "Quédate en tu máquina",
        body: "Las claves de API viven en el keyring del SO. El modelo se ejecuta localmente mediante SDKs y CLIs nativos.",
      },
      {
        kicker: "02 · Esfuerzo",
        title: "Gasta solo lo necesario",
        body: "El esfuerzo, los permisos y el enrutamiento Auto eligen el camino más barato que aún termina el trabajo.",
      },
      {
        kicker: "03 · Foco",
        title: "Un lugar calmado para trabajar",
        body: "Interfaz limpia con Space Grotesk. El escritorio se mantiene enfocado, no como un dashboard abarrotado.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Instala en Windows. Pega tu clave. Pide ayuda.",
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
