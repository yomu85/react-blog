import Blog from "@/components/Blog";
import styles from "./main.module.css";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

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
        <div className={styles["main-button-container"]}>
          <Button variant="outline" onClick={() => {
            if (count < 100) {
              setCount(prev => prev + 1);
            }
          }} style={{ width: "40px", height: "40px" }}>
            <Plus />
          </Button>
          <Button variant="outline" onClick={() => {
            if (count > 1) {
              setCount(prev => prev - 1);
            }
          }} style={{ width: "40px", height: "40px" }}>
            <Minus />
          </Button>
        </div>
      </div>
      <Blog blogCount={count} />
    </main>
  );
};

export default Main;
