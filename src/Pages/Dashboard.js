import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <Fragment>
      <DashboardSidebar>
        <Outlet />
      </DashboardSidebar>
    </Fragment>
  );
};

export default Dashboard;
