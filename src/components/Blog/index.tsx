import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import styles from "./blog.module.css";

interface IBlogProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Blog = ({ title }: IBlogProps) => {
  return (
    <article className={styles.blog}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>클래시로얄 전투 전략 2일차 {title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            평시에는 고블린 2마리부터 세팅 후 카드를 돌리자
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button variant="outline" className="w-full">
            <Trash2 /> 상세보기
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>클래시로얄 전투 전략 1일차</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            상점 -1 감소 시 최대한 카드를 돌리자
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button variant="outline" className="w-full">
            <Trash2 /> 상세보기
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
};

export default Blog;
