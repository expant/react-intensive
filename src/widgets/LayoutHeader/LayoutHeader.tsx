import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from "./LayoutHeader.module.css";

export function LayoutHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Post List</h1>
      <div className={styles.actions}>
        <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
        <ThemeSwitcher />
      </div>
      { isModalOpen && <Modal onClose={() => setIsModalOpen(false)} /> }
    </header>
  );
}
