import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  body: string;
};

export function PostCard({ title, body }: PostCardProps) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.content}>{body}</p>
    </div>
  );
}
