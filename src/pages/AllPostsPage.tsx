import { useState } from "react";
import { PostList } from "@/widgets/PostList/PostList";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import type { LengthFilter } from "@/features/PostLengthFilter/types";

export function AllPostsPage() {
  const [lengthFilter, setLengthFilter] = useState<LengthFilter>({});
  const { posts } = usePosts({ lengthFilter });

  return (
    <div>
      <PostLengthFilter length={lengthFilter} onChange={setLengthFilter} />
      <PostList posts={posts} />
    </div>
  );
}
