import type { PropsWithChildren } from "react";
import type { ButtonProps } from "./model/types";
import styles from "./Button.module.css";

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { variant = "text", className = "", onClick, children } = props;

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
