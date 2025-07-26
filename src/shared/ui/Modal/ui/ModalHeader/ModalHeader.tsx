import type { ModalSubcomponentProps } from "../../model/types";
import styles from "./ModalHeader.module.css";

export function ModalHeader({ children }: ModalSubcomponentProps) {
  return <header className={styles.header}>{children}</header>;
}
