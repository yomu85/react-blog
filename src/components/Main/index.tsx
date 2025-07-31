import Blog from "@/components/Blog";
import styles from "./main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Blog title="2일차" />
    </main>
  );
};

export default Main;
