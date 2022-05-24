import Portfolio from "../Pages/Portfolio";
import Blog from "../Pages/Blog";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SignUp";
import NotFound from "../Pages/NotFound";
import Purchase from "../Pages/Purchase";

const PublicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/portfolio", name: "About", Component: Portfolio },
  { path: "/blog", name: "Blog", Component: Blog },
  { path: "/login", name: "Login", Component: Login },
  { path: "/purchase/:id", name: "Purchase", Component: Purchase },
  { path: "/singUp", name: "SingUp", Component: SingUp },
  { path: "*", name: "NotFound", Component: NotFound },
];
export default PublicRoutes;
