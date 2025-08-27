import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import MainHome from "./Pages/MainHome";
import AboutUs from "./Utilites/AboutUs";
import AdditionalInformation from "./Utilites/AdditionalInformation";
import BlogDetails from "./Utilites/BlogDetails";
import Blogs from "./Utilites/Blogs";
import Contact from "./Utilites/Contact";
import Description from "./Utilites/Description";
import IceCreamDetails from "./Utilites/IceCreamDetails";
import IceCreams from "./Utilites/IceCreams";
import MainHomeBanner from "./Utilites/MainHomeBanner";
import NotFound from "./Utilites/NotFound";
import Reviews from "./Utilites/Reviews";
import ShoppingCart from "./Utilites/ShoppingCart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <MainHome />,
    children: [
      {
        path: "/home",
        element: <MainHomeBanner />,
      },
      {
        path: "/home/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/home/icecreams",
        element: <IceCreams />,
        loader: async () => {
          const url = `https://aspinchakma.github.io/api-for-practice/icecreams.json`;
          const response = await fetch(url);
          const data = await response.json();
          return data;
        },
        errorElement: <NotFound />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: async () => {
          const url = `https://aspinchakma.github.io/api-for-practice/iceCreamBlogs.json`;
          const response = await fetch(url);
          const data = await response.json();
          return data;
        },
        errorElement: <NotFound />,
      },
      {
        path: "/home/blogs/:id",
        element: <BlogDetails />,
        loader: async ({ params }) => {
          const blogId = params.id;
          const url = `https://aspinchakma.github.io/api-for-practice/iceCreamBlogs.json`;
          const response = await fetch(url);

          const data = await response.json();
          const finalData = data.find((blog) => blog.id == blogId);

          return finalData;
        },
        errorElement: <NotFound />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shoppingcart",
        element: <ShoppingCart />,
      },
      {
        path: "/home/icecreams/:id",
        element: <IceCreamDetails />,
        loader: async ({ params }) => {
          const id = params.id;
          const response = await fetch(
            `https://aspinchakma.github.io/api-for-practice/icecreams.json`
          );
          const data = await response.json();
          const iceCream = data.find((ice) => ice.id === Number(id));
          return iceCream;
        },
        errorElement: <NotFound />,
        children: [
          {
            path: "/home/icecreams/:id/",
            element: <Description />,
          },
          {
            path: "/home/icecreams/:id/additionalInfo",
            element: <AdditionalInformation />,
          },
          {
            path: "/home/icecreams/:id/reviews",
            element: <Reviews />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
