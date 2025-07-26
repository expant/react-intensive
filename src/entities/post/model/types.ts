import type { ReactNode } from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostCardProps = {
  post: Post;
  children: ReactNode;
};
