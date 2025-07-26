import type { ModalSubcomponentProps } from "../../model/types";
import styles from "./ModalFooter.module.css";

export function ModalFooter({ children }: ModalSubcomponentProps) {
  return <footer className={styles.footer}>{children}</footer>;
}
