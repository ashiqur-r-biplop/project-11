"use client";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const useUserRole = () => {
  const { axiosSecure } = useAxiosSecure();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/user-role/${user?.email}`)
        .then((res) => {
          setRole(res.data.role);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
    // }
  }, [axiosSecure, user]);
  return { role, loading };
};

export default useUserRole;
