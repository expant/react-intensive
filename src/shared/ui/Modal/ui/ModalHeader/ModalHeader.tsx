import type { PropsWithChildren } from "react";
import styles from "./ModalHeader.module.css";

export function ModalHeader({ children }: PropsWithChildren) {
  return <header className={styles.header}>{children}</header>;
}
