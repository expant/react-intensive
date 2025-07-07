import type { ReactElement, ReactNode } from "react";
import { useTheme } from "../lib/theme/useTheme";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  header: ReactElement;
  footer: ReactElement;
  children: ReactNode;
};

export function MainLayout({ header, footer, children }: MainLayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={styles.layout} data-theme={theme}>
      <div className={styles.content}>
        {header}
        <main>{children}</main>
        {footer}
      </div>
    </div>
  );
}
