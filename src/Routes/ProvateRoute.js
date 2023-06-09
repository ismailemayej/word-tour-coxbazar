import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../MiddleSection/Layout/UserInfo/UserAuth/UserAuth";

const ProvateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>This is Loading</div>;
  }

  if (user && user?.uid) {
    return children;
  }
  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProvateRoute;
