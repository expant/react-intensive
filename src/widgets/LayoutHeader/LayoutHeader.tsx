import styles from "./LayoutHeader.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";

export function LayoutHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Post List</h1>
      <div className={styles.actions}>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
