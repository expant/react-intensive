import { useParams } from "react-router-dom";
import { AlbumList } from "@/widgets/AlbumList/AlbumList";
import { mockAlbums } from "@/shared/mocks/albums";
import { filterById } from "@/shared/lib/data/filterById";

export function UserAlbumsPage() {
  const { id: userId } = useParams<{ id: string }>();
  const filteredAlbums = filterById(mockAlbums, "userId", Number(userId));

  return <AlbumList albums={filteredAlbums} />;
}
