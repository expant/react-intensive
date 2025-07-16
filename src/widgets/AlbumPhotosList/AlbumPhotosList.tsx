// import { withLoading } from "@/shared/lib/hoc/withLoading";
import styles from "./AlbumPhotosList.module.css";

type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type AlbumPhotosListProps = {
  photos: Photo[];
};

export function AlbumPhotosList({ photos }: AlbumPhotosListProps) {
  return (
    <ul className={styles.albumPhotosList}>
      {photos.map((photo) => (
        <li key={photo.id} className={`${styles.photoItem}`}>
          <img src={photo.url} alt={photo.title} />
        </li>
      ))}
    </ul>
  );
}
