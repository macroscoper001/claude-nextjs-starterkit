import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Next.js v15 스타터킷으로 현대적인 웹 애플리케이션을 빠르게 시작하세요.
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  대시보드
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  쇼케이스
                </Link>
              </li>
            </ul>
          </div>

          {/* 소셜 */}
          <div>
            <h3 className="font-semibold mb-4">Follow</h3>
            <p className="text-sm text-muted-foreground">
              GitHub에서 프로젝트를 확인하세요.
            </p>
          </div>
        </div>

        <Separator />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Next.js Starterkit. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
