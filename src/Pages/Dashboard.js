import React, { Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Fragment>
       <div class="drawer mt-16 drawer-mobile">
      <input id="Dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        
        <Outlet/>
      </div>
      <div class="drawer-side">
        <label for="Dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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