import { useState } from "react";
import { mockComments } from "@/shared/mocks/comments";
import { CommentCard } from "@/entities/comment/ui/CommentCard";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./CommentList.module.css";

type CommentListProps = {
  postId: number;
};

export function CommentList({ postId }: CommentListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleComments = () => setIsExpanded(!isExpanded);

  const filteredComments = mockComments.filter(
    (comment) => comment.postId === postId
  );

  return (
    <div className={styles.commentSection}>
      <Button
        variant="text"
        onClick={toggleComments}
        className={`${styles.btnTrigger} ${isExpanded ? styles.active : ""}`}
      >
        {isExpanded
          ? "Свернуть комментарии"
          : `Показать комментарии (${filteredComments.length})`}
      </Button>
      {isExpanded && (
        <ul className={styles.commentList}>
          {filteredComments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
