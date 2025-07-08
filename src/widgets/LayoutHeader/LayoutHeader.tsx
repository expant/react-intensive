import { useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>
          <h2>О проекте</h2>
        </Modal.Header>
        <Modal.Body>
          <p>
            Приложение для просмотра постов и комментариев, основанное на
            публичном API
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={styles.btnModal}
            onClick={() => setIsModalOpen(false)}
          >
            Понятно
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}
