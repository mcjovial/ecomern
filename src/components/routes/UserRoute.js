import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children, ...rest }) => {
  // const { user } = useSelector((state) => ({ ...state }));
  
  let user
  const getUser = () => {
    user = JSON.parse(localStorage.getItem('user'))
  }
  getUser()

  return user && user.token ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default UserRoute;
