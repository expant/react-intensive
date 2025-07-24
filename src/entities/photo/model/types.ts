export type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotoCardProps = {
  photo: Photo;
};
