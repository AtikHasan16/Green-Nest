import React, { useContext } from "react";
import { AuthContext } from "../Contexts/Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const GuestRouter = ({ children }) => {
  const location = useLocation();
  //   console.log(location);

  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!currentUser) {
    return children;
  }
  return <Navigate to={`${location.state ? location.state : "/"}`}></Navigate>;
};

export default GuestRouter;
