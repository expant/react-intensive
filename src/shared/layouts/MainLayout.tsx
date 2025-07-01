import styles from "./MainLayout.module.css";

type Props = {
  header: React.ReactElement;
  footer: React.ReactElement;
  children: React.ReactNode;
};

export default function MainLayout({ header, footer, children }: Props) {
  return (
    <div className={styles.layout}>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}
