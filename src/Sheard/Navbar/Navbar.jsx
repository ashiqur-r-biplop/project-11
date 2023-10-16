import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
const Navbar = () => {
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
  return (
    <div className="navbar bg-white fixed top-0 z-[500]">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/">
          <div className="py-1 flex items-center justify-start btn btn-ghost normal-case">
            <img src={logo} className="w-8 h-8" alt="" />
            <h1 className="text-xl lg:text-3xl font-bold">JobBox</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex gap-5 text-lg">
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
      </div>
    </div>
  );
};

export default Navbar;
