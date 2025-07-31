import { useState, useEffect } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className={styles["footer"]}>
      <p>
        Made by © {currentTime.getFullYear()} ARONGDAY{" "}
        {currentTime.toLocaleTimeString("en-GB", { hour12: false })}
      </p>
    </footer>
  );
};

export default Footer;
