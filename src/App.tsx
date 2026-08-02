import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "blog/:id",
        Component: BlogDetails,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;