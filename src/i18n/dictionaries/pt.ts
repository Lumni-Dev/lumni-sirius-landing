import type { Dictionary } from "@/i18n/types";

const pt: Dictionary = {
  meta: {
    title: "Sirius | Seu agente de IA local para Windows",
    description:
      "Sirius é um agente de IA para desktop que roda no seu PC com as suas próprias chaves de API. Código, skills, voz, e-mail e mais sob um céu estrelado.",
  },
  nav: {
    features: "Recursos",
    providers: "Provedores",
    principles: "Princípios",
    download: "Em breve",
    ariaPrimary: "Principal",
    language: "Idioma",
  },
  hero: {
    brand: "Sirius",
    title: "Seu agente de IA local",
    titleMuted: " sob um céu quieto.",
    lead: "Um agente desktop para Windows que programa, fala e organiza com ferramentas nativas e as suas próprias chaves de API.",
    ctaPrimary: "Em breve",
    ctaSecondary: "Explorar a noite",
  },
  features: {
    kicker: "Capacidades",
    title: "O que a estrela traz para a sua mesa.",
    lead: "Uma composição para o trabalho: chat, ferramentas e integrações, sem transformar o desktop num colagem de painéis.",
    items: [
      {
        n: "01",
        label: "Agente",
        title: "IA local no seu PC",
        body: "Claude, GPT, Gemini, DeepSeek e mais rodam na sua máquina com as suas chaves de API. Os slots Soon cobrem o resto do catálogo.",
      },
      {
        n: "02",
        label: "Ferramentas",
        title: "Shell, arquivos e patches",
        body: "O Sirius inspeciona e edita o seu workspace com as ferramentas do próprio provedor. Sem sopa de tools customizadas.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills pessoais e multi-agentes",
        body: "Salve /comandos e agentes especialistas em ~/sirius. Eles ativam quando a mensagem combina.",
      },
      {
        n: "04",
        label: "Voz",
        title: "Fale e ouça",
        body: "Ditafone no composer e ouça as respostas narradas, com o microfone silenciado enquanto o Sirius fala.",
      },
      {
        n: "05",
        label: "Trabalho",
        title: "E-mail, notas, alarmes, agendas",
        body: "Fixe integrações na rail: e-mail IMAP, notas rápidas, alarmes e prompts diários agendados.",
      },
      {
        n: "06",
        label: "Controle",
        title: "Esforço, permissões, Auto",
        body: "Escolha força e permissão por turno, ou deixe o Auto escolher o modelo mais barato que ainda resolve.",
      },
    ],
  },
  providers: {
    kicker: "Constelação",
    title: "Cada provedor no mapa.",
    lead: "Os backends ao vivo brilham agora. O resto espera como slots Soon, prontos quando o SDK ou CLI nativo chegar.",
    ariaList: "Provedores de IA",
    live: "Ao vivo",
    soon: "Em breve",
  },
  principles: {
    kicker: "Princípios",
    title: "Feito como o app que você já abre.",
    items: [
      {
        kicker: "01 · Chaves",
        title: "Fica na sua máquina",
        body: "As chaves de API ficam no keyring do SO. O modelo roda localmente via SDKs e CLIs nativos.",
      },
      {
        kicker: "02 · Força",
        title: "Gaste só o necessário",
        body: "Esforço, permissões e o roteamento Auto escolhem o caminho mais barato que ainda entrega o resultado.",
      },
      {
        kicker: "03 · Céu",
        title: "Um lugar quieto para trabalhar",
        body: "Starfield, orb e Space Grotesk. O desktop abre como a noite, não como um dashboard lotado.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Instale no Windows. Cole a sua chave. Peça ajuda sob a Força.",
    button: "Em breve",
    mailSubject: "Download do Sirius",
  },
  footer: {
    companyDescription:
      "A Lumni constrói sistemas, automatiza processos e embute engenheiros no seu time. Do primeiro diagnóstico ao código em produção.",
    servicesHeading: "Serviços",
    contactHeading: "Contato",
    services: [
      "Desenvolvimento de sistemas e aplicações",
      "Automação de processos",
      "Consultoria em tecnologia",
      "Cibersegurança",
      "Suporte a desenvolvimento",
    ],
    servicesHref: "https://lumni.dev.br/#servicos",
    privacy: "Privacidade",
    terms: "Termos",
    backToTop: "Voltar ao topo",
    rights: "Todos os direitos reservados.",
    ariaLegalNav: "Páginas legais",
    privacyHref: "https://lumni.dev.br/privacy",
    termsHref: "https://lumni.dev.br/terms",
  },
};

export default pt;
