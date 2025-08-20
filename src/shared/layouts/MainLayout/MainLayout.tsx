import type { PropsWithChildren } from "react";
import { useTheme } from "../../lib/theme/model/hooks/useTheme";
import type { MainLayoutProps } from "./model/types";
import styles from "./MainLayout.module.css";

export function MainLayout(props: PropsWithChildren<MainLayoutProps>) {
  const { header, footer, children } = props;
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
