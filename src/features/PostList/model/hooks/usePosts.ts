import { useState } from "react";
import { useSelector } from "react-redux";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import { filterById } from "@/shared/lib/data/filterById";
import { useGetUsersQuery } from "@/entities/user/api/usersApi";
import { useGetPostsQuery } from "@/entities/post/api/postsApi";
import { selectAll } from "@/entities/post/model/slice/postSlice";
import type { LengthFilter } from "@/features/PostLengthFilter/model/types";

export function usePosts(userId?: number) {
  const [titleLength, setTitleLength] = useState<LengthFilter>({});
  const allPosts = useSelector(selectAll);
  const { isLoading } = useGetPostsQuery();
  useGetUsersQuery();

  let posts = [...allPosts];

  if (userId) {
    posts = filterById(posts, "userId", userId);
  }

  if (titleLength) {
    const { min, max } = titleLength;
    posts = filterByLength(posts, min, max);
  }

  return { titleLength, setTitleLength, loading: isLoading, posts };
}
