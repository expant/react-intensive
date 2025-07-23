import { useState, useEffect } from "react";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import { mockPosts } from "@/shared/mocks/posts";
import type { Post } from "@/entities/post/model/types";
import type { LengthFilter } from "@/features/PostLengthFilter/model/types";

export function usePosts() {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<LengthFilter>({});
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = filterByLength(mockPosts, filters.min, filters.max);
      setFilteredPosts(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  return {
    filters,
    setFilters,
    loading,
    filteredPosts,
  };
}
