import { PostList } from "../widgets/PostList/PostList";
import { MainLayout } from "../shared/layouts/MainLayout";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { LayoutHeader } from "../widgets/LayoutHeader/LayoutHeader";
import { LayoutFooter } from "../widgets/LayoutFooter/LayoutFooter";

export function App() {
  return (
    <ThemeProvider>
      <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
        <PostList />
      </MainLayout>
    </ThemeProvider>
  );
}
