import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <Fragment>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar fixed top-0 z-50 bg-base-100 px-0 lg:px-16">
            <label
              tabindex="0"
              for="Dashboard-sidebar"
              class="btn btn-ghost lg:hidden btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <div class="flex-1 px-2 mx-2 text-2xl"> Setup Project </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal gap-x-2 ">
                <li>
                  <NavLink className="rounded-lg" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-lg" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink className="rounded-lg" to="/services">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-lg" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-lg" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-lg" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-56 bg-base-100">
            <li>
              <NavLink className="rounded-lg" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-lg" to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink className="rounded-lg" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-lg" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-lg" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-lg" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
