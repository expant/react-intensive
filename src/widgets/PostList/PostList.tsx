import { useMemo } from "react";
import { PostCard } from "@/entities/post/ui/PostCard";
import { mockPosts } from "@/shared/mocks/posts";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";
import styles from "./PostList.module.css";

function PostList() {
  const postsList = useMemo(() => (
    mockPosts.map((post) => (
      <li key={post.id} className={styles.item}>
        <PostCard {...post}>
          <CommentList postId={post.id} />
        </PostCard>
      </li>
    ))
  ), [mockPosts]);

  return (
    <ul className={styles.list}>
      {postsList}
    </ul>
  );
}

export const PostListWithLoading = withLoading(PostList);
