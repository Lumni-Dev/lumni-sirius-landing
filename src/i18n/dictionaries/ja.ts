import type { Dictionary } from "@/i18n/types";

const ja: Dictionary = {
  meta: {
    title: "Sirius - Windows向けのローカルAIエージェント",
    description:
      "Siriusは、PC上で動作するデスクトップAIエージェントです。3つのSiriusモデル、940のMCPツール、アクションごとの承認。あなたのPC上で、あなたの管理下に。",
  },
  nav: {
    features: "機能",
    models: "モデル",
    principles: "原則",
    download: "近日公開",
    ariaPrimary: "メイン",
    language: "言語",
  },
  hero: {
    brand: "Sirius",
    title: "あなたのローカルAIエージェント",
    titleMuted: "（Windows向け）。",
    lead: "940のネイティブツールで、コードを書き、ファイルを編集し、作業を整理するWindows向けデスクトップエージェント。すべてあなたのマシン上で。",
    ctaPrimary: "近日公開",
    ctaSecondary: "機能を見る",
  },
  features: {
    kicker: "できること",
    title: "Siriusがデスクにもたらすもの。",
    lead: "実際の仕事のための構成：チャット、ツール、連携。デスクトップをパネルの寄せ集めにはしません。",
    items: [
      {
        n: "01",
        label: "エージェント",
        title: "PC上のローカルAI",
        body: "3つのSiriusモデルがあなたのマシン上で動作し、タスクごとに自動で選ばれます。頼めば、Siriusが対応します。",
      },
      {
        n: "02",
        label: "ツール",
        title: "940のMCPツール",
        body: "ファイルやgitからデータベース、Office、画像、PDFまで、48のファミリーをリクエストごとに埋め込みで選択します。",
      },
      {
        n: "03",
        label: "スキル",
        title: "スキルとサブエージェント",
        body: "/コマンドと専門エージェントを保存。メッセージが一致すると起動し、設定は不要です。",
      },
      {
        n: "04",
        label: "ストリーミング",
        title: "リアルタイムの返答",
        body: "返答はストリーミングで届き、すべてのアクションは実行前に許可または拒否の承認を経ます。",
      },
      {
        n: "05",
        label: "仕事",
        title: "メモ、リマインダー、スケジュール",
        body: "クイックメモ、リマインダー、アラーム、毎日のスケジュール済みプロンプトを、PC上のローカルファイルに保存します。",
      },
      {
        n: "06",
        label: "制御",
        title: "努力度、権限、Auto",
        body: "ターンごとに努力度と権限を選ぶか、それでも仕事を終えられる最安のモデルをAutoに選ばせます。",
      },
    ],
  },
  models: {
    kicker: "モデル",
    title: "3つのモデル、1つのアシスタント。",
    lead: "Siriusがリクエストごとに適切なモデルを選びます。モデルを管理する必要はなく、ただ頼むだけです。",
    ariaList: "Siriusモデル",
    items: [
      {
        name: "Sirius 1",
        tier: "高速",
        body: "チャットや軽いタスク向け。短く、安価で、待ち時間のない返答。",
      },
      {
        name: "Sirius 2",
        tier: "バランス",
        body: "日常の標準：ファイル、ターミナル、データ、ドキュメントに対応し、コストと品質のバランスが取れています。",
      },
      {
        name: "Sirius 3",
        tier: "最も高性能",
        body: "推論や多段階のフロー向け。本当に必要なときにだけ呼び出されます。",
      },
    ],
  },
  principles: {
    kicker: "原則",
    title: "すでに開いているアプリのように作られています。",
    items: [
      {
        kicker: "01 · ローカル",
        title: "あなたのマシンに留まる",
        body: "SiriusはPC上で動作するWindowsネイティブアプリで、ブラウザも公開ポートもありません。",
      },
      {
        kicker: "02 · 努力度",
        title: "必要な分だけ使う",
        body: "努力度、権限、Autoルーティングが、それでも結果を出せる最安の道を選びます。",
      },
      {
        kicker: "03 · フォーカス",
        title: "静かに働ける場所",
        body: "Space Groteskを用いたクリーンなインターフェース。デスクトップは混雑したダッシュボードではなく、集中を保ちます。",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Windowsにインストール。開く。助けを求める。",
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
