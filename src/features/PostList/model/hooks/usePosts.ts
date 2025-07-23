import { useEffect, useState } from "react";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import { mockPosts } from "@/shared/mocks/posts";
import { filterById } from "@/shared/lib/data/filterById";
import type { LengthFilter } from "@/features/PostLengthFilter/types";
import type { Post } from "@/entities/post/model/types";

export function usePosts(userId?: number) {
  const [loading, setLoading] = useState(false);
  const [titleLength, setTitleLength] = useState<LengthFilter>({});
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const filterPosts = () => {
    let filtered = [...mockPosts];

    if (userId) filtered = filterById(posts, "userId", userId);
    if (titleLength) {
      const { min, max } = titleLength;
      filtered = filterByLength(filtered, min, max);
    }

    return filtered;
  };

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = filterPosts();
      setPosts(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [titleLength]);

  return {
    titleLength,
    setTitleLength,
    posts,
    loading,
  };
}
