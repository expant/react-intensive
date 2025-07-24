import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button";
import { PostCard } from "@/entities/post/ui/PostCard";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import { mockPosts } from "@/shared/mocks/posts";
import styles from "./PostItemPage.module.css";

export function PostItemPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const post = mockPosts.find((post) => post.id === Number(id));

  const handleGoBack = () => navigate(-1);

  if (!post) {
    return <div>Пост не найден</div>;
  }

  return (
    <div>
      <Button
        variant="text"
        onClick={handleGoBack}
        className={styles.goBackBtn}
      >
        Назад
      </Button>
      <PostCard post={post}>
        <CommentList postId={post.id} />
      </PostCard>
    </div>
  );
}
