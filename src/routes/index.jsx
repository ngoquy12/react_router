import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import userRouters from "./user.routes";
import adminRouters from "./admin.routes";

const mergeRoutes = [...userRouters, ...adminRouters];

const routers = createBrowserRouter(mergeRoutes);

export default routers;
