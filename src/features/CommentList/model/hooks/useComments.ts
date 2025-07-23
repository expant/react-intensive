import { useState, useMemo } from "react";
import { mockComments } from "@/shared/mocks/comments";
import { filterById } from "@/shared/lib/data/filterById";

export function useComments(postId: number) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleComments = () => setIsExpanded(!isExpanded);

  const comments = useMemo(
    () => filterById(mockComments, "postId", postId),
    [postId]
  );

  return {
    isExpanded,
    toggleComments,
    comments,
    commentsCount: comments.length,
  };
}
