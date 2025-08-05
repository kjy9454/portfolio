# 프론트엔드 개발자 김재영 포트폴리오

React, React Native 기반의 프로젝트를 주도하며 기획, 개발, 운영 전 과정을 경험해 온 프론트엔드 개발자입니다.

URL: https://jaeyoung-portfolio.vercel.app

---

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js 앱 디렉터리 (페이지, 레이아웃, API 라우트 포함)
│   ├── api                 # API 라우트 폴더
│   │   ├── route.ts        # 기본 API 라우트 엔트리포인트 (CSR에서 API 키 노출 방지용 서버 사이드 처리)
│   │   ├── csr             # csr 페이지
│   │   │   └── page.tsx
│   │   ├── ssg             # ssg 페이지
│   │   │   └── page.tsx
│   │   ├── ssr             # ssr 페이지
│   │   │   └── page.tsx
│   ├── layout.tsx          # 전역 레이아웃
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx            # 루트 페이지
├── hooks/                  # 커스텀 React 훅 모음
├── lib/                    # 공통 라이브러리
│   ├── consts.ts
│   └── data.ts
├── styles/                 # 스타일 및 CSS 파일 관리
│   └── global.css
├── types/                  # TypeScript 타입 정의
│   └── exchangeRate.ts
└── ui/                     # UI 컴포넌트
    ├── fonts.ts            # 폰트 설정
    ├── About.tsx
    ├── Example.tsx
    ├── ....tsx
    └── Skills.tsx
```

---

## TODO

### 1. 디자인 개선

- 전체적인 UI/UX 스타일링 및 반응형 디자인 적용
- 컬러 팔레트, 타이포그래피, 레이아웃 조정
- 애니메이션 및 인터랙션 효과 추가

### 2. 재사용 가능한 컴포넌트 개발

- 공통 버튼, 입력폼, 카드, 모달 등 컴포넌트 설계 및 구현
- Tailwind CSS를 활용한 스타일링 일관성 유지
- 접근성(ARIA) 및 반응형 대응 고려

### 3. 에러 핸들링

- API 호출 실패 시 사용자에게 알림 제공
- 폼 입력 검증 및 유효성 검사 구현
- 예외 상황에 대한 적절한 대처 및 로그 기록

### 4. 서버드리븐 UI

- DB 연결 후 서버드리븐 UI 패턴 적용
