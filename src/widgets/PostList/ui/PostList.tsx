import { PostCard } from "@/entities/post/ui/PostCard";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import type { PostListProps } from "../model/types";
import styles from "./PostList.module.css";

export function PostList({ posts }: PostListProps) {
  return (
    <ItemList
      items={posts}
      listClassName={styles.list}
      listItemClassName={styles.item}
    >
      {(post) => (
        <PostCard post={post}>
          <CommentList postId={post.id} />
        </PostCard>
      )}
    </ItemList>
  );
}
