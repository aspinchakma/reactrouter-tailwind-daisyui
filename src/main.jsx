import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import MainHome from "./Pages/MainHome";
import AboutUs from "./Utilites/AboutUs";
import Blogs from "./Utilites/Blogs";
import Contact from "./Utilites/Contact";
import IceCreamDetails from "./Utilites/IceCreamDetails";
import IceCreams from "./Utilites/IceCreams";
import MainHomeBanner from "./Utilites/MainHomeBanner";
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
      },
      {
        path: "blogs",
        element: <Blogs />,
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
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
