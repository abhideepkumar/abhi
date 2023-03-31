import React from "react";
import Contact from "./contact";
import logo from "C:/Users/Abhideep Kumar/Desktop/abhi/src/images/logo.png";
import { Link,To } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-start">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
          </Link>
          <div className="flex md:order-2">
            <Link
            to="/contact"
              type="button"
              className="text-white bg-blue-700 hover:ring-2 hover:outline-none hover:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Me
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 md:p-0"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 md:p-0"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 md:p-0"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
