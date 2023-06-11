import React, { useState, useEffect } from "react";

import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserData = (profile) => {
    // setLoading(true);
    // console.log("updateuser is called");
    // setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  // const updateUserProfile = (name, photo) => {
  //     return updateProfile(auth.currentUser, {
  //         displayName: name, photoURL: photo
  //     });
  // }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);

      // this req will asign the logged in user a jwt token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((data) => {
            // console.log("axios", data.data.jwtToken);
            const accessToken = data.data.jwtToken;
            localStorage.setItem("AccessToken", accessToken);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("AccessToken");
        setLoading(false);
      }
      // setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const logout = () => {
    setLoading(true);
    signOut(auth);
  };
  const authInfo = {
    googleSignIn,
    user,
    loading,
    signIn,
    register,
    updateUserData,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
