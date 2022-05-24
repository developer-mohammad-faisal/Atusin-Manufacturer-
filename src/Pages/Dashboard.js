import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="drawer drawer-mobile">
        <input
          id="Dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center mt-5 font-bold text-purple-500">
            Welcome to your Dashboard
          </h2>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="Dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
