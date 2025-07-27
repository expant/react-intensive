import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { PhotoCard } from "@/entities/photo/ui/PhotoCard";
import type { AlbumPhotosListProps } from "../model/types";
import styles from "./AlbumPhotosList.module.css";

export function AlbumPhotosList({ photos }: AlbumPhotosListProps) {
  if (!photos.length) {
    return <div>Фотографий нет</div>;
  }

  return (
    <ItemList items={photos} listClassName={styles.albumPhotosList}>
      {(photo) => <PhotoCard key={photo.id} photo={photo} />}
    </ItemList>
  );
}
