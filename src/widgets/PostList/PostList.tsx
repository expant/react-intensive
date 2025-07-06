import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../shared/api/mocks/posts.mock";
import styles from "./PostList.module.css";

export function PostList() {
  return (
    <ul className={styles.list}>
      {mockPosts.map((post) => (
        <li key={post.id} className={styles.item}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
