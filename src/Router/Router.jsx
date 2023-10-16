import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home/Home";
import Login from "../Pages/Main/Login/Login";
import Register from "../Pages/Main/Register/Register";
import About from "../Pages/Main/About/About";
import AllJobs from "../Pages/Main/All-Jobs/AllJobs";

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
    ],
  },
]);
