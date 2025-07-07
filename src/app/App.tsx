import { PostList } from "../widgets/PostList/PostList";
import { MainLayout } from "../shared/layouts/MainLayout";
import { LayoutHeader } from "../widgets/LayoutHeader/LayoutHeader";
import { LayoutFooter } from "../widgets/LayoutFooter/LayoutFooter";

export function App() {
  return (
    <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
      <PostList />
    </MainLayout>
  );
}
