import { useParams } from "react-router-dom";
import { useGetAlbumsQuery } from "@/entities/album/api/albumsApi";
import { AlbumList } from "@/widgets/AlbumList/AlbumList";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { filterById } from "@/shared/lib/data/filterById";

const AlbumListWithLoading = withLoading(AlbumList);

export function UserAlbumsPage() {
  const { id: userId } = useParams<{ id: string }>();
  const { data: albums = [], isLoading } = useGetAlbumsQuery();
  const filteredAlbums = filterById(albums, "userId", Number(userId));

  return <AlbumListWithLoading albums={filteredAlbums} loading={isLoading} />;
}
