import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="drawer mt-16 drawer-mobile">
        <input
          id="Dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="Dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="/dashboard">My Order</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addReview">Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
