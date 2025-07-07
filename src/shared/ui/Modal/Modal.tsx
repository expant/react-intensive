import { createPortal } from "react-dom";
import { Button } from "../Button/Button";
import { CloseIcon } from "../icons/CloseIcon";
import { useTheme } from "@/shared/lib/theme/useTheme";
import styles from "./Modal.module.css";

type ModalProps = {
  onClose: () => void;
};

export function Modal({ onClose }: ModalProps) {
  const { theme } = useTheme();
  const modalRoot = document.querySelector("#modal-root");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} data-theme={theme}>
      <div className={styles.modalContent}>
        <Button variant="icon" onClick={onClose} className={styles.btnClose}>
          <CloseIcon className={styles.closeIcon} />
        </Button>
        <h2 className={styles.title}>О проекте</h2>
        <p className={styles.description}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className={styles.modalOverlay} onClick={onClose}></div>
    </div>,
    modalRoot
  );
}
