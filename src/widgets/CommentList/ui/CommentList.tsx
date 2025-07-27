import { useComments } from "@/features/CommentList/model/hooks/useComments";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { CommentCard } from "@/entities/comment/ui/CommentCard";
import { Button } from "@/shared/ui/Button/Button";
import type { CommentListProps } from "../model/types";
import styles from "./CommentList.module.css";

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
        <ItemList items={comments} listClassName={styles.commentList}>
          {(comment) => <CommentCard key={comment.id} comment={comment} />}
        </ItemList>
      )}
    </div>
  );
}
