import Link from "next/link";
import {
  Zap,
  Code2,
  Palette,
  Box,
  Moon,
  Star,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Next.js v15",
    description: "최신 Next.js App Router와 Turbopack 기반의 빠른 개발 경험",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "완벽한 타입 안정성으로 안정적이고 유지보수하기 좋은 코드",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description: "설정 파일 없는 CSS 기반 스타일링으로 간단하고 직관적",
  },
  {
    icon: Box,
    title: "shadcn/ui",
    description: "재사용 가능하고 커스터마이징 가능한 고품질 UI 컴포넌트",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "OKLCH 색상 시스템으로 완벽한 라이트/다크 모드 지원",
  },
  {
    icon: Star,
    title: "lucide-react",
    description: "깔끔하고 일관된 디자인의 아이콘 라이브러리",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next.js v15 스타터킷
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              현대적인 웹 개발을 위한 모든 것이 준비된 완벽한 스타터킷입니다.
              TypeScript, TailwindCSS v4, shadcn/ui로 바로 시작하세요.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">대시보드 보기</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/showcase">컴포넌트 쇼케이스</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 기능 섹션 */}
        <section className="bg-muted/50 py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                주요 기능
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                최신 기술 스택으로 구성된 강력한 기능들
              </p>
            </div>

            {/* 기능 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-2 mt-1">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              지금 시작하기
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              이 스타터킷을 기반으로 당신의 프로젝트를 구축하세요.
              모든 설정이 준비되어 있으니 바로 개발을 시작할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/dashboard">탐색하기</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub 보기
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
