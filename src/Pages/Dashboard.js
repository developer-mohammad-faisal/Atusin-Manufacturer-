import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <Fragment>
      <div className="drawer drawer-mobile">
        <input
          id="Dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
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
            </li>{" "}
            <li>
              <Link to="/dashboard/addAProduct">Add a Product</Link>
            </li>
            <li>
              <Link to="/dashboard/manageAllOrders">Manage all Orders</Link>
            </li>{" "}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
