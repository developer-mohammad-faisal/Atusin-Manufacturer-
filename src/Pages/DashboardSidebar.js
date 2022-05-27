import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link} from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const DashboardSidebar = ({children}) => {

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <Fragment>
      <div className="drawer  drawer-mobile">
        <input
          id="Dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {children}
        </div>

        <div className="drawer-side">
          <label htmlFor="Dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">Add Review</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>{" "}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/addAProduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProduct">Manage Product</Link>
                </li>{" "}
                <li>
                  <Link to="/dashboard/manageAllOrders">Manage all Orders</Link>
                </li>{" "}
                <li>
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>{" "}
              </>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardSidebar;
