import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
      setReload(false);

      // get current user email when an user login
      // if (current && current.email) {
      //   const loggedUser = {
      //     email: current.email,
      //   };

      //   // fetch jwt route from backend
      //   // and post USER_ACCESS_TOKEN to backend
      //   // and set USER_ACCESS_TOKEN to localStorage when an user login to website
      //   // and remove USER_ACCESS_TOKEN from localStorage when user logout from website

      //   fetch("http://localhost:7070/api/createJWT", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(loggedUser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       localStorage.setItem("USER_ACCESS_TOKEN", data.token);
      //     })
      //     .catch((error) => console.log(error));
      // } else {
      //   localStorage.removeItem("USER_ACCESS_TOKEN");
      // }
    });
    return () => {
      return unsubscribe;
    };
  }, [reload]);

  const authInfo = {
    user,
    loading,
    signUp,
    updateUserProfile,
    login,
    logOut,
    setReload,
    googleSignIn,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
