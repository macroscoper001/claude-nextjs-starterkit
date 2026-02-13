import {
  BarChart3,
  Users,
  TrendingUp,
  Activity,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  {
    icon: Users,
    label: "총 사용자",
    value: "2,345",
    change: "+12.5%",
  },
  {
    icon: TrendingUp,
    label: "매출",
    value: "$45,231.89",
    change: "+8.2%",
  },
  {
    icon: Activity,
    label: "활동",
    value: "1,234",
    change: "+4.3%",
  },
  {
    icon: BarChart3,
    label: "성능",
    value: "98.5%",
    change: "+2.1%",
  },
];

const recentActivities = [
  {
    id: 1,
    user: "김철수",
    action: "프로필 업데이트",
    time: "2시간 전",
    status: "completed",
  },
  {
    id: 2,
    user: "이영희",
    action: "새 프로젝트 생성",
    time: "4시간 전",
    status: "completed",
  },
  {
    id: 3,
    user: "박민준",
    action: "설정 변경",
    time: "1일 전",
    status: "pending",
  },
  {
    id: 4,
    user: "정수진",
    action: "데이터 내보내기",
    time: "2일 전",
    status: "completed",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 대시보드 헤더 */}
        <section className="border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div>
              <h1 className="text-3xl font-bold">대시보드</h1>
              <p className="text-muted-foreground mt-2">
                시스템 통계 및 활동 정보를 한눈에 확인하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 컨텐츠 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.label}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-green-600 dark:text-green-400">
                        {stat.change}
                      </span>
                      {" "}지난 달 대비
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* 최근 활동 */}
          <Card>
            <CardHeader>
              <CardTitle>최근 활동</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={activity.id}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {activity.user.substring(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{activity.user}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.action}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant={
                            activity.status === "completed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {activity.status === "completed"
                            ? "완료"
                            : "진행중"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                    {index < recentActivities.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
