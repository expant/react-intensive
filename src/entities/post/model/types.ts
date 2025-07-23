import type { ReactNode } from "react";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type PostCardProps = {
  post: Post;
  children: ReactNode;
};
