import { useEffect, useState } from "react";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { ThemeProvider } from "@/shared/lib/theme/ThemeProvider";
import { PostListWithLoading } from "@/widgets/PostList/PostList";
import { LayoutHeader } from "@/widgets/LayoutHeader/LayoutHeader";
import { LayoutFooter } from "@/widgets/LayoutFooter/LayoutFooter";


export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <MainLayout header={<LayoutHeader />} footer={<LayoutFooter />}>
        <PostListWithLoading loading={loading} />
      </MainLayout>
    </ThemeProvider>
  );
}
