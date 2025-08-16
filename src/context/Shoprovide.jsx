import React, { useState } from "react";
import { ShopContext } from "./ShopContext";
import { useNavigate } from "react-router-dom";

const Shoprovide = (props) => {
  const navigate = useNavigate();

  const myLinks = {
    HOME: "/",
    LOGIN: "/login",
    appointments: "/appointments",
    ALLDOCTORS: "/all-doctors",
    ABOUT: "/about",
    CONTACT: "/contact",
  };
  const [togelNav, setTogelNav] = useState(true);
  const value = {
    myLinks,
    togelNav,
    navigate,
    setTogelNav,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default Shoprovide;
