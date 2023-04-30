import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../../../FireBase";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserAuth = ({ children }) => {
  // --------------------------------------------------------
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  //---------------------------------------------------------
  const registerwihtemail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ----------------------------------------------------------
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // -----------------------------------------------------------
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);
  // --------------------------------------------------------------
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { logOut, loading, user, registerwihtemail, Login };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserAuth;
