import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { PostList } from "@/widgets/PostList/PostList";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import type { LengthFilter } from "@/features/PostLengthFilter/types";

const PostListWithLoading = withLoading(PostList);

export function UserPostsPage() {
  const [lengthFilter, setLengthFilter] = useState<LengthFilter>({});
  const { id } = useParams<{ id: string }>();
  const { posts, loading } = usePosts(Number(id));

  return (
    <>
      <PostLengthFilter length={lengthFilter} onChange={setLengthFilter} />
      <PostListWithLoading loading={loading} posts={posts} />
    </>
  );
}
