import type { Dictionary } from "@/i18n/types";

const zh: Dictionary = {
  meta: {
    title: "Sirius，面向 Windows 的本地 AI 代理",
    description:
      "Sirius 是一款在您的电脑上运行的桌面 AI 代理。三款 Sirius 模型、940 个 MCP 工具，以及逐操作审批，尽在您的电脑，由您掌控。",
  },
  nav: {
    features: "功能",
    models: "模型",
    principles: "原则",
    download: "即将推出",
    ariaPrimary: "主导航",
    language: "语言",
  },
  hero: {
    brand: "Sirius",
    title: "你的本地 AI 代理",
    titleMuted: "（适用于 Windows）。",
    lead: "一款面向 Windows 的桌面代理，凭借 940 个原生工具，直接在您的机器上完成编程、编辑文件与整理工作。",
    ctaPrimary: "即将推出",
    ctaSecondary: "查看功能",
  },
  features: {
    kicker: "能力",
    title: "Sirius 带到你桌面的东西。",
    lead: "面向真实工作的组合：聊天、工具与集成，而不会把桌面变成一堆面板的拼贴。",
    items: [
      {
        n: "01",
        label: "代理",
        title: "电脑上的本地 AI",
        body: "三款 Sirius 模型在您的机器上运行，并为每项任务自动选择。您提出需求，Sirius 来处理。",
      },
      {
        n: "02",
        label: "工具",
        title: "940 个 MCP 工具",
        body: "48 个工具族，从文件和 git 到数据库、Office、图像和 PDF，每次请求都通过向量嵌入进行筛选。",
      },
      {
        n: "03",
        label: "Skills",
        title: "技能与子代理",
        body: "保存 /命令和专家代理。当消息匹配时它们会自动激活，无需任何配置。",
      },
      {
        n: "04",
        label: "流式",
        title: "实时回复",
        body: "回复以流式方式到达，每个操作在执行前都要经过允许或拒绝的审批。",
      },
      {
        n: "05",
        label: "工作",
        title: "笔记、提醒、日程",
        body: "快速笔记、提醒、闹钟和每日定时提示，全部保存在您电脑上的本地文件中。",
      },
      {
        n: "06",
        label: "控制",
        title: "力度、权限、Auto",
        body: "每轮选择力度与权限，或让 Auto 挑选仍能完成任务的最便宜模型。",
      },
    ],
  },
  models: {
    kicker: "模型",
    title: "三款模型，一位助手。",
    lead: "Sirius 为每次请求挑选合适的模型。您从不需要管理模型，只需提出需求。",
    ariaList: "Sirius 模型",
    items: [
      {
        name: "Sirius 1",
        tier: "快速",
        body: "用于聊天和轻量任务。回复简短、便宜，无需等待。",
      },
      {
        name: "Sirius 2",
        tier: "均衡",
        body: "日常默认选择：文件、终端、数据与文档，在成本与质量之间保持稳健平衡。",
      },
      {
        name: "Sirius 3",
        tier: "最强能力",
        body: "用于推理和多步骤流程，仅在任务确实需要时才调用。",
      },
    ],
  },
  principles: {
    kicker: "原则",
    title: "做得像你已经打开的那款应用。",
    items: [
      {
        kicker: "01 · 本地",
        title: "留在你的机器上",
        body: "Sirius 是一款原生于 Windows 的应用，在您的电脑上运行，没有浏览器，也没有对外开放的端口。",
      },
      {
        kicker: "02 · 力度",
        title: "只花必要的成本",
        body: "力度、权限与 Auto 路由挑选仍能交付结果的最便宜路径。",
      },
      {
        kicker: "03 · 专注",
        title: "安静的工作之地",
        body: "采用 Space Grotesk 的简洁界面。桌面保持专注，而非拥挤的仪表盘。",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "安装到 Windows。打开它。寻求帮助。",
    button: "即将推出",
    mailSubject: "下载 Sirius",
  },
  footer: {
    companyDescription:
      "Lumni 构建系统、自动化流程，并将工程师嵌入您的团队。从首次诊断到生产环境中的代码。",
    servicesHeading: "服务",
    contactHeading: "联系",
    services: [
      "系统与应用开发",
      "流程自动化",
      "技术咨询",
      "网络安全",
      "开发支持",
    ],
    servicesHref: "https://lumni.dev.br/zh#servicos",
    privacy: "隐私",
    terms: "条款",
    backToTop: "回到顶部",
    rights: "版权所有。",
    ariaLegalNav: "法律页面",
    privacyHref: "https://lumni.dev.br/zh/privacy",
    termsHref: "https://lumni.dev.br/zh/terms",
  },
};

export default zh;
