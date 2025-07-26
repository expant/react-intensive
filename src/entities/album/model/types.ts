export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type AlbumCardProps = {
  album: Album;
};
