import type { PropsWithChildren } from "react";
import styles from "./ModalBody.module.css";

export function ModalBody({ children }: PropsWithChildren) {
  return <div className={styles.body}>{children}</div>;
}
