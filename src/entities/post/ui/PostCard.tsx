import type { ReactNode } from "react";
import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  body: string;
  children: ReactNode
};

export function PostCard({ title, body, children }: PostCardProps) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.content}>{body}</p>
      {children}
    </div>
  );
}
