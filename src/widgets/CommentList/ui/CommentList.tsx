import { useComments } from "@/features/CommentList/model/hooks/useComments";
import { CommentCard } from "@/entities/comment/ui/CommentCard";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./CommentList.module.css";

type CommentListProps = {
  postId: number;
};

export function CommentList({ postId }: CommentListProps) {
  const { isExpanded, toggleComments, comments, commentsCount } =
    useComments(postId);

  return (
    <div className={styles.commentSection}>
      <Button
        variant="text"
        onClick={toggleComments}
        className={`${styles.btnTrigger} ${isExpanded ? styles.active : ""}`}
      >
        {isExpanded
          ? "Свернуть комментарии"
          : `Показать комментарии (${commentsCount})`}
      </Button>
      {isExpanded && (
        <ul className={styles.commentList}>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
}
