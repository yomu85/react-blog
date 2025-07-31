import { useState, useEffect } from "react";
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
import { ChevronDown, ExternalLink } from "lucide-react";
import styles from "./blog.module.css";

interface IBlogProps extends React.HTMLAttributes<HTMLDivElement> {
  blogCount: number;
}

const Blog = ({ blogCount }: IBlogProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array.from({ length: blogCount }, () => false)
  );

  const displayBlogCount: number = isExpanded ? blogCount : 1;
  const isShowMoreButton: boolean = blogCount > 1;

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
        <strong>클래시로얄 전투 전략 블로그 수: {blogCount}개</strong>
        {
          isShowMoreButton && (
            <Button
              variant="ghost"
              style={{ width: "fit-content" }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              더보기
              <ChevronDown className={isExpanded ? "rotate-180" : ""} />
            </Button>
          )
        }
        
      </div>
      <div className={styles["blog-content"]}>
        {Array.from({ length: displayBlogCount }, (_, index) => {
          const isOpen = openStates[index];
          return (
            <Card key={index} className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="flex justify-between items-center text-lg gap-1">
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
              <CardContent
                className={isOpen ? "flex" : "hidden"}
                style={{
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <CardDescription>
                  초반에 고블린 카드 2장을 모으기
                </CardDescription>

                <Button asChild variant="outline" className="w-full">
                  <a href="https://clashroyale.arong.day/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    클래시로얄 합체 전술 바로가기
                  </a>
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
