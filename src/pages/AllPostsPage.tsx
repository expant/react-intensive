import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { PostList } from "@/widgets/PostList/ui/PostList";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import { withLoading } from "@/shared/lib/hoc/withLoading";

const PostListWithLoading = withLoading(PostList);

export function AllPostsPage() {
  const { titleLength, setTitleLength, posts, loading } = usePosts();

  return (
    <div>
      <PostLengthFilter length={titleLength} onChange={setTitleLength} />
      <PostListWithLoading loading={loading} posts={posts} />
    </div>
  );
}
