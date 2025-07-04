import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  body: string;
};

export function PostCard({ title, body }: PostCardProps) {
  const { theme } = useTheme();

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.content}>{body}</p>
    </div>
  );
}
