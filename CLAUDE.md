# Next.js v15 스타터킷 - 프로젝트 지침

## 프로젝트 개요

Next.js v15 App Router 기반의 현대적인 웹 개발 스타터킷입니다.
TypeScript, TailwindCSS v4, shadcn/ui, 그리고 완벽한 다크모드 지원으로 빠른 개발을 가능하게 합니다.

**기술 스택:**
- Next.js v16.1.6 (App Router, Turbopack)
- TypeScript 5+
- TailwindCSS v4 (설정 파일 없음, CSS 기반)
- shadcn/ui (new-york 스타일)
- lucide-react (아이콘)
- next-themes (테마 관리)
- OKLCH 색상 시스템

---

## 언어 및 커뮤니케이션

- **기본 응답 언어:** 한국어
- **코드 주석:** 한국어로 작성
- **커밋 메시지:** 한국어로 작성
- **변수명/함수명:** 영어 (코드 표준 준수)
- **문서화:** 한국어로 작성

---

## 코딩 스타일

### 들여쓰기 & 포맷
- 들여쓰기: **2칸** (스페이스)
- 세미콜론: 필수 사용
- 큰따옴표: 큰따옴표(") 사용
- 줄바꿈: LF 사용

### TypeScript
- 엄격한 타입 검사 활성화 (tsconfig.json)
- 모든 함수에 반환 타입 명시
- 필요시 인터페이스/타입 정의 (`types/index.ts`)
- `any` 타입 사용 금지

### 컴포넌트
- **Server Components** 기본 사용
- **Client Components:** `"use client"` 지시어 필수 (상태, 이벤트 필요시)
- shadcn/ui 컴포넌트 활용
- 재사용 가능하도록 설계

### 스타일링
- **TailwindCSS v4:** `@import "tailwindcss";` 사용
- `globals.css`에서 CSS 변수로 색상 정의
- `cn()` 유틸 사용 (clsx + tailwind-merge)
- 커스텀 CSS는 최소화

```tsx
// 올바른 예
import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return (
    <button className={cn("px-4 py-2 rounded", className)} {...props} />
  );
}
```

---

## 디렉토리 구조

```
claude-nextjs-starterkit/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # 루트 레이아웃 (ThemeProvider)
│   ├── page.tsx                # 메인 랜딩 페이지
│   ├── globals.css             # TailwindCSS v4 + 색상 변수
│   ├── dashboard/
│   │   └── page.tsx            # 대시보드 샘플
│   └── showcase/
│       └── page.tsx            # 컴포넌트 쇼케이스
│
├── components/
│   ├── ui/                     # shadcn/ui 컴포넌트 (자동 생성)
│   ├── layout/
│   │   ├── header.tsx          # 헤더 (네비게이션 + 테마 토글)
│   │   └── footer.tsx          # 푸터
│   └── common/
│       ├── theme-toggle.tsx    # 테마 선택 (라이트/다크/시스템)
│       └── logo.tsx            # 로고
│
├── hooks/
│   └── use-mobile.ts           # 모바일 반응형 감지 훅
│
├── lib/
│   └── utils.ts                # cn() 유틸리티
│
├── types/
│   └── index.ts                # 공통 타입 정의
│
├── components.json             # shadcn/ui 설정
├── postcss.config.mjs          # PostCSS 설정 (@tailwindcss/postcss)
├── next.config.ts              # Next.js 설정
├── tsconfig.json               # TypeScript 설정
├── package.json
└── CLAUDE.md                   # 이 파일
```

---

## 개발 워크플로우

### 새 페이지 추가

```bash
# 1. 라우트 생성
mkdir -p app/new-page

# 2. page.tsx 작성
# app/new-page/page.tsx
export default function NewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">새 페이지</h1>
    </div>
  );
}
```

### 새 컴포넌트 추가

```bash
# 1. 컴포넌트 파일 생성
touch components/common/my-component.tsx

# 2. 컴포넌트 작성
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

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add component-name
```

예: `button`, `card`, `tabs`, `dialog` 등

---

## 색상 시스템 (OKLCH)

### 색상 변수 정의 위치
- **파일:** `app/globals.css`
- **형식:** CSS 커스텀 속성 (CSS Variables)
- **색상 공간:** OKLCH (현대적, 접근성 좋음)

### 사용 예

```css
/* globals.css */
:root {
  --primary: oklch(0.235 0.39 342.55);
  --primary-foreground: oklch(1 0 0);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}

.dark {
  --primary: oklch(0.785 0.083 342.55);
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
}
```

```tsx
// 컴포넌트에서 사용
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    클릭
  </button>
</div>
```

---

## 테마 시스템 (Dark Mode)

### 구조
- **라이브러리:** `next-themes`
- **속성:** `class` 기반
- **저장소:** localStorage
- **기본값:** 시스템 설정 따르기

### 사용

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

---

## git 커밋 규칙

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
- `test:` 테스트

---

## 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm run start

# ESLint 검사
npm run lint
```

---

## 주의사항

### DO ✅
- 컴포넌트를 작고 재사용 가능하게 설계
- 타입 안정성을 우선으로
- shadcn/ui 컴포넌트 최대한 활용
- 한국어 주석으로 복잡한 로직 설명
- 상태 관리는 최소화 (필요시에만 사용)

### DON'T ❌
- `any` 타입 사용
- 인라인 스타일 사용 (TailwindCSS 활용)
- 상태를 과도하게 분산 (필요시 상태 관리 도구 고려)
- 외부 CSS 라이브러리 추가 (TailwindCSS + shadcn/ui로 충분)
- 파일을 불필요하게 큼 (단일 책임 원칙)

---

## 성능 최적화

### 이미지 최적화
```tsx
import Image from "next/image";

<Image
  src="/path/to/image.png"
  alt="설명"
  width={800}
  height={600}
  priority // LCP 이미지인 경우
/>
```

### 동적 임포트
```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>로딩 중...</div>,
});
```

### 데이터 페칭
- Server Components에서 `fetch` 사용
- 필요시 SWR, TanStack Query 고려
- API 라우트는 `/app/api/` 디렉토리에 생성

---

## 자주 묻는 질문 (FAQ)

**Q: 새 shadcn/ui 컴포넌트는 어떻게 추가하나요?**
A: `npx shadcn@latest add [component-name]` 실행

**Q: 색상을 변경하려면?**
A: `app/globals.css`의 `:root`와 `.dark` 섹션에서 CSS 변수 수정

**Q: API 라우트는 어디에?**
A: `app/api/` 디렉토리에 생성 (예: `app/api/users/route.ts`)

**Q: 타입 정의는 어디에?**
A: `types/index.ts` 또는 사용처 근처에 정의

**Q: 테마가 안 바뀌면?**
A: `html` 태그에 `suppressHydrationWarning` 속성 확인

---

## 유용한 링크

- [Next.js 공식 문서](https://nextjs.org/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [TailwindCSS 클래스](https://tailwindcss.com/docs)
- [lucide-react 아이콘](https://lucide.dev)
- [OKLCH 색상 생성기](https://oklch.com)

---

**마지막 업데이트:** 2026-02-13
**유지보수자:** Claude AI Assistant
