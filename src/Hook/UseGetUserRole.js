import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const UseGetUserRole = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/user-role/${user?.email}`)
      .then((res) => setRole(res.userRole));
  }, [user]);
  return { role };
};

export default UseGetUserRole;
