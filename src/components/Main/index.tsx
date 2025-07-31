import Blog from "@/components/Blog";
import styles from "./main.module.css";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(1);
  
  return (
    <main className={styles.main}>
      <div className={styles["main-header"]}>
        <h2>블로그 개수 지정하기</h2>
        <Input 
          ref={inputRef} 
          min={1}
          max={100}
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className={styles["main-input"]}
        />
        개
      </div>
      <Blog blogCount={count} />
    </main>
  );
};

export default Main;
