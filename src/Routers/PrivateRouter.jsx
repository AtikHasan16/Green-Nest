import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/Context/AuthContext";
import Loading from "../Components/Loading";

const PrivateRouter = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return <Loading></Loading>;
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRouter;
