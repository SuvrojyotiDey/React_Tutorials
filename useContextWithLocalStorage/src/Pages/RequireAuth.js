import React, { useContext } from "react";
import { Navigate } from "react-router";
import { userContext } from "../App";

const RequireAuth = ({ children }) => {
  const { isUserLoggedIn } = useContext(userContext);
  if (!isUserLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
