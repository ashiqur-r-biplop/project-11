/* eslint-disable no-unused-vars */
// import React from 'react';

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";

const Register = () => {
  const { signUp, updateUserProfile, googleSignIn, setReload } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;
    if (password.length < 6 && confirmPassword.length < 6) {
      setError("Password is less then 6 characters");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase in your password.");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("please add at least a special charecter in your password.");
      return;
    } else if (password !== confirmPassword) {
      setError("Password is not match. Try again.");
      return;
    }
    // const from = location.state?.from?.pathname || '/';
    signUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const newUser = { name, email, image: photo, uerRole: "jobSeeker" };
        updateUserProfile(name, photo)
          .then((res) => {
            axios
              .post("https://job-portal-server-ebon.vercel.app/user", newUser)
              .then((res) => {
                console.log(res, 52);
              })
              .catch((err) => {
                console.log("Error from Register", err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Wow!",
          text: "Register Successfully",
        });
        setReload(true);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    setError("");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Wow!",
          text: "Register Successfully",
        });
        setReload(true);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <h1 className="text-5xl font-bold mb-8 text-center text-sky-500 mt-10 md:mt-20">
            Register now!
          </h1>
          <div className="hero-content flex-col lg:gap-16 lg:flex-row ">
            <div className="text-center lg:text-left">
              <img
                className="md:h-[660px]"
                src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&uid=R76180397&ga=GA1.1.110381157.1659454590&semt=ais"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  ">
              <form onSubmit={handleRegister} className="p-4 ">
                <p className="text-lg">Your Name:</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered border-sky-500 input-info w-full max-w-xs mb-2"
                  required
                />
                <p className="text-lg">Photo URL:</p>
                <input
                  type="url"
                  placeholder="Image URL"
                  name="photo"
                  className="input input-bordered border-sky-500 input-info w-full max-w-xs mb-2"
                  required
                />
                <p className="text-lg">Your Email:</p>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  className="input input-bordered border-sky-500 input-info w-full max-w-xs mb-2"
                  required
                />
                <p className="text-lg">Password:</p>
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  className="input input-bordered border-sky-500 input-info w-full max-w-xs mb-2"
                  required
                />
                <p className="text-lg mt-1">Confirm Password:</p>
                <input
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                  name="confirmpassword"
                  className="input input-bordered border-sky-500 input-info w-full max-w-xs mb-4"
                  required
                />
                <p onClick={() => setShow(!show)}>
                  {show ? (
                    <Link className="border rounded p-1">Hide</Link>
                  ) : (
                    <Link className="border rounded p-1">Show</Link>
                  )}
                </p>
                <p className="text-red-500">{error}</p>
                <input
                  className="bg-sky-500 hover:bg-sky-800 px-12 py-3 rounded font-bold text-white btn btn-block max-w-xs mt-2"
                  type="submit"
                  name="login"
                  value="Register"
                  id=""
                />
                <br />
                <p>
                  If you already sign out!!! go{" "}
                  <Link
                    to="/login"
                    className="btn btn-active btn-link pl-0 lowercase text-lg "
                  >
                    Login...
                  </Link>
                </p>
                <p className="font-bold mb-2 mt-2">Else register with_</p>
                <div className="text-center">
                  <button
                    onClick={handleGoogle}
                    className="btn btn-circle btn-outline hover:bg-gray-300"
                  >
                    <span className="text-3xl font-bold text-blue-700">G</span>
                  </button>
                  <p>Google</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
