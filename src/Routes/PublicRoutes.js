import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import SingUp from "../Pages/SignUp";

const PublicRoutes = [
  {path: '/' , name: 'Home', Component: Home},
  {path: '/dashboard' , name: 'Dashboard', Component: Dashboard},
  {path: '/services' , name: 'Services', Component: Services},
  {path: '/about' , name: 'About', Component: About},
  {path: '/contact' , name: 'Contact', Component: Contact},
  {path: '/login' , name: 'Login', Component: Login},
  {path: '/singUp' , name: 'SingUp', Component: SingUp}
] 
export default PublicRoutes

