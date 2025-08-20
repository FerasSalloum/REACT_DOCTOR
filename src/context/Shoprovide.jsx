import React, { useState } from "react";
import { ShopContext } from "./ShopContext";
import { useNavigate } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Shoprovide = (props) => {
  const navigate = useNavigate();

  const specialitys = specialityData.slice();
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
    specialitys,
    navigate,
    setTogelNav,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default Shoprovide;
