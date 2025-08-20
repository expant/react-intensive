import { createPortal } from "react-dom";
import type { PropsWithChildren } from "react";
import { useTheme } from "@/shared/lib/theme/model/hooks/useTheme";
import { ModalHeader } from "./ui/ModalHeader/ModalHeader";
import { ModalBody } from "./ui/ModalBody/ModalBody";
import { ModalFooter } from "./ui/ModalFooter/ModalFooter";
import { Button } from "../Button/Button";
import { CloseIcon } from "../icons/CloseIcon";
import type { ModalProps } from "./model/types";
import styles from "./Modal.module.css";

export function Modal(props: PropsWithChildren<ModalProps>) {
  const { isOpen, onClose, children } = props;
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

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
