import { DateTime } from "luxon";
import { MCC_START_DATE, MY_CAREER_START } from "./consts";

export const navItems = [
  { href: "/#about", label: "소개" },
  { href: "/#experience", label: "경력" },
  { href: "/#projects", label: "프로젝트" },
  { href: "/#skills", label: "기술" },
  { href: "/#example", label: "예시" },
  { href: "/#contact", label: "연락처" },
];

export function getCareer(start?: string): string {
  const now = DateTime.now().setZone("Asia/Seoul");
  const startDate = DateTime.fromISO(start ?? MY_CAREER_START);
  const diff = now.diff(startDate, ["years", "months"]).toObject();

  const years = Math.floor(diff.years ?? 0);
  const months = Math.floor(diff.months ?? 0);

  const result = [];

  if (years) result.push(`${years}년`);
  if (months) result.push(`${months}개월`);

  return result.join(" ");
}

const MCCPeriod = `${DateTime.fromISO(MCC_START_DATE).toFormat(
  "yyyy.MM"
)} - 재직 중 (${getCareer(MCC_START_DATE)})`;

export const experiences = [
  {
    company: "MCC",
    position: "풀스택 개발자",
    period: MCCPeriod,
    location: "프리랜서",
    project: "설문 기반 성격 분석 웹 서비스",
    description:
      "프리랜서 풀스택 개발자로 참여해 기획 해석부터 프론트/백엔드/인프라 전반을 주도했습니다.",
    achievements: [
      "설문 흐름 UX를 개선하여 사용자 이탈을 최소화하는 구조를 직접 설계하고 구현",
      "NestJS 기반으로 해설 매핑 알고리즘을 설계하여 사용자의 응답 데이터를 의미 있는 유형으로 변환",
      "AWS EC2, S3, Route 53을 활용해 무중단 배포 전략을 구성하고 안정적인 운영 환경 유지",
      "기획자와의 직접 커뮤니케이션을 통해 요구사항을 해석하고 빠르게 반영",
    ],
    skills: ["React", "NestJS", "AWS", "TypeScript", "UX Design"],
  },
  {
    company: "주식회사 티맥스핀테크",
    position: "연구원 팀장",
    period: "2023.12 - 2024.12 (1년 1개월)",
    location: "정규직",
    project: "코어뱅크",
    description:
      "복잡한 조직 구조 속에서도 자발적으로 데모 프로젝트를 기획하고 리딩하며, 스타트업과 같은 민첩한 문제 해결 방식을 실현했습니다.",
    achievements: [
      "실제 인터넷은행 기반의 데모 프로젝트에서 '상품 파트'를 주도하며 핵심 ERD 설계와 화면 흐름 정의",
      "은행 실무자와의 인터뷰를 통해 실제 상품 약관의 핵심 속성을 도출",
      "기획-개발 간의 간극을 좁히는 데 집중하여 비개발자와 협업 가능한 구조 제안",
      "제한된 리소스와 경직된 환경 속에서도 작게 만들고 검증하며 빠르게 학습하는 스타트업 방식의 실행",
    ],
    skills: ["React", "ERD 설계", "프로젝트 리딩", "협업"],
  },
  {
    company: "배달공제회",
    position: "프론트엔드 개발자",
    period: "2023.12 - 2024.04",
    location: "프로젝트",
    project: "배달공제회 플랫폼",
    description:
      "약 20명의 프론트엔드 개발자가 참여한 대규모 협업 환경에서 재무 및 고객 파트의 핵심 화면 구현을 담당했습니다.",
    achievements: [
      "기획 문서, 화면 설계서, API 명세를 꼼꼼히 리뷰하며 다양한 이해관계자와 적극적으로 소통",
      "공통 컴포넌트를 설계하고 마크업과 로직을 분리하여 재사용성과 유지보수성을 크게 향상",
      "재무 파트의 주요 화면 5개와 팝업 4개를 단독으로 구현하고 전 과정을 주도적으로 수행",
      "useQuery와 useEffect 조합을 useMutation 기반 수동 호출 구조로 전환하여 구조 개선",
    ],
    skills: ["React", "React Query", "컴포넌트 설계", "대규모 협업"],
  },
  {
    company: "아이픽셀 주식회사",
    position: "프론트엔드 개발자",
    period: "2022.08 - 2023.11 (1년 4개월)",
    location: "정규직",
    project: "Exercite / Exercite Care",
    description:
      "React Native 기반 헬스케어 앱으로, 앱 설계부터 사용자 경험 최적화까지 전 주기를 리드한 프로젝트입니다.",
    achievements: [
      "Context와 React Query 중심으로 앱 구조를 설계하고 CodePush + Fastlane 조합으로 무중단 배포 파이프라인 구축",
      "디자이너와 Figma 기반 협업을 통해 공통 스타일을 모듈화한 컴포넌트 설계 및 디자인 시스템 도입",
      "Server-Driven UI 구조로 설계하여 잦은 변경에 유연하게 대응하고 비개발자도 직접 콘텐츠 조정 가능한 구조 구현",
      "이미지 우선순위 기반 lazy load 전략 적용 및 placeholder와 캐싱 구조 도입으로 렌더링 속도 대폭 개선",
      "React Native IAP 라이브러리 소스 코드 분석 및 최신 Play Billing, StoreKit 흐름에 맞게 마이그레이션",
    ],
    skills: [
      "React Native",
      "CodePush",
      "Fastlane",
      "Server-Driven UI",
      "성능 최적화",
    ],
  },
  {
    company: "반에프",
    position: "프론트엔드 개발자",
    period: "2021.08 - 2023.08 (2년 1개월)",
    location: "프리랜서",
    project: "다양한 도메인 프로젝트",
    description:
      "전자상거래, 물류, 금융, 채용 플랫폼 등 다양한 도메인의 외주 프로젝트에 참여하며 실무 기반의 프론트엔드 기술을 폭넓게 경험했습니다.",
    achievements: [
      "총 6개 이상의 웹/앱 프로젝트에 참여하며 React, React Native, Next.js 기반의 화면 개발, API 연동, 관리자 페이지 구현",
      "Redux, Recoil, Context, React Query, Tailwind, styled-components 등 다양한 상태관리/스타일링 기법 비교 적용",
      "Monorepo 구조, TurboRepo, Docker, AWS 등 인프라 및 협업 도구 경험으로 팀 협업과 빌드 효율화 이해 향상",
      "도메인별 요구사항 이해 및 빠른 기능 구현 역량 강화, 직군 간 협업 능력과 커뮤니케이션 능력 향상",
    ],
    skills: ["React", "React Native", "Next.js", "Redux", "다양한 도메인 경험"],
  },
];

export const projects = [
  {
    title: "설문 기반 성격 분석 웹 서비스",
    company: "MCC",
    period: "2025.01 - 현재",
    type: "풀스택 개발",
    description:
      "사용자의 설문 응답을 기반으로 성격을 분석하고 맞춤형 해설을 제공하는 웹 서비스를 기획부터 운영까지 전 과정을 주도했습니다.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "설문 흐름 UX 개선으로 사용자 이탈률 최소화",
      "NestJS 기반 해설 매핑 알고리즘 설계 및 구현",
      "AWS 인프라 구성으로 무중단 배포 환경 구축",
      "기획자와의 직접 소통으로 빠른 요구사항 반영",
    ],
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "AWS EC2",
      "S3",
      "Route 53",
    ],
    highlights: ["풀스택 개발", "UX 최적화", "클라우드 인프라"],
  },
  {
    title: "코어뱅크 데모 프로젝트",
    company: "티맥스핀테크",
    period: "2024.04 - 2024.12",
    type: "프로젝트 리딩",
    description:
      "실제 인터넷은행을 기반으로 한 데모 프로젝트에서 상품 파트를 주도하며, 은행 실무진과의 협업을 통해 실용적인 시스템을 설계했습니다.",
    image:
      "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "상품 파트 ERD 설계 및 화면 흐름 정의",
      "은행 실무자 인터뷰를 통한 실제 요구사항 도출",
      "기획-개발 간 간극을 줄이는 협업 구조 제안",
      "제한된 환경에서 스타트업 방식의 민첩한 실행",
    ],
    technologies: ["React", "TypeScript", "ERD 설계", "시스템 아키텍처"],
    highlights: ["프로젝트 리딩", "시스템 설계", "실무진 협업"],
  },
  {
    title: "배달공제회 플랫폼",
    company: "배달공제회",
    period: "2023.12 - 2024.04",
    type: "대규모 협업",
    description:
      "20명 이상의 프론트엔드 개발자가 참여한 대규모 프로젝트에서 재무 및 고객 파트의 핵심 기능을 구현하고 공통 컴포넌트를 설계했습니다.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "재무 파트 주요 화면 5개와 팝업 4개 단독 구현",
      "공통 컴포넌트 설계로 재사용성과 유지보수성 향상",
      "useQuery에서 useMutation 기반 구조로 개선",
      "실사용자 이슈 발견 및 대응으로 서비스 신뢰도 향상",
    ],
    technologies: ["React", "TypeScript", "React Query", "컴포넌트 설계"],
    highlights: ["대규모 협업", "컴포넌트 설계", "구조 개선"],
  },
  {
    title: "Exercite 헬스케어 앱",
    company: "아이픽셀",
    period: "2022.08 - 2023.11",
    type: "앱 개발 리딩",
    description:
      "React Native 기반 헬스케어 앱의 설계부터 운영까지 전 주기를 리드하며, 글로벌 서비스로 확장하는 과정을 주도했습니다.",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Context + React Query 기반 앱 아키텍처 설계",
      "CodePush + Fastlane 무중단 배포 파이프라인 구축",
      "Server-Driven UI로 유연한 콘텐츠 관리 시스템 구현",
      "이미지 최적화로 렌더링 성능 대폭 개선",
      "글로벌 확장을 위한 시간대 처리 시스템 구축",
      "React Native IAP 결제 시스템 마이그레이션",
    ],
    technologies: [
      "React Native",
      "Context API",
      "React Query",
      "CodePush",
      "Fastlane",
      "AWS",
    ],
    highlights: ["앱 아키텍처", "성능 최적화", "글로벌 서비스"],
  },
];
