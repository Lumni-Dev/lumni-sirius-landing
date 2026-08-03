import type { Dictionary } from "@/i18n/types";

const ko: Dictionary = {
  meta: {
    title: "Sirius - Windows용 로컬 AI 에이전트",
    description:
      "Sirius는 PC에서 실행되는 데스크톱 AI 에이전트입니다. 세 개의 Sirius 모델, 940개의 MCP 도구, 작업별 승인. 당신의 PC에서 당신의 통제 아래.",
  },
  nav: {
    features: "기능",
    models: "모델",
    principles: "원칙",
    download: "곧 공개",
    ariaPrimary: "기본",
    language: "언어",
  },
  hero: {
    brand: "Sirius",
    title: "당신의 로컬 AI 에이전트",
    titleMuted: " (Windows용).",
    lead: "940개의 네이티브 도구로 코드를 작성하고, 파일을 편집하며, 업무를 정리하는 Windows 데스크톱 에이전트. 바로 당신의 기기에서.",
    ctaPrimary: "곧 공개",
    ctaSecondary: "기능 보기",
  },
  features: {
    kicker: "역량",
    title: "Sirius가 책상 위로 가져오는 것.",
    lead: "실제 업무를 위한 하나의 구성: 채팅, 도구, 통합. 데스크톱을 패널 콜라주로 만들지 않습니다.",
    items: [
      {
        n: "01",
        label: "에이전트",
        title: "PC의 로컬 AI",
        body: "세 개의 Sirius 모델이 당신의 기기에서 실행되며 각 작업에 맞게 자동으로 선택됩니다. 요청하면 Sirius가 처리합니다.",
      },
      {
        n: "02",
        label: "도구",
        title: "940개의 MCP 도구",
        body: "파일과 git부터 데이터베이스, Office, 이미지, PDF까지 48개 계열의 도구가 요청마다 임베딩으로 선택됩니다.",
      },
      {
        n: "03",
        label: "Skills",
        title: "스킬과 서브 에이전트",
        body: "/명령과 전문 에이전트를 저장하세요. 메시지가 일치하면 활성화되며, 따로 설정할 것이 없습니다.",
      },
      {
        n: "04",
        label: "스트리밍",
        title: "실시간 답변",
        body: "답변은 스트리밍으로 도착하고, 모든 작업은 실행 전에 허용 또는 거부 승인을 거칩니다.",
      },
      {
        n: "05",
        label: "업무",
        title: "메모, 리마인더, 일정",
        body: "빠른 메모, 리마인더, 알람, 매일 예약된 프롬프트가 PC의 로컬 파일에 보관됩니다.",
      },
      {
        n: "06",
        label: "제어",
        title: "노력, 권한, Auto",
        body: "턴마다 노력과 권한을 고르거나, 여전히 일을 끝내는 가장 저렴한 모델을 Auto가 선택하게 두세요.",
      },
    ],
  },
  models: {
    kicker: "모델",
    title: "세 개의 모델, 하나의 어시스턴트.",
    lead: "Sirius는 각 요청에 맞는 모델을 선택합니다. 모델을 관리할 필요 없이 그저 요청하면 됩니다.",
    ariaList: "Sirius 모델",
    items: [
      {
        name: "Sirius A",
        tier: "빠름",
        body: "채팅과 가벼운 작업용. 짧고 저렴한 답변을 기다림 없이 제공합니다.",
      },
      {
        name: "Sirius B",
        tier: "균형",
        body: "일상의 기본값: 파일, 터미널, 데이터, 문서를 비용과 품질의 견고한 균형으로 처리합니다.",
      },
      {
        name: "Sirius X",
        tier: "가장 강력함",
        body: "추론과 여러 단계의 흐름용으로, 작업에 정말 필요할 때만 호출됩니다.",
      },
    ],
  },
  principles: {
    kicker: "원칙",
    title: "이미 여는 앱처럼 만들어졌습니다.",
    items: [
      {
        kicker: "01 · 로컬",
        title: "내 기기에 머무르기",
        body: "Sirius는 PC에서 실행되는 Windows 네이티브 앱이며, 브라우저도 없고 공개된 포트도 없습니다.",
      },
      {
        kicker: "02 · 노력",
        title: "필요한 만큼만 쓰기",
        body: "노력, 권한, Auto 라우팅이 결과를 내면서도 가장 저렴한 경로를 고릅니다.",
      },
      {
        kicker: "03 · 포커스",
        title: "고요히 일할 수 있는 곳",
        body: "Space Grotesk를 사용한 깔끔한 인터페이스. 데스크톱은 붐비는 대시보드가 아니라 집중된 상태로 유지됩니다.",
      },
    ],
  },
  cta: {
    brand: "Sirius",
    lead: "Windows에 설치하세요. 앱을 여세요. 도움을 요청하세요.",
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
