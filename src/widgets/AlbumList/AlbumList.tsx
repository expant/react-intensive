// import { withLoading } from "@/shared/lib/hoc/withLoading";
import { Link } from "react-router-dom";
import styles from "./AlbumList.module.css";

type Album = {
  id: number;
  title: string;
};

type AlbumListProps = {
  albums: Album[];
};

export function AlbumList({ albums }: AlbumListProps) {
  return (
    <ul className={styles.albumList}>
      {albums.map((album) => (
        <Link key={album.id} to={`${album.id}/photos`}>
          <li className={`${styles.albumItem}`}>{album.title}</li>
        </Link>
      ))}
    </ul>
  );
}
