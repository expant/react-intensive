import { useState, useMemo } from "react";
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

  const commentList = useMemo(() => {
    const filteredComments = mockComments.filter(
      (comment) => comment.postId === postId
    );

    return filteredComments.map((comment) => (
      <CommentCard comment={comment} key={comment.id} />
    ));
  }, [postId, mockComments]);

  return (
    <div className={styles.commentSection}>
      <Button
        variant="text"
        onClick={toggleComments}
        className={`${styles.btnTrigger} ${isExpanded ? styles.active : ""}`}
      >
        {isExpanded
          ? "Свернуть комментарии"
          : `Показать комментарии (${commentList.length})`}
      </Button>
      {isExpanded && <ul className={styles.commentList}>{commentList}</ul>}
    </div>
  );
}
