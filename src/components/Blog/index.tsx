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
import { Trash2, ChevronDown } from "lucide-react";
import styles from "./blog.module.css";

interface IBlogProps extends React.HTMLAttributes<HTMLDivElement> {
  blogLength: number;
}

const Blog = ({ blogLength }: IBlogProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array.from({ length: blogLength }, () => false)
  );

  const displayBlogLength = isExpanded ? blogLength : 1;

  useEffect(() => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[0] = true;
      return newStates;
    });
  }, []);

  return (
    <article className={styles.blog}>
      <div className={styles["blog-header"]}>
        <strong>클래시로얄 전투 전략 블로그 수: {blogLength}개</strong>
        <Button
          variant="ghost"
          style={{ width: "fit-content" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          더보기
          <ChevronDown className={isExpanded ? "rotate-180" : ""} />
        </Button>
      </div>
      <div className={styles["blog-content"]}>
        {Array.from({ length: displayBlogLength }, (_, index) => {
          const isOpen = openStates[index];
          return (
            <Card key={index} className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  클래시로얄 전투 전략 {index + 1}일차
                  <Button
                    variant="ghost"
                    style={{ width: "fit-content" }}
                    onClick={() =>
                      setOpenStates((prev) => {
                        const newStates = [...prev];
                        newStates[index] = !isOpen;
                        return newStates;
                      })
                    }
                  >
                    <ChevronDown className={isOpen ? "rotate-180" : ""} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className={isOpen ? "block" : "hidden"}>
                <CardDescription>
                  평시에는 고블린 2마리부터 세팅 후 카드를 돌리자
                </CardDescription>
                <Button variant="outline" className="w-full">
                  <Trash2 /> 삭제
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </article>
  );
};

export default Blog;
