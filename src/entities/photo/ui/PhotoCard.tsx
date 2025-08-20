import type { PhotoCardProps } from "../model/types";
import styles from "./PhotoCard.module.css";

export function PhotoCard({ photo }: PhotoCardProps) {
  const { title, url } = photo;

  return (
    <div className={styles.photoItem}>
      <img src={url} alt={title} />
    </div>
  );
}
