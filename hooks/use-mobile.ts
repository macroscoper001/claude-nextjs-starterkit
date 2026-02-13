import { useEffect, useState } from "react";

export function useMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // 마이크로태스크 큐에 추가하여 렌더 후 상태 업데이트
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);

    void Promise.resolve().then(checkMobile);

    // 리사이즈 핸들러
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  // SSR 중에는 false, 클라이언트에서만 정확한 값 반환
  return isMobile ?? false;
}
