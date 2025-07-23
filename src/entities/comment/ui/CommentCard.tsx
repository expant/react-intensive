import type { CommentCardProps } from "../model/types";
import styles from "./CommentCard.module.css";

export function CommentCard({ comment }: CommentCardProps) {
  const { name, body } = comment;

  return (
    <li className={styles.comment}>
      <p className={styles.commentName}>{name}</p>
      <p className={styles.commentBody}>{body}</p>
    </li>
);
}
