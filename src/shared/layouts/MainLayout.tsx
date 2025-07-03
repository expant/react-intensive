import styles from "./MainLayout.module.css";
import type { ReactElement, ReactNode } from "react";

type MainLayoutProps = {
  header: ReactElement;
  footer: ReactElement;
  children: ReactNode;
};

export function MainLayout({ header, footer, children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}
