import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";


const PrivateRoutes = () => {
  const [user , loading] = useAuthState(auth);
  const location = useLocation();

  if(loading){
    return <Loading/>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet/>;

};

export default PrivateRoutes;