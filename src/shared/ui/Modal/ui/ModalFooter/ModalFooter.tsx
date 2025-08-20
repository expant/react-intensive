import type { PropsWithChildren } from "react";
import styles from "./ModalFooter.module.css";

export function ModalFooter({ children }: PropsWithChildren) {
  return <footer className={styles.footer}>{children}</footer>;
}
