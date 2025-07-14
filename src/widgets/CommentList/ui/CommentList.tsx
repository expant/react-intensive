import { useState, useMemo } from "react";
import { mockComments } from "@/shared/mocks/comments";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./CommentList.module.css";

type CommentListProps = {
  postId: number;
};

export function CommentList({ postId }: CommentListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleComments = () => setIsExpanded(!isExpanded);

  const comments = mockComments.filter((comment) => comment.postId === postId);

  const commentList = useMemo(
    () =>
      comments.map((comment) => (
        <li className={styles.commentItem} key={comment.id}>
          <p className={styles.commentItemName}>{comment.name}</p>
          <p className={styles.commentItemBody}>{comment.body}</p>
        </li>
      )),
    [mockComments]
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
          : `Показать комментарии (${comments.length})`}
      </Button>
      {isExpanded && <ul className={styles.commentList}>{commentList}</ul>}
    </div>
  );
}
