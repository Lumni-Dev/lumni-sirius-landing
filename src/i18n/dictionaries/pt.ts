import type { Dictionary } from "@/i18n/types";

const pt: Dictionary = {
  meta: {
    title: "Sirius - Seu agente de IA local para Windows",
    description:
      "Sirius é um agente de IA para desktop que roda no seu PC. Três modelos Sirius, 940 ferramentas MCP e aprovação de cada ação, no seu PC e sob o seu controle.",
  },
  nav: {
    features: "Recursos",
    models: "Modelos",
    principles: "Princípios",
    download: "Em breve",
    ariaPrimary: "Principal",
    language: "Idioma",
  },
  hero: {
    brand: "Sirius",
    title: "Seu agente de IA local",
    titleMuted: " para Windows.",
    lead: "Um agente desktop para Windows que programa, edita arquivos e organiza o seu trabalho com 940 ferramentas nativas, direto na sua máquina.",
    ctaPrimary: "Em breve",
    ctaSecondary: "Ver capacidades",
  },
  features: {
    kicker: "Capacidades",
    title: "O que o Sirius traz para a sua mesa.",
    lead: "Uma composição para o trabalho: chat, ferramentas e integrações, sem transformar o desktop numa colagem de painéis.",
    items: [
      {
        n: "01",
        label: "Agente",
        title: "IA local no seu PC",
        body: "Três modelos Sirius rodam na sua máquina e são escolhidos automaticamente conforme a tarefa. Você pede, o Sirius resolve.",
      },
      {
        n: "02",
        label: "Ferramentas",
        title: "940 ferramentas MCP",
        body: "48 famílias, de arquivos e git a bancos de dados, Office, imagens e PDFs, selecionadas por embeddings a cada pedido.",
      },
      {
        n: "03",
        label: "Skills",
        title: "Skills e subagentes",
        body: "Salve /comandos e agentes especialistas. Eles ativam quando a mensagem combina, sem configurar nada.",
      },
      {
        n: "04",
        label: "Streaming",
        title: "Resposta ao vivo",
        body: "As respostas chegam em streaming e cada ação passa por uma aprovação Permitir ou Negar antes de rodar.",
      },
      {
        n: "05",
        label: "Trabalho",
        title: "Notas, lembretes, agendas",
        body: "Notas rápidas, lembretes, alarmes e prompts diários agendados, guardados em arquivos locais no seu PC.",
      },
      {
        n: "06",
        label: "Controle",
        title: "Esforço, permissões, Auto",
        body: "Escolha esforço e permissão por turno, ou deixe o Auto escolher o modelo mais barato que ainda resolve.",
      },
    ],
  },
  models: {
    kicker: "Modelos",
    title: "Três modelos, um só assistente.",
    lead: "O Sirius escolhe o modelo certo para cada pedido. Você não gerencia modelo nenhum, só pede.",
    ariaList: "Modelos do Sirius",
    items: [
      {
        name: "Sirius A",
        tier: "Rápido",
        body: "Para conversa e tarefas leves. Respostas curtas e baratas, sem espera.",
      },
      {
        name: "Sirius B",
        tier: "Equilibrado",
        body: "O padrão do dia a dia: arquivos, terminal, dados e documentos, com boa relação entre custo e qualidade.",
      },
      {
        name: "Sirius X",
        tier: "Mais capaz",
        body: "Para raciocínio e fluxos com muitos passos, acionado só quando a tarefa realmente pede.",
      },
    ],
  },
  principles: {
    kicker: "Princípios",
    title: "Feito como o app que você já abre.",
    items: [
      {
        kicker: "01 · Local",
        title: "Fica na sua máquina",
        body: "O Sirius é um app nativo de Windows que roda no seu PC, sem navegador e sem porta publicada.",
      },
      {
        kicker: "02 · Esforço",
        title: "Gaste só o necessário",
        body: "Esforço, permissões e o roteamento Auto escolhem o caminho mais barato que ainda entrega o resultado.",
      },
      {
        kicker: "03 · Foco",
        title: "Um lugar calmo para trabalhar",
        body: "Interface limpa com Space Grotesk. O desktop permanece focado, não um dashboard lotado.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Instale no Windows. Abra. Peça ajuda.",
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
