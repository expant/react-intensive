import { AlbumCard } from "@/entities/album/ui/AlbumCard";
import type { Album } from "@/entities/album/model/types";
import styles from "./AlbumList.module.css";

type AlbumListProps = {
  albums: Album[];
};

export function AlbumList({ albums }: AlbumListProps) {
  if (!albums.length) {
    return <div>Альбомов нет</div>;
  }

  return (
    <ul className={styles.albumList}>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </ul>
  );
}
