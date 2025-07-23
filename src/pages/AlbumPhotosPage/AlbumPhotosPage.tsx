import { useParams, useNavigate } from "react-router-dom";
import { AlbumPhotosList } from "@/widgets/AlbumPhotosList/AlbumPhotosList";
import { Button } from "@/shared/ui/Button/Button";
import { mockPhotos } from "@/shared/mocks/photos";
import { filterById } from "@/shared/lib/data/filterById";
import styles from "./AlbumPhotosPage.module.css";

export function AlbumPhotosPage() {
  const { albumId } = useParams<{ albumId: string }>();
  const filteredPhotos = filterById(mockPhotos, "albumId", Number(albumId));
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <div>
      <Button
        variant="text"
        onClick={handleGoBack}
        className={styles.goBackBtn}
      >
        Назад к альбомам
      </Button>
      <AlbumPhotosList photos={filteredPhotos} />
    </div>
  );
}
