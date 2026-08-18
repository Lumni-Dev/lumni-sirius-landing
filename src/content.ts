/** Todo o texto do site, em português. (As traduções foram removidas; se um dia
 * voltarem, este arquivo vira o dicionário base de novo.) */

export const SITE_URL = "https://sirius.lumni.dev.br";

export const content = {
  meta: {
    title: "Sirius - Seu agente de IA local para Windows",
    description:
      "Sirius é um agente de IA para desktop que roda no seu PC. Um só modelo que se adapta sozinho, 940 ferramentas MCP e aprovação de cada ação, no seu PC e sob o seu controle.",
  },
  nav: {
    features: "Recursos",
    models: "Modelo",
    principles: "Princípios",
    extension: "Extensão",
    dashboard: "Dashboard",
    download: "Em breve",
    ariaPrimary: "Principal",
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
        body: "O Sirius roda na sua máquina e se adapta automaticamente a cada tarefa. Você pede, o Sirius resolve.",
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
        title: "Permissões e Auto",
        body: "Você define a permissão por turno; o Sirius escolhe sozinho o esforço e o caminho mais barato que ainda resolve.",
      },
    ],
  },
  models: {
    kicker: "Modelo",
    title: "Um só modelo. O Sirius.",
    lead: "O Sirius escolhe sozinho a profundidade certa para cada pedido. Você não gerencia modelo nenhum, só pede.",
    ariaList: "Como o Sirius se adapta",
    items: [
      {
        name: "Rápido quando dá",
        tier: "Leve",
        body: "Conversa e tarefas leves ganham respostas curtas e baratas, sem espera.",
      },
      {
        name: "Profundo quando precisa",
        tier: "Pesado",
        body: "Raciocínio e fluxos com muitos passos acionam mais capacidade, só quando a tarefa realmente pede.",
      },
      {
        name: "Você não gerencia",
        tier: "Automático",
        body: "Nada de escolher modelo ou esforço: o Sirius decide sozinho o melhor caminho a cada pedido.",
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
        body: "O Sirius escolhe sozinho o esforço e o caminho mais barato que ainda entrega o resultado; você só define as permissões.",
      },
      {
        kicker: "03 · Foco",
        title: "Um lugar calmo para trabalhar",
        body: "Interface limpa com Space Grotesk. O desktop permanece focado, não um dashboard lotado.",
      },
    ],
  },
  extension: {
    kicker: "Extensão",
    title: "Sirius também no seu navegador.",
    lead: "A Sirius Extension conecta o app ao Chrome. Com o modo navegador ligado, o Sirius navega, lê, clica e digita por você, sempre sob a sua permissão.",
    items: [
      {
        kicker: "01 · Comando",
        title: "Você pede, ele executa",
        body: "Peça no chat e acompanhe: abrir sites, pesquisar, preencher e ler páginas, um passo de cada vez, com você vendo tudo.",
      },
      {
        kicker: "02 · Controle",
        title: "Liga e desliga num botão",
        body: "A extensão só conecta enquanto o modo navegador está ligado no app. Desligou, desconectou na hora.",
      },
      {
        kicker: "03 · Local",
        title: "Nada sai pela extensão",
        body: "Ela conversa apenas com o app Sirius no seu próprio PC. Sem servidores externos, sem análise de dados, sem anúncios.",
      },
    ],
    button: "Instalar na Chrome Web Store",
    buttonHref:
      "https://chromewebstore.google.com/detail/pbcofjcmmjnigebanbjeaaidanljamaf",
    note: "Gratuita. Requer o app Sirius para Windows.",
  },
  dashboard: {
    kicker: "Dashboard",
    title: "Suas métricas de uso, num painel.",
    lead: "Um dashboard analítico na web para acompanhar o seu uso do Sirius: requisições, tokens, latência, modelos, esforço e personalidades, com login pela mesma conta Google do app.",
    url: "dashboard.lumni.dev.br",
    imageAlt:
      "Sirius Dashboard: cartões de métricas de uso — requisições, tokens, latência — e gráficos.",
    items: [
      {
        kicker: "01 · Métricas",
        title: "Tudo que importa, agregado",
        body: "Requisições, tokens de entrada e saída, latência p50/p95, distribuição por modelo, esforço e personalidade, e um mapa de horários de uso.",
      },
      {
        kicker: "02 · Login Google",
        title: "A sua conta, os seus dados",
        body: "Entre com a mesma conta Google do Sirius e veja apenas as suas métricas. Sem gerenciar senha nem banco de dados.",
      },
      {
        kicker: "03 · Privado",
        title: "Somente leitura, sem conversas",
        body: "O painel só lê métricas agregadas pelo próprio Sirius. Nenhum conteúdo das suas conversas é exibido.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Instale no Windows. Abra. Peça ajuda.",
    button: "Em breve",
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
} as const;
