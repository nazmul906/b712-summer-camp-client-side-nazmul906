// import React, { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   const handlelogout = () => {
//     logout()
//       .then()
//       .then((error) => console.log(error));
//   };
//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <a>Item 1</a>
//             </li>
//             <li>
//               <a>Parent</a>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a>Item 3</a>
//             </li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost normal-case text-xl">
//           Foreign Language School
//         </a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <NavLink to="/" className="text-slate-950">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/instructorinfo" className="text-slate-950">
//               Instructor
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/class" className="text-slate-950">
//               Classes
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/dashboard" className="text-slate-950">
//               DashBoard
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div>{user && <h4>{user.email}</h4>}</div>
//       <div className="navbar-end">
//         {user ? (
//           <>
//             {" "}
//             <button onClick={handlelogout} className="btn">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             {" "}
//             <Link to="/login" className="btn">
//               Login
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

///

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar bg-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-white text-2xl">
          Foreign Language School
        </Link>
        {/* <h1 className="text-white text-2xl">Foreign Language School</h1> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructorinfo" className="text-white">
              Instructor
            </NavLink>
          </li>
          <li>
            <NavLink to="/class" className="text-white">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="text-white">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <h4 className="text-white mr-4">{user.email}</h4>
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
