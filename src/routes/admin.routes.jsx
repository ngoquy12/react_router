import AdminIndex from "../pages/AdminIndex";
import CategoryManager from "../pages/CategoryManager";
import ProductManager from "../pages/ProductManager";

const adminRouters = [
  {
    path: "/admin",
    element: <AdminIndex />,
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
];

export default adminRouters;
