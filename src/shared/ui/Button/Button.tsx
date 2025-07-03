import styles from "./Button.module.css";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
