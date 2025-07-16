import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AllPostsPage } from "@/pages/AllPostsPage";
import { PostItemPage } from "@/pages/PostItemPage";
import { UserPage } from "@/pages/UserPage";
import { UserAlbumsPage } from "@/pages/UserAlbumsPage";
import { UserTodosPage } from "@/pages/UserTodosPage";
import { UserPostsPage } from "@/pages/UserPostsPage";
import { AlbumPhotosPage } from "@/pages/AlbumPhotosPage/AlbumPhotosPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/posts" replace />
  },
  {
    path: "posts",
    element: <AllPostsPage />,
  },
  {
    path: "posts/:id",
    element: <PostItemPage />,
  },
  {
    path: "users/:id",
    element: <UserPage />,
    children: [
      { index: true, element: <Navigate to="posts" replace /> },
      {
        path: "posts",
        element: <UserPostsPage />,
      },
      {
        path: "todos",
        element: <UserTodosPage />,
      },
      {
        path: "albums",
        element: <UserAlbumsPage />,
      },
      {
        path: "albums/:albumId/photos",
        element: <AlbumPhotosPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
