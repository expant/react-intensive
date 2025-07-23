import { PhotoCard } from "@/entities/photo/ui/PhotoCard";
import type { Photo } from "@/entities/photo/model/types";
import styles from "./AlbumPhotosList.module.css";

type AlbumPhotosListProps = {
  photos: Photo[];
};

export function AlbumPhotosList({ photos }: AlbumPhotosListProps) {
  if (!photos.length) {
    return <div>Фотографий нет</div>;
  }

  return (
    <ul className={styles.albumPhotosList}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </ul>
  );
}
