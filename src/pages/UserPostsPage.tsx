import { useState } from "react";
import { useParams } from "react-router-dom";
import { PostList } from "@/widgets/PostList/PostList";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import type { LengthFilter } from "@/features/PostLengthFilter/types";

export function UserPostsPage() {
  const [lengthFilter, setLengthFilter] = useState<LengthFilter>({});
  const { id } = useParams<{ id: string }>();
  const { posts } = usePosts({ userId: Number(id), lengthFilter });

  return (
    <>
      <PostLengthFilter length={lengthFilter} onChange={setLengthFilter} />
      <PostList posts={posts} />
    </>
  );
}
