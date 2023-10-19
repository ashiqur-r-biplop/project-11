import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home/Home";
import Login from "../Pages/Main/Login/Login";
import Register from "../Pages/Main/Register/Register";
import About from "../Pages/Main/About/About";
import AllJobs from "../Pages/Main/All-Jobs/AllJobs";
import Contact from "../Pages/Main/Contact/Contact";
import Blog from "../Pages/Main/Blog/Blog";
import Profile from "../Pages/Main/Profile/Profile";
import CompanyProfile from "../Pages/Dashboard/Company/CompanyProifle/CompanyProfile";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import AppliedJobs from "../Pages/Main/AppliedJobs/AppliedJobs";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UpdateProfile from "../Pages/Main/UpdateProfile/UpdateProfile";
import DashboardHome from "../Component/DashBoard/DashboardHome/DashboardHome";
import JobPostForm from "../Pages/Dashboard/Company/JobPostForm/JobPostForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <>Error Page</>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },

      {
        path: "/company-profile",
        element: <CompanyProfile></CompanyProfile>,
      },

      {
        path: "/admin-profile",
        element: <AdminProfile></AdminProfile>,
      },

      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/post-job",
        element: <JobPostForm></JobPostForm>,
      },
    ],
  },
]);
