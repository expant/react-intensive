import { NavLink } from "react-router-dom";
import type { PostCardProps } from "../model/types";
import styles from "./PostCard.module.css";

export function PostCard({ post, children }: PostCardProps) {
  const { id, title, body, author } = post;

  return (
    <div className={styles.card}>
      <NavLink className={styles.title} to={`/posts/${id}`}>
        <h4>{title}</h4>
      </NavLink>
      <p className={styles.content}>{body}</p>
      <NavLink className={styles.author} to={`/users/${id}`}>
        {author}
      </NavLink>
      {children}
    </div>
  );
}
