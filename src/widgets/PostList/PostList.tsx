import { useMemo, useState } from "react";
import { PostCard } from "@/entities/post/ui/PostCard";
import { mockPosts } from "@/shared/mocks/posts";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { CommentList } from "../CommentList/ui/CommentList";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import styles from "./PostList.module.css";

function PostList() {
  const [lengthPostTitle, setlengthPostTitle] = useState({ min: 0, max: 100 });

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

  return (
    <>
      <PostLengthFilter
        length={lengthPostTitle}
        onChange={setlengthPostTitle}
      />
      <ul className={styles.list}>{postList}</ul>
    </>
  );
}

export const PostListWithLoading = withLoading(PostList);
