import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { Button } from "../Button/Button";
import { CloseIcon } from "../icons/CloseIcon";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
};

type ModalSubcomponentProps = {
  children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const { theme } = useTheme();
  const modalRoot = document.querySelector("#modal-root");

  if (!isOpen || !modalRoot) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} data-theme={theme}>
      <div className={styles.modalContent}>
        {children}
        <Button variant="icon" onClick={onClose} className={styles.btnClose}>
          <CloseIcon className={styles.closeIcon} />
        </Button>
      </div>
      <div className={styles.modalOverlay} onClick={onClose}></div>
    </div>,
    modalRoot
  );
}

Modal.Header = ({ children }: ModalSubcomponentProps) => {
  return <header className={styles.header}>{children}</header>;
};

Modal.Body = ({ children }: ModalSubcomponentProps) => {
  return <div className={styles.body}>{children}</div>;
};

Modal.Footer = ({ children }: ModalSubcomponentProps) => {
  return <footer className={styles.footer}>{children}</footer>;
};
