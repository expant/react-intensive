import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import { mockPosts } from "@/shared/mocks/posts";
import { filterById } from "@/shared/lib/data/filterById";
import type { LengthFilter } from "@/features/PostLengthFilter/types";

type usePostsProps = {
  userId?: number;
  lengthFilter?: LengthFilter;
};

export function usePosts({ userId, lengthFilter }: usePostsProps) {
  const filteredByUser = userId
    ? filterById(mockPosts, "userId", userId)
    : [...mockPosts];

  const filteredByLength = lengthFilter
    ? filterByLength({ posts: filteredByUser, ...lengthFilter })
    : [...filteredByUser];

  return { posts: filteredByLength };
}
