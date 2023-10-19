/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useUserRole from "../../Hook/UseGetUserRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { role } = useUserRole();
  const navOptions = (
    <>
      <li className="text-lg">
        <Link to="/" className="hover:text-[#3c65f5]">
          Home
        </Link>
      </li>
      <li className="text-lg">
        <Link to="/about" className="hover:text-[#3c65f5]">
          About
        </Link>
      </li>
      <li className="text-lg">
        <Link to="/all-jobs" className="hover:text-[#3c65f5]">
          All Jobs
        </Link>
      </li>
      <li className="text-lg">
        <Link to="/blog" className="hover:text-[#3c65f5]">
          Blog
        </Link>
      </li>
      <li className="text-lg">
        <Link to="/contact" className="hover:text-[#3c65f5]">
          Contact
        </Link>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut()
      .then((res) => { })
      .then((data) => { });
  };
  return (
    <div className="bg-gray-300 sticky top-0 z-[999]">
      <div className="container mx-auto navbar justify-between items-center">
        <div className="navbar-start">
          <Link to="/">
            <div className="py-1 flex items-center justify-start normal-case">
              <img src={logo} className="w-8 h-8" alt="" />
              <h1 className="text-xl lg:text-3xl font-bold">JobBox</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="flex gap-5 text-lg">
          <div className="dropdown  dropdown-left  z-[9999]">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-green-600"
            >
              {navOptions}
            </ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-bottom z-[9999]  dropdown-end">
              <label tabIndex={0} className="m-1 cursor-pointer">
                <img
                  src={user?.photoURL}
                  className="w-14 h-14 rounded-full"
                  alt=""
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[99999999] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user && role == "jobSeeker" ? (
                  <>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/applied-jobs">Apply Jobs</Link>
                    </li>
                  </>
                ) : role == "admin" ? (
                  <>
                    <li>
                      <Link to="/admin-profile">Admin Profile</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/company-profile">company Profile</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </>
                )}

                <li onClick={handleLogout}>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="underline text-black hover:text-[#05264e]"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="btn btn-xs sm:btn-sm md:btn-md bg-[#3c65f5] hover:bg-[#05264e] text-white border-none"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
