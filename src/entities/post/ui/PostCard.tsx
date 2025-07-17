import type { PostCardProps } from "../model/types";
import styles from "./PostCard.module.css";

export function PostCard({ post, children }: PostCardProps) {
  const { title, body } = post;

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.content}>{body}</p>
      {children}
    </div>
  );
}
