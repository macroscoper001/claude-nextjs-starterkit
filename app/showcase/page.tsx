"use client";

import { useState } from "react";
import {
  Heart,
  Star,
  Zap,
  Code2,
  Palette,
  Box,
  Moon,
  Sun,
  Check,
  AlertCircle,
  Info,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ShowcasePage() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 쇼케이스 헤더 */}
        <section className="border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div>
              <h1 className="text-3xl font-bold">컴포넌트 쇼케이스</h1>
              <p className="text-muted-foreground mt-2">
                shadcn/ui와 커스텀 컴포넌트들의 데모를 확인하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 쇼케이스 컨텐츠 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="buttons">버튼</TabsTrigger>
              <TabsTrigger value="cards">카드</TabsTrigger>
              <TabsTrigger value="badges">배지</TabsTrigger>
              <TabsTrigger value="icons">아이콘</TabsTrigger>
            </TabsList>

            {/* 버튼 탭 */}
            <TabsContent value="buttons" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Button 컴포넌트</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Variants</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3">Sizes</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3">상호작용</h3>
                    <Button
                      onClick={() => setLiked(!liked)}
                      variant={liked ? "default" : "outline"}
                    >
                      <Heart
                        className={`h-4 w-4 mr-2 ${
                          liked ? "fill-current" : ""
                        }`}
                      />
                      {liked ? "좋아합니다" : "좋아요"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 카드 탭 */}
            <TabsContent value="cards" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      카드 1
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    이것은 기본 카드 컴포넌트입니다. 제목, 설명, 컨텐츠를 담을 수 있습니다.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-blue-500" />
                      카드 2
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    다양한 배경색과 상태를 표현할 수 있습니다.
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Palette className="h-5 w-5 text-purple-500" />
                      카드 3
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    배경색을 커스터마이징할 수 있습니다.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 배지 탭 */}
            <TabsContent value="badges" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Badge 컴포넌트</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Variants</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-3">아이콘 포함</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>
                        <Check className="h-3 w-3 mr-1" />
                        성공
                      </Badge>
                      <Badge variant="destructive">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        오류
                      </Badge>
                      <Badge variant="secondary">
                        <Info className="h-3 w-3 mr-1" />
                        정보
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 아이콘 탭 */}
            <TabsContent value="icons" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>lucide-react 아이콘</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {[Zap, Code2, Palette, Box, Moon, Sun, Heart, Star].map(
                      (Icon, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                          <Icon className="h-8 w-8 text-primary" />
                          <span className="text-xs text-muted-foreground text-center">
                            {Icon.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* 추가 컴포넌트 */}
          <div className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Avatar 컴포넌트</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/1234567" />
                    <AvatarFallback>KS</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>IY</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
