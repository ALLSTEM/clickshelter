import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const { user } = useSelector((state) => state.auth);

    // Check if the user is not authenticated, redirect to login
    if (!user) {
      return <Navigate to="/login" />;
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
