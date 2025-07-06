import styles from "./Button.module.css";
import type { ReactNode } from "react";

type ButtonProps = {
  variant?: "icon" | "text";
  className?: string,
  children: ReactNode;
  onClick: () => void;
};

export function Button({
  variant = "text",
  className = "",
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${className}
        ${styles.button} 
        ${styles[variant]} 
      `}
    >
      {children}
    </button>
  );
}
