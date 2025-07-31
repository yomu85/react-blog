import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["header-title"]}>나만의 블로그</h1>
    </header>
  );
};

export default Header;
