import styles from "./LayoutHeader.module.css";

export function LayoutHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Post List</h1>
    </header>
  );
}
