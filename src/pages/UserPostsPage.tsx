import { useParams } from "react-router-dom";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { PostList } from "@/widgets/PostList/ui/PostList";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";

const PostListWithLoading = withLoading(PostList);

export function UserPostsPage() {
  const { id } = useParams<{ id: string }>();
  const { posts, loading, titleLength, setTitleLength } = usePosts(Number(id));

  return (
    <>
      <PostLengthFilter length={titleLength} onChange={setTitleLength} />
      <PostListWithLoading loading={loading} posts={posts} />
    </>
  );
}
