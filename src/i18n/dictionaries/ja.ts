import type { Dictionary } from "@/i18n/types";

const ja: Dictionary = {
  meta: {
    title: "Sirius - Windows向けローカルAIエージェント",
    description:
      "Siriusは、ご自身のAPIキーでPC上で動くデスクトップAIエージェントです。コード、スキル、音声、メールなどを静かな星空の下で。",
  },
  nav: {
    features: "機能",
    providers: "プロバイダー",
    principles: "原則",
    download: "近日公開",
    ariaPrimary: "メイン",
    language: "言語",
  },
  hero: {
    brand: "Sirius",
    title: "あなたのローカルAIエージェント",
    titleMuted: "、静かな空の下で。",
    lead: "ネイティブツールとご自身のAPIキーで、コーディング・会話・整理を行うWindowsデスクトップエージェント。",
    ctaPrimary: "近日公開",
    ctaSecondary: "夜を探索する",
  },
  features: {
    kicker: "できること",
    title: "星がデスクにもたらすもの。",
    lead: "仕事のための一つの構成：チャット、ツール、連携。デスクトップをダッシュボードの寄せ集めにはしません。",
    items: [
      {
        n: "01",
        label: "エージェント",
        title: "PC上のローカルAI",
        body: "Claude、GPT、Gemini、DeepSeekなどが、ご自身のAPIキーでマシン上で動作。カタログの残りはSoonスロットがカバーします。",
      },
      {
        n: "02",
        label: "ツール",
        title: "シェル、ファイル、パッチ",
        body: "Siriusはプロバイダー純正のツールでワークスペースを検査・編集。カスタムツールの寄せ集めは不要です。",
      },
      {
        n: "03",
        label: "Skills",
        title: "個人スキルとマルチエージェント",
        body: "/コマンドと専門エージェントを~/siriusに保存。メッセージが一致すると起動します。",
      },
      {
        n: "04",
        label: "音声",
        title: "話して聴く",
        body: "コンポーザーに口述し、返答を読み上げで聴く。Siriusが話している間はマイクをきれいにミュート。",
      },
      {
        n: "05",
        label: "仕事",
        title: "メール、メモ、アラーム、予定",
        body: "レールに連携をピン留め：IMAPメール、クイックメモ、アラーム、毎日のスケジュール済みプロンプト。",
      },
      {
        n: "06",
        label: "制御",
        title: "努力度、権限、Auto",
        body: "ターンごとにフォースと権限を選ぶか、まだ性能を保つ最安モデルをAutoに任せる。",
      },
    ],
  },
  providers: {
    kicker: "星座",
    title: "地図上のすべてのプロバイダー。",
    lead: "ライブのバックエンドはすでに輝いています。残りはSoonスロットとして待機し、ネイティブSDKやCLIが揃い次第利用可能になります。",
    ariaList: "AIプロバイダー",
    live: "ライブ",
    soon: "Soon",
  },
  principles: {
    kicker: "原則",
    title: "すでに開いているアプリのように作られています。",
    items: [
      {
        kicker: "01 · キー",
        title: "あなたのマシンに留まる",
        body: "APIキーはOSのキーリングに保存。モデルはネイティブSDKとCLI経由でローカル実行。",
      },
      {
        kicker: "02 · Force",
        title: "必要な分だけ使う",
        body: "努力度、権限、Autoルーティングが、仕事を終えられる最安の道を選びます。",
      },
      {
        kicker: "03 · 空",
        title: "静かに働ける場所",
        body: "Starfield、orb、Space Grotesk。デスクトップは混雑したダッシュボードではなく、夜のように開きます。",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Windowsにインストール。キーを貼り付け。Forceの下で助けを求める。",
    button: "近日公開",
    mailSubject: "Siriusのダウンロード",
  },
  footer: {
    companyDescription:
      "Lumniはシステムを構築し、プロセスを自動化し、エンジニアをチームに組み込みます。最初の診断から本番稼働のコードまで。",
    servicesHeading: "サービス",
    contactHeading: "お問い合わせ",
    services: [
      "システムおよびアプリケーション開発",
      "プロセス自動化",
      "技術コンサルティング",
      "サイバーセキュリティ",
      "開発サポート",
    ],
    servicesHref: "https://lumni.dev.br/ja#servicos",
    privacy: "プライバシー",
    terms: "利用規約",
    backToTop: "ページ上部へ",
    rights: "全著作権所有。",
    ariaLegalNav: "法的ページ",
    privacyHref: "https://lumni.dev.br/ja/privacy",
    termsHref: "https://lumni.dev.br/ja/terms",
  },
};

export default ja;
