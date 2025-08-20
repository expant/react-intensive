import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectPostById } from "@/entities/post/model/slice/postSlice";
import { Button } from "@/shared/ui/Button/Button";
import { PostCard } from "@/entities/post/ui/PostCard";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import type { RootState } from "@/app/providers/store/model/types";
import styles from "./PostItemPage.module.css";

export function PostItemPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const post = useSelector((state: RootState) =>
    selectPostById(state, Number(id))
  );

  const handleGoBack = () => navigate(-1);

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
