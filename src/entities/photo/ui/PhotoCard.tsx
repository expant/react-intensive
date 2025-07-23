import type { PhotoCardProps } from "../model/types";
import styles from "./PhotoCard.module.css";

export function PhotoCard({ photo }: PhotoCardProps) {
  const { title, url } = photo;

  return (
    <li className={styles.photoItem}>
      <img src={url} alt={title} />
    </li>
  );
}
