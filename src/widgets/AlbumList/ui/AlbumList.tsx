import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { AlbumCard } from "@/entities/album/ui/AlbumCard";
import type { AlbumListProps } from "../model/types";
import styles from "./AlbumList.module.css";

export function AlbumList({ albums }: AlbumListProps) {
  if (!albums.length) {
    return <div>Альбомов нет</div>;
  }

  return (
    <ItemList items={albums} listClassName={styles.albumList}>
      {(album) => <AlbumCard key={album.id} album={album} />}
    </ItemList>
  );
}
