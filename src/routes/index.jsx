import { createBrowserRouter } from "react-router-dom";
import userRouters from "./user.routes";
import adminRouters from "./admin.routes";
import AdminIndex from "../pages/AdminIndex";
import ProductManager from "../pages/ProductManager";
import CategoryManager from "../pages/CategoryManager";
import NotFoundPage from "../pages/NotFoundPage";
import ListProduct from "../pages/ListProduct";
import ProductDetail from "../pages/ProductDetail";
import DemoSearchParam from "../pages/DemoSearchParam";
import ProtectedRoutes from "../components/ProtectedRoutes";
import React, { Suspense } from "react";

// Áp dụng kỹ thuật lazy loading
const Home = React.lazy(() => import("../pages/Home"));
const Contact = React.lazy(() => import("../pages/Contact"));
const About = React.lazy(() => import("../pages/About"));

const mergeRoutes = [...userRouters, ...adminRouters];

const LoadLazy = ({ children }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <LoadLazy children={<Home />} />,
  },
  {
    path: "/contact",
    element: <LoadLazy children={<Contact />} />,
  },
  {
    path: "/about",
    element: <LoadLazy children={<About />} />,
  },
  {
    path: "/list-product",
    element: <ListProduct />,
  },
  {
    path: "/product-detail/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes>
        <AdminIndex />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "product-manager",
        element: <ProductManager />,
      },
      {
        path: "category-manager",
        element: <CategoryManager />,
      },
    ],
  },
  {
    path: "/search-param",
    element: <DemoSearchParam />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routers;
