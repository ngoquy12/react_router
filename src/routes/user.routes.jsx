import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const userRouters = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default userRouters;
