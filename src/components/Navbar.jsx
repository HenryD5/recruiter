import { useState } from "react";
import logo from "../assets/imgs/logo.jpeg";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="shadow bg-white fixed top-0 w-full z-0">
        <div className={`container mx-auto flex items-center  flex-wrap px-5 py-6 ${
                location.pathname === "/" ? "justify-between" : "justify-center"
              }`}>
          <div className={`flex items-center flex-shrink-0 text-white ${
                location.pathname === "/" ? "lg:mr-96 mr-6" : ""
              }`}>
            <img src={logo} className="w-100 h-10 mr-2" alt="Logo" /> <span className="text-black text-base">Logo</span>
          </div>
          { location.pathname === "/" ? (
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
              >
                <svg
                  className={`fill-current h-3 w-3 ${
                    isOpen ? "hidden" : "block"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                  className={`fill-current h-3 w-3 ${
                    isOpen ? "block" : "hidden"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
          ) : (<div></div>)
          }
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                isOpen ? "block" : "hidden"
              } ${
                location.pathname === "/" ? "block" : "lg:hidden"
              }`}>
              <div className="navbar-nav text-base lg:flex-grow lg:ml-64">
              <NavLink
                className={({ isActive }) => {
                  return `block mt-4 lg:inline-block lg:mt-0 lg:mx-10 text-white-200 mr-4  ${isActive ? "text-primary font-bold" : ""}`;
                }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return `block mt-4 lg:inline-block lg:mt-0 lg:mx-10 text-white-200 mr-4 ${isActive ? "active" : ""}`;
                }}
                to="/jobs"
              >
                Jobs
              </NavLink>
              </div>
              <div className="my-4 lg:my-0">
                <NavLink
                  className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white text-base"
                  to="/jobs"
                >
                  Apply Now
                </NavLink>
              </div>
            </div>
        </div>
      </nav>
    </>
  );
};
