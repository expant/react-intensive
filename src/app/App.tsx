import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { ThemeProvider } from "@/shared/lib/theme/ThemeProvider";
import { LayoutHeader } from "@/widgets/LayoutHeader/LayoutHeader";
import { LayoutFooter } from "@/widgets/LayoutFooter/LayoutFooter";
import { PostList } from "@/widgets/PostList/PostList";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import { withLoading } from "@/shared/lib/hoc/withLoading";

const PostListWithLoading = withLoading(PostList);

export function App() {
  const { filters, setFilters, loading, filteredPosts } = usePosts();

  return (
    <ThemeProvider>
      <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
        <PostLengthFilter length={filters} onChange={setFilters} />
        <PostListWithLoading loading={loading} posts={filteredPosts} />
      </MainLayout>
    </ThemeProvider>
  );
}
