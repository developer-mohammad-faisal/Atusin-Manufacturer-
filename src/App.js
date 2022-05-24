import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import Navbar from "./Shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Shared/Footer";
import MyOrder from "./Components/MyOrder";
import AddReview from "./Components/AddReview";
import MyProfile from "./Components/MyProfile";
import Dashboard from "./Pages/Dashboard";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import AddAProduct from "./Components/AddAProduct";
import ManageAllOrders from "./Components/ManageAllOrders";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Navbar>
        <Routes>
          {PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route element={<PrivateRoutes/>}>
            {ProtectedRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          >
            <Route index element={<MyOrder />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="addAProduct" element={<AddAProduct />} />
            <Route path="manageAllOrders" element={<ManageAllOrders />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </Navbar>
    </Fragment>
  );
};

export default App;
