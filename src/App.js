import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import Navbar from "./Shared/Navbar";
import Footer from './Shared/Footer'

const App = () => {
  return (
    <Fragment>
      <Navbar>
        <Routes>
          {PublicRoutes.map(({ path, Component }, index) => (
            <Route index={index} path={path} element={<Component />} />
          ))}
        </Routes>
        <Footer/>
      </Navbar>
    </Fragment>
  );
};

export default App;
