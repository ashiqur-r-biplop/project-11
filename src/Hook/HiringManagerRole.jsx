import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useUserRole from "./UseGetUserRole";

const HiringManagerRole = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { role: isAdmin, loading: isAdminLoading } = useUserRole();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin == "hiringManager") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default HiringManagerRole;
