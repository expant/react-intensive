import { useMemo } from "react";
import { PostCard } from "@/entities/post/ui/PostCard";
import { CommentList } from "../CommentList/ui/CommentList";
// import { withLoading } from "@/shared/lib/hoc/withLoading";
import type { Post } from "@/entities/post/ui/types";
import styles from "./PostList.module.css";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  const postList = useMemo(
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

  return <ul className={styles.list}>{postList}</ul>;
}

// export const PostListWithLoading = withLoading(PostList);
