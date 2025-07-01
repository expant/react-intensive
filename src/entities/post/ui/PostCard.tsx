import styles from "./PostCard.module.css";

type Props = {
  title: string;
  body: string;
};

export default function PostCard({ title, body }: Props) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.content}>{body}</p>
    </div>
  );
}
