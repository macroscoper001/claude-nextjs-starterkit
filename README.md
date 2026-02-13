# Next.js v15 스타터킷 🚀

> 현대적인 웹 개발을 위한 완벽하게 구성된 Next.js v15 프로젝트 보일러플레이트

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat-square&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ 주요 특징

- 🎯 **Next.js v15** - App Router + Turbopack으로 초고속 개발 경험
- 📘 **TypeScript** - 완벽한 타입 안정성
- 🎨 **TailwindCSS v4** - 설정 파일 없는 CSS 기반 스타일링
- 🧩 **shadcn/ui** - 고품질 UI 컴포넌트 (new-york 스타일)
- 🌙 **다크모드** - OKLCH 색상 시스템 기반 라이트/다크 모드
- 🎭 **next-themes** - 테마 전환 기능
- 📱 **반응형 디자인** - 모바일 우선 접근법
- 🔍 **접근성** - WCAG 준수
- ⚡ **성능 최적화** - 이미지 최적화, 코드 분할 등

## 📦 기술 스택

| 분야 | 기술 |
|------|------|
| **프레임워크** | Next.js 16.1.6 (App Router, Turbopack) |
| **언어** | TypeScript 5.x |
| **스타일** | TailwindCSS 4.x + OKLCH 색상 |
| **UI 컴포넌트** | shadcn/ui |
| **아이콘** | lucide-react |
| **테마** | next-themes |
| **유틸** | clsx, tailwind-merge, class-variance-authority |
| **린터** | ESLint 9.x |

## 🚀 빠른 시작

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/claude-nextjs-starterkit.git
cd claude-nextjs-starterkit
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 시작

```bash
npm run dev
```

브라우저에서 [http://localhost:3001](http://localhost:3001) 열기

## 📁 프로젝트 구조

```
claude-nextjs-starterkit/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃 (ThemeProvider)
│   ├── page.tsx                 # 메인 랜딩 페이지
│   ├── globals.css              # 전역 스타일 & 색상 변수
│   ├── dashboard/
│   │   └── page.tsx             # 대시보드 샘플
│   └── showcase/
│       └── page.tsx             # 컴포넌트 쇼케이스
│
├── components/
│   ├── ui/                      # shadcn/ui 컴포넌트
│   ├── layout/
│   │   ├── header.tsx           # 헤더 (네비게이션 + 테마 토글)
│   │   └── footer.tsx           # 푸터
│   └── common/
│       ├── theme-toggle.tsx     # 테마 선택기
│       └── logo.tsx             # 로고
│
├── hooks/
│   └── use-mobile.ts            # 모바일 반응형 감지 훅
│
├── lib/
│   └── utils.ts                 # cn() 유틸리티
│
├── types/
│   └── index.ts                 # 공통 타입 정의
│
├── components.json              # shadcn/ui 설정
├── postcss.config.mjs           # PostCSS 설정
├── next.config.ts               # Next.js 설정
├── tsconfig.json                # TypeScript 설정
├── CLAUDE.md                    # 프로젝트 개발 가이드
└── README.md                    # 이 파일
```

## 🎨 페이지 및 기능

### 🏠 홈페이지 (`/`)
- 히어로 섹션 (프로젝트 소개)
- 기능 카드 그리드 (6개 기능)
- 빠른 시작 CTA 버튼

### 📊 대시보드 (`/dashboard`)
- 통계 카드 (4개: 사용자, 매출, 활동, 성능)
- 최근 활동 목록 (Avatar + Badge)
- 반응형 그리드 레이아웃

### 🎨 컴포넌트 쇼케이스 (`/showcase`)
- Tabs로 분류된 UI 컴포넌트 데모
- Buttons, Cards, Badges, Icons 예제

## 🛠️ 개발 명령어

```bash
# 개발 서버 시작 (포트 3001)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm run start

# ESLint 검사
npm run lint
```

## 🎯 주요 라우트

| 경로 | 설명 |
|------|------|
| `/` | 메인 랜딩 페이지 |
| `/dashboard` | 대시보드 샘플 |
| `/showcase` | UI 컴포넌트 쇼케이스 |

## 🎨 테마 시스템

### 다크모드 사용

```tsx
"use client";

import { useTheme } from "next-themes";

export function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      테마 전환
    </button>
  );
}
```

## 📝 코드 예제

### 새 페이지 생성

```tsx
// app/new-page/page.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">새 페이지</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add tabs
npx shadcn@latest add dialog
npx shadcn@latest add input
```

## 🚀 배포

### Vercel 배포 (추천)

```bash
vercel
```

### Docker 배포

```bash
docker build -t nextjs-starter .
docker run -p 3000:3000 nextjs-starter
```

## 📚 문서

- **[CLAUDE.md](./CLAUDE.md)** - 프로젝트 개발 가이드 및 규칙
- **[Next.js 공식 문서](https://nextjs.org/docs)**
- **[TailwindCSS 문서](https://tailwindcss.com/docs)**
- **[shadcn/ui 컴포넌트](https://ui.shadcn.com)**
- **[lucide-react 아이콘](https://lucide.dev)**

## 🤝 기여하기

1. Fork 생성
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add AmazingFeature'`)
4. 브랜치 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📄 라이선스

MIT 라이선스 - 자세한 내용은 [LICENSE](./LICENSE) 파일 참조

---

<div align="center">

**Next.js v15 스타터킷으로 멋진 프로젝트를 시작하세요!** 🌟

⭐ 도움이 되셨다면 별(⭐)을 눌러주세요!

</div>
