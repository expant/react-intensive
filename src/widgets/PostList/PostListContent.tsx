import { useMemo } from "react";
import { PostCard } from "@/entities/post/ui/PostCard";
import { CommentList } from "../CommentList/ui/CommentList";
import { mockPosts } from "@/shared/mocks/posts";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import type { LengthFilter } from "@/features/PostLengthFilter/types";
import styles from "./PostListContent.module.css";

export function PostListContent(lengthPostTitle: LengthFilter) {
  const filteredPosts = filterByLength({
    posts: mockPosts,
    ...lengthPostTitle,
  });

  const postList = useMemo(
    () =>
      filteredPosts.map((post) => (
        <li key={post.id} className={styles.item}>
          <PostCard {...post}>
            <CommentList postId={post.id} />
          </PostCard>
        </li>
      )),
    [filteredPosts]
  );

  return <ul className={styles.list}>{postList}</ul>;
}

export const PostListContentWithLoading = withLoading(PostListContent);
