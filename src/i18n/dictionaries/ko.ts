import type { Dictionary } from "@/i18n/types";

const ko: Dictionary = {
  meta: {
    title: "Sirius | Windows용 로컬 AI 에이전트",
    description:
      "Sirius는 본인 API 키로 PC에서 실행되는 데스크톱 AI 에이전트입니다. 코드, 스킬, 음성, 이메일 등을 고요한 별빛 아래에서.",
  },
  nav: {
    features: "기능",
    providers: "프로바이더",
    principles: "원칙",
    download: "곧 공개",
    ariaPrimary: "기본",
    language: "언어",
  },
  hero: {
    brand: "Sirius",
    title: "당신의 로컬 AI 에이전트",
    titleMuted: ", 고요한 하늘 아래에서.",
    lead: "네이티브 도구와 본인 API 키로 코딩하고, 말하고, 정리하는 Windows 데스크톱 에이전트.",
    ctaPrimary: "곧 공개",
    ctaSecondary: "밤을 탐험하기",
  },
  features: {
    kicker: "역량",
    title: "별이 책상 위로 가져오는 것.",
    lead: "업무를 위한 하나의 구성: 채팅, 도구, 통합. 데스크톱을 대시보드 콜라주로 만들지 않습니다.",
    items: [
      {
        n: "01",
        label: "에이전트",
        title: "PC의 로컬 AI",
        body: "Claude, GPT, Gemini, DeepSeek 등이 본인 API 키로 기기에서 실행됩니다. Soon 슬롯이 나머지 카탈로그를 커버합니다.",
      },
      {
        n: "02",
        label: "도구",
        title: "셸, 파일, 패치",
        body: "Sirius는 프로바이더 자체 도구로 워크스페이스를 검사하고 편집합니다. 커스텀 도구 수프는 없습니다.",
      },
      {
        n: "03",
        label: "Skills",
        title: "개인 스킬과 멀티 에이전트",
        body: "/명령과 전문 에이전트를 ~/sirius에 저장하세요. 메시지가 일치하면 활성화됩니다.",
      },
      {
        n: "04",
        label: "음성",
        title: "말하고 듣기",
        body: "컴포저에 받아쓰고 답변을 낭독으로 들으세요. Sirius가 말하는 동안 마이크는 깔끔히 음소거됩니다.",
      },
      {
        n: "05",
        label: "업무",
        title: "이메일, 메모, 알람, 일정",
        body: "레일에 통합을 고정: IMAP 메일, 빠른 메모, 알람, 일일 예약 프롬프트.",
      },
      {
        n: "06",
        label: "제어",
        title: "노력, 권한, Auto",
        body: "턴마다 포스와 권한을 고르거나, 여전히 성능을 내는 가장 저렴한 모델을 Auto가 선택하게 두세요.",
      },
    ],
  },
  providers: {
    kicker: "별자리",
    title: "지도 위 모든 프로바이더.",
    lead: "라이브 백엔드는 이미 빛납니다. 나머지는 Soon 슬롯으로 대기하며, 네이티브 SDK나 CLI가 도착하면 준비됩니다.",
    ariaList: "AI 프로바이더",
    live: "라이브",
    soon: "Soon",
  },
  principles: {
    kicker: "원칙",
    title: "이미 여는 앱처럼 만들어졌습니다.",
    items: [
      {
        kicker: "01 · 키",
        title: "내 기기에 머무르기",
        body: "API 키는 OS 키링에 보관됩니다. 모델은 네이티브 SDK와 CLI로 로컬에서 실행됩니다.",
      },
      {
        kicker: "02 · Force",
        title: "필요한 만큼만 쓰기",
        body: "노력, 권한, Auto 라우팅이 일을 끝내면서도 가장 저렴한 경로를 고릅니다.",
      },
      {
        kicker: "03 · 하늘",
        title: "고요히 일할 수 있는 곳",
        body: "Starfield, orb, Space Grotesk. 데스크톱은 붐비는 대시보드가 아니라 밤처럼 열립니다.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Windows에 설치하세요. 키를 붙여넣으세요. Force 아래에서 도움을 요청하세요.",
    button: "곧 공개",
    mailSubject: "Sirius 다운로드",
  },
  footer: {
    companyDescription:
      "Lumni는 시스템을 구축하고, 프로세스를 자동화하며, 엔지니어를 팀에 배치합니다. 첫 진단부터 프로덕션 코드까지.",
    servicesHeading: "서비스",
    contactHeading: "연락처",
    services: [
      "시스템 및 애플리케이션 개발",
      "프로세스 자동화",
      "기술 컨설팅",
      "사이버보안",
      "개발 지원",
    ],
    servicesHref: "https://lumni.dev.br/ko#servicos",
    privacy: "개인정보",
    terms: "이용약관",
    backToTop: "맨 위로",
    rights: "모든 권리 보유.",
    ariaLegalNav: "법적 페이지",
    privacyHref: "https://lumni.dev.br/ko/privacy",
    termsHref: "https://lumni.dev.br/ko/terms",
  },
};

export default ko;
