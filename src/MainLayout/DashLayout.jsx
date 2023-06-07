import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaWallet } from "react-icons/fa";

const DashLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="flex-shrink-0 w-64 bg-base-100">
        <div className="flex items-center justify-center h-14 bg-base-200">
          <span className="text-lg font-bold text-white">Dashboard</span>
        </div>
        <nav className="py-4">
          <ul>
            <li>
              <NavLink
                to="/"
                activeclassname="bg-primary bg-opacity-20"
                className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
              >
                <FaHome className="inline-block mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/alluser"
                activeclassname="bg-primary bg-opacity-20"
                className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
              >
                <FaWallet className="inline-block mr-2" /> All User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/class"
                activeclassname="bg-primary bg-opacity-20"
                className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
              >
                Classes
              </NavLink>
            </li>
            {/* make divider */}
            <div className="divider"></div>
            <li>
              <NavLink
                to="/"
                activeclassname="bg-primary bg-opacity-20"
                className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-base-200">
        {/* Navbar */}
        <nav className="flex items-center justify-between h-14 bg-base-100">
          <div className="mx-4">
            <Link to="/" className="text-lg font-bold text-white">
              My Dashboard
            </Link>
          </div>
          {/* Add your navbar content here */}
        </nav>

        {/* Page content */}
        <div className="p-4">
          {/* Add your page content here */}
          <Outlet />
        </div>
      </div>

      {/* Right Drawer */}
      {/* <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side right-0">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <div className="drawer-content bg-base-200">
          <div className="py-4">
            <ul>
              <li>
                <NavLink
                  to="/dashboard/alluser"
                  activeclassname="bg-primary bg-opacity-20"
                  className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                >
                  <FaWallet className="inline-block mr-2" /> All User
                </NavLink>
              </li>
              Add additional right drawer options here
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashLayout;
