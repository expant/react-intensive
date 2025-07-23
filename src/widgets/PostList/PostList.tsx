import { useMemo } from "react";
import { PostCard } from "@/entities/post/ui/PostCard";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import type { Post } from "@/entities/post/model/types";
import styles from "./PostList.module.css";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  const postItems = useMemo(
    () =>
      posts.map((post) => (
        <li key={post.id} className={styles.item}>
          <PostCard post={post}>
            <CommentList postId={post.id} />
          </PostCard>
        </li>
      )),
    [posts]
  );

  return <ul className={styles.list}>{postItems}</ul>;
}
