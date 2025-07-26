import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserById } from "@/entities/user/model/slice/userSlice";
import type { RootState } from "@/app/providers/store/model/types";
import type { PostCardProps } from "../model/types";
import styles from "./PostCard.module.css";

export function PostCard({ post, children }: PostCardProps) {
  const { userId, id, title, body } = post;
  const user = useSelector((state: RootState) => selectUserById(state, userId));
  const username = user?.username || "Unknown";

  return (
    <div className={styles.card}>
      <NavLink className={styles.title} to={`/posts/${id}`}>
        <h4>{title}</h4>
      </NavLink>
      <p className={styles.content}>{body}</p>
      <NavLink className={styles.username} to={`/users/${userId}`}>
        {username}
      </NavLink>
      {children}
    </div>
  );
}
