import type { Dictionary } from "@/i18n/types";

const zh: Dictionary = {
  meta: {
    title: "Sirius - 面向 Windows 的本地 AI 代理",
    description:
      "Sirius 是一款在您的电脑上运行、使用您自己 API 密钥的桌面 AI 代理。在宁静星空下完成代码、技能、语音、邮件等更多工作。",
  },
  nav: {
    features: "功能",
    providers: "提供商",
    principles: "原则",
    download: "即将推出",
    ariaPrimary: "主导航",
    language: "语言",
  },
  hero: {
    brand: "Sirius",
    title: "你的本地 AI 代理",
    titleMuted: "，在宁静的天空下。",
    lead: "一款 Windows 桌面代理，使用原生工具和您自己的 API 密钥完成编程、对话与整理。",
    ctaPrimary: "即将推出",
    ctaSecondary: "探索夜空",
  },
  features: {
    kicker: "能力",
    title: "这颗星带到你桌面的东西。",
    lead: "面向工作的单一构图：聊天、工具与集成，而不会把桌面变成仪表盘拼贴。",
    items: [
      {
        n: "01",
        label: "代理",
        title: "电脑上的本地 AI",
        body: "Claude、GPT、Gemini、DeepSeek 等在您的机器上使用您自己的 API 密钥运行。Soon 插槽覆盖其余目录。",
      },
      {
        n: "02",
        label: "工具",
        title: "Shell、文件与补丁",
        body: "Sirius 使用提供商自带的工具检查和编辑工作区。没有自制工具大杂烩。",
      },
      {
        n: "03",
        label: "Skills",
        title: "个人技能与多智能体",
        body: "将 /命令和专家代理保存在 ~/sirius。当消息匹配时它们会激活。",
      },
      {
        n: "04",
        label: "语音",
        title: "说与听",
        body: "在编辑器中口述，并收听朗读的回复；Sirius 说话时麦克风会被干净地静音。",
      },
      {
        n: "05",
        label: "工作",
        title: "邮件、笔记、闹钟、日程",
        body: "将集成固定在侧栏：IMAP 邮件、快速笔记、闹钟和每日计划提示。",
      },
      {
        n: "06",
        label: "控制",
        title: "力度、权限、Auto",
        body: "每轮选择力度与权限，或让 Auto 选择仍能胜任的最便宜模型。",
      },
    ],
  },
  providers: {
    kicker: "星座",
    title: "地图上的每一个提供商。",
    lead: "在线后端此刻已在发光。其余以 Soon 插槽等待，待其原生 SDK 或 CLI 就绪即可启用。",
    ariaList: "AI 提供商",
    live: "在线",
    soon: "Soon",
  },
  principles: {
    kicker: "原则",
    title: "做得像你已经打开的那款应用。",
    items: [
      {
        kicker: "01 · 密钥",
        title: "留在你的机器上",
        body: "API 密钥保存在操作系统钥匙串中。模型通过原生 SDK 和 CLI 在本地运行。",
      },
      {
        kicker: "02 · Force",
        title: "只花必要的成本",
        body: "力度、权限与 Auto 路由选择仍能完成工作的最便宜路径。",
      },
      {
        kicker: "03 · 天空",
        title: "安静的工作之地",
        body: "Starfield、orb 与 Space Grotesk。桌面如夜色展开，而非拥挤的仪表盘。",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "安装到 Windows。粘贴你的密钥。在 Force 下寻求帮助。",
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
