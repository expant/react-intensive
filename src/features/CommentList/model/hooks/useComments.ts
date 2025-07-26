import { useState } from "react";
import { useGetCommentsQuery } from "@/entities/comment/api/commentsApi";
import { filterById } from "@/shared/lib/data/filterById";

export function useComments(postId: number) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: comments = [] } = useGetCommentsQuery();

  const toggleComments = () => setIsExpanded(!isExpanded);

  const commentsByPost = filterById(comments, "postId", postId);

  return {
    isExpanded,
    toggleComments,
    comments: commentsByPost,
    commentsCount: commentsByPost.length,
  };
}
