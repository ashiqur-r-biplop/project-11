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
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(true);
  const [reloadRole, setReloadRole] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    setLoading(true);
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    setUserLoading(true);
    setReload(true);
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
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // get and set token
      if (currentUser) {
        axios
          .post("https://job-portal-server-ebon.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            setUser(currentUser);
            localStorage.setItem("USER_ACCESS_TOKEN", data.data.token);
            setLoading(false);
            setReload(false);
            setUserLoading(false);
          })
          .catch((err) => {
            setUserLoading(false);
            console.log(err);
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        console.log("logout successfully");
        localStorage.removeItem("USER_ACCESS_TOKEN");
        setUser(currentUser);
        setLoading(false);
        setUserLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, [reload, userLoading]);

  const authInfo = {
    user,
    loading,
    signUp,
    updateUserProfile,
    login,
    logOut,
    setReload,
    googleSignIn,
    reloadRole,
    setReloadRole,
    userLoading, 
    setUserLoading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
