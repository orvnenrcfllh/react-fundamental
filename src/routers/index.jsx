import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Index";
import Aboutpage from "../pages/About";
import Blogpage from "../pages/blogs";
import Postpage from "../pages/blogs/_id";
import { posts, postById } from "../apis/loaders";
import ErrorPage from "../components/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blogpage />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <Postpage />,
        loader: postById,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
    ],
  },
]);
