// 공통 타입 정의
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
}
