import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  return (
    <Fragment>
      <div className="drawer lg:h-16 drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar px-0 lg:px-16">
            <label
              tabIndex="0"
              htmlFor="Dashboard-sidebar"
              className="btn btn-ghost lg:hidden btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <div className="flex-1 px-2 mx-2 text-2xl"> Autusin </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-x-2 ">
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
                  <NavLink className="rounded-lg" to="/portfolio">
                    My Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-lg" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  {user ? (
                    <button onClick={() => signOut(auth)}>
                      Sign Out <FontAwesomeIcon icon={faRightFromBracket} />{" "}
                    </button>
                  ) : (
                    <NavLink className="rounded-lg" to="/login">
                      Login
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-base-100">
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
              <NavLink className="rounded-lg" to="/portfolio">
                My Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-lg" to="/blog">
                Blog
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
