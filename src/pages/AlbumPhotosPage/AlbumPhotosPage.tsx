import { useParams, useNavigate } from "react-router-dom";
import { useGetPhotosQuery } from "@/entities/photo/api/photosApi";
import { AlbumPhotosList } from "@/widgets/AlbumPhotosList/AlbumPhotosList";
import { Button } from "@/shared/ui/Button/Button";
import { filterById } from "@/shared/lib/data/filterById";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import styles from "./AlbumPhotosPage.module.css";

const AlbumPhotosListWithLoading = withLoading(AlbumPhotosList);

export function AlbumPhotosPage() {
  const navigate = useNavigate();
  const { albumId } = useParams<{ albumId: string }>();
  const { data: photos = [], isLoading } = useGetPhotosQuery();

  const filteredPhotos = filterById(photos, "albumId", Number(albumId));

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
      <AlbumPhotosListWithLoading photos={filteredPhotos} loading={isLoading} />
    </div>
  );
}
