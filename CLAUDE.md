# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

Next.js v16 App Router 기반의 현대적인 웹 개발 스타터킷입니다.
TypeScript, TailwindCSS v4, shadcn/ui, 그리고 완벽한 다크모드 지원으로 빠른 개발을 가능하게 합니다.

**기술 스택:**
- Next.js v16.1.6 (App Router, Turbopack)
- TypeScript 5+
- TailwindCSS v4 (CSS 기반, 설정 파일 없음)
- shadcn/ui (new-york 스타일)
- next-themes (테마 관리)
- OKLCH 색상 시스템
- ESLint 9

---

## 언어 및 커뮤니케이션

- **기본 응답 언어:** 한국어
- **코드 주석:** 한국어로 작성
- **커밋 메시지:** 한국어로 작성
- **변수명/함수명:** 영어 (코드 표준 준수)
- **문서화:** 한국어로 작성 (IMPORTANT)

---

## 개발 명령어

### 필수 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 시작 (포트 3001)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행 (프로덕션 모드)
npm run start

# ESLint 검사 (전체 프로젝트)
npm run lint
```

### shadcn/ui 컴포넌트 추가

```bash
# 새로운 shadcn/ui 컴포넌트 추가
npx shadcn@latest add [component-name]

# 예: button, card, dialog, tabs, input 등
npx shadcn@latest add button
npx shadcn@latest add dialog
```

---

## 고수준 아키텍처

### 디렉토리 구조

```
claude-nextjs-starterkit/
├── app/                          # Next.js App Router (라우팅 + 레이아웃)
│   ├── layout.tsx               # 루트 레이아웃 (ThemeProvider, Toaster)
│   ├── page.tsx                 # 홈페이지 (/)
│   ├── globals.css              # 전역 스타일 + CSS 변수 (색상 시스템)
│   ├── dashboard/page.tsx       # 대시보드 예제 (/dashboard)
│   └── showcase/page.tsx        # 컴포넌트 쇼케이스 (/showcase)
│
├── components/
│   ├── ui/                      # shadcn/ui 컴포넌트 (자동 생성됨)
│   │   ├── button.tsx, card.tsx, dialog.tsx, 등
│   │   └── sonner.tsx          # 토스트 알림 라이브러리
│   │
│   ├── layout/                  # 페이지 레이아웃 컴포넌트
│   │   ├── header.tsx           # 헤더 (네비게이션 + 테마 토글)
│   │   └── footer.tsx           # 푸터
│   │
│   └── common/                  # 재사용 가능한 공통 컴포넌트
│       ├── theme-toggle.tsx     # 테마 선택 토글 (라이트/다크/시스템)
│       └── logo.tsx             # 로고 컴포넌트
│
├── hooks/
│   └── use-mobile.ts            # 모바일 반응형 감지 커스텀 훅
│
├── lib/
│   └── utils.ts                 # cn() - TailwindCSS 클래스 병합 유틸
│
├── types/
│   └── index.ts                 # 공통 TypeScript 타입 정의
│
├── components.json              # shadcn/ui 설정 파일
├── postcss.config.mjs           # PostCSS 설정 (@tailwindcss/postcss)
├── next.config.ts               # Next.js 설정
├── tsconfig.json                # TypeScript 설정 (strict: true)
├── eslint.config.mjs            # ESLint 설정 (Next.js + TypeScript)
└── package.json
```

### 페이지 및 라우팅

| 라우트 | 파일 | 설명 |
|--------|------|------|
| `/` | `app/page.tsx` | 홈페이지 - 히어로 섹션 + 기능 소개 |
| `/dashboard` | `app/dashboard/page.tsx` | 대시보드 - 통계 카드 + 활동 목록 |
| `/showcase` | `app/showcase/page.tsx` | 컴포넌트 쇼케이스 - UI 컴포넌트 데모 |

### 색상 시스템 (OKLCH)

**위치:** `app/globals.css`

색상은 CSS 커스텀 속성(변수)으로 정의되어 있으며, OKLCH 색상 공간을 사용합니다.

```css
/* 라이트 모드 */
:root {
  --background: oklch(1 0 0);           /* 흰색 */
  --foreground: oklch(0.145 0 0);       /* 거의 검은색 */
  --primary: oklch(0.205 0 0);          /* 진한 색 */
  --primary-foreground: oklch(0.985 0 0); /* 밝은 색 */
  /* ... 기타 색상 변수 */
}

/* 다크 모드 */
.dark {
  --background: oklch(0.145 0 0);       /* 거의 검은색 */
  --foreground: oklch(0.985 0 0);       /* 흰색 */
  --primary: oklch(0.922 0 0);          /* 밝은 색 */
  --primary-foreground: oklch(0.205 0 0); /* 진한 색 */
}
```

컴포넌트에서 사용:
```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    클릭
  </button>
</div>
```

---

## 코딩 스타일 및 패턴

### 파일 구조

#### Server Components (기본)
```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return <div>페이지 콘텐츠</div>;
}
```

#### Client Components
```tsx
// components/interactive-button.tsx
"use client"; // 반드시 최상단에 작성

import { useState } from "react";

export function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### TypeScript

- **엄격한 타입 검사:** `tsconfig.json`에서 `strict: true` 활성화
- **함수 반환 타입:** 모든 함수에 명시적으로 작성
- **`any` 타입 금지**
- **인터페이스/타입:** `types/index.ts`에 정의하거나 필요한 파일에 로컬 정의

```tsx
// 올바른 예
interface UserProps {
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserProps): JSX.Element {
  return <div>{name} - {email}</div>;
}
```

### 스타일링 (TailwindCSS v4)

- **CSS 기반:** `globals.css`에 `@import "tailwindcss";` 작성
- **클래스 병합:** `cn()` 유틸 사용 (clsx + tailwind-merge)

```tsx
import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return (
    <button className={cn("px-4 py-2 rounded bg-primary", className)} {...props} />
  );
}
```

### 컴포넌트 설계

**작은 단위로 분리:**
```
components/
├── ui/          # 원자적 UI 컴포넌트 (Button, Card, Dialog 등)
├── layout/      # 페이지 레이아웃 (Header, Footer)
└── common/      # 재사용 가능한 조합 컴포넌트 (Logo, ThemeToggle)
```

---

## 주요 패턴 및 구현

### 1. 테마 시스템 (Dark Mode)

**라이브러리:** `next-themes`
**저장 위치:** `localStorage`
**기본값:** 시스템 설정 따르기

```tsx
"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      현재 테마: {theme}
    </button>
  );
}
```

### 2. shadcn/ui 컴포넌트 활용

기본 구조:
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Example() {
  return (
    <Card>
      <CardContent>
        <Button>클릭</Button>
      </CardContent>
    </Card>
  );
}
```

### 3. 경로 별칭 (Path Aliases)

설정: `tsconfig.json`에서 `@/*`를 프로젝트 루트로 매핑

```tsx
// 👍 권장
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ❌ 피하기
import { Button } from "../../../components/ui/button";
```

### 4. 타입 정의

**공통 타입:** `types/index.ts`
```tsx
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}
```

**로컬 타입:** 컴포넌트 파일 내에 정의
```tsx
interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}
```

---

## 개발 워크플로우

### 새 페이지 추가

```bash
# 1. 디렉토리 생성
mkdir -p app/new-page

# 2. page.tsx 작성
# app/new-page/page.tsx
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

### 새 컴포넌트 추가

```tsx
// components/common/my-component.tsx
"use client"; // 필요시만 추가

export interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

export function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="font-bold">{title}</h2>
      {children}
    </div>
  );
}
```

---

## 린트 및 코드 품질

### ESLint

**설정:** `eslint.config.mjs` (ESLint 9 flat config)

```bash
# 린트 검사
npm run lint

# 린트 오류 자동 수정 (지원하는 경우)
npm run lint -- --fix
```

**포함된 규칙:**
- `eslint-config-next/core-web-vitals` - Core Web Vitals 최적화
- `eslint-config-next/typescript` - TypeScript 규칙

---

## 주의사항

### ✅ 권장사항

- 컴포넌트를 작고 재사용 가능하게 설계
- 타입 안정성 우선
- shadcn/ui 컴포넌트 최대한 활용
- Server Components 기본 사용, Client Components는 필요할 때만
- 한국어 주석으로 복잡한 로직 설명
- 상태 관리는 필요한 경우에만 사용

### ❌ 피할 사항

- `any` 타입 사용
- 인라인 스타일 사용 (TailwindCSS 활용)
- 과도한 상태 분산
- 파일 크기를 불필요하게 키우기 (단일 책임 원칙)
- HTML에 hardcoded된 색상 (CSS 변수 사용)

---

## Git 커밋 규칙

### 커밋 메시지 형식

```
제목 (명령조, 50자 이내)

상세 설명 (72자 기준 줄바꿈)
- 수정 사항 1
- 수정 사항 2

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

### 예시

```
헤더 컴포넌트 반응형 레이아웃 개선

- 모바일에서 메뉴 드로어(Sheet) 추가
- 데스크톱에서 네비게이션 링크 표시
- 테마 토글 버튼 통합

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

### 타입 (선택사항이지만 권장)

- `feat:` 새 기능
- `fix:` 버그 수정
- `refactor:` 코드 구조 개선
- `style:` 스타일링 (코드 로직 X)
- `docs:` 문서
- `perf:` 성능 최적화

---

## 유용한 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [TailwindCSS 클래스](https://tailwindcss.com/docs)
- [lucide-react 아이콘](https://lucide.dev)
- [OKLCH 색상 생성기](https://oklch.com)
- [React 18+ 문서](https://react.dev)

---

**마지막 업데이트:** 2026-02-13
**유지보수자:** Claude AI Assistant
