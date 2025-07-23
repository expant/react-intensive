import { Link } from "react-router-dom";
import type { AlbumCardProps } from "../model/types";
import styles from "./AlbumCard.module.css";

export function AlbumCard({ album }: AlbumCardProps) {
  const { id, title } = album;

  return (
    <li>
      <Link to={`${id}/photos`} className={`${styles.albumItem}`}>
        {title}
      </Link>
    </li>
  );
}
