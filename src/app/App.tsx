import Header from "../widgets/LayoutHeader";
import Footer from "../widgets/LayoutFooter";
import PostList from "../widgets/PostList";
import MainLayout from "../shared/layouts/MainLayout";

export default function App() {
  return (
    <MainLayout header={<Header />} footer={<Footer />}>
      <PostList />
    </MainLayout>
  );
}
