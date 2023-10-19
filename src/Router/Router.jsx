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
import PrivateRoute from "./PrivateRoute";
import HiringManagerRole from "../Hook/HiringManagerRole";
import AdminRoute from "../Hook/AdminRole";
import AllPostedJobs from "../Component/Main/Home/AllPostedJobs";
import AppliedPersons from "../Component/Main/Home/AppliedPersons";
import MyJobs from "../Pages/Dashboard/Company/MyJob/MyJobs";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import AllJobsAdmin from "../Pages/Dashboard/Admin/AllJobs/AllJobsAdmin";

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
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },

      {
        path: "/company-profile",
        element: (
          <PrivateRoute>
            <HiringManagerRole>
              <CompanyProfile></CompanyProfile>
            </HiringManagerRole>
          </PrivateRoute>
        ),
      },

      {
        path: "/admin-profile",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminProfile></AdminProfile>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/allposted-jobs",
        element: <AllPostedJobs></AllPostedJobs>,
      },
      {
        path: "/applied-persons",
        element: <AppliedPersons></AppliedPersons>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/post-job",
        element: (
          <HiringManagerRole>
            <JobPostForm></JobPostForm>
          </HiringManagerRole>
        ),
      },
      {
        path: "/dashboard/my-jobs",
        element: (
          <HiringManagerRole>
            <MyJobs></MyJobs>
          </HiringManagerRole>
        ),
      },
      {
        path: "/dashboard/all-user",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-Jobs",
        element: (
          <AdminRoute>
            <AllJobsAdmin></AllJobsAdmin>
          </AdminRoute>
        ),
      },
    ],
  },
]);
