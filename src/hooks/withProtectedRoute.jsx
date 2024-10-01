import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  // Check if user is authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Render the children if the user is authenticated
  return children;
};

export default ProtectedRoute;
