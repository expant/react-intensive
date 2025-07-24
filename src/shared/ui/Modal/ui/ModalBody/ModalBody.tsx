import type { ModalSubcomponentProps } from "../../model/types";
import styles from "./ModalBody.module.css";

export function ModalBody({ children }: ModalSubcomponentProps) {
  return <div className={styles.body}>{children}</div>;
}
