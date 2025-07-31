import Blog from "@/components/Blog";
import styles from "./main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Blog blogLength={6} />
    </main>
  );
};

export default Main;
