import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Menu from "./Menu";

const Header = () => {
  const { navigate, myLinks, setTogelNav, togelNav } = useContext(ShopContext);
  const [togelControl, setTogelControl] = useState(true);
  return (
    <>
      <Menu />
      <div className="flex mt-2 border-b border-b-blue-800 items-center justify-between pb-2 gap-2">
        {/* logo */}
        <div className="">
          <img
            src={assets.logo}
            alt=""
            className="w-40 py-2 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        {/* navpar */}
        <div
          className={` gap-6 text-sm p-2 font-bold items-center justify-center hidden sm:flex`}
        >
          <NavLink to={myLinks.HOME}>HOME</NavLink>
          <NavLink to={myLinks.ALLDOCTORS}>ALL DOCTORS</NavLink>
          <NavLink to={myLinks.ABOUT}>ABOUT</NavLink>
          <NavLink to={myLinks.CONTACT}>CONTACT</NavLink>
        </div>
        {/* control */}
        <div className="flex items-center justify-end pr-2 relative gap-2">
          <img
            src={assets.upload_area}
            alt=""
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => setTogelControl(!togelControl)}
          />
          {/* dro down */}
          <div
            hidden={togelControl}
            className="absolute top-14 right-0 flex flex-col items-center text-sm w-32 bg-white"
          >
            <p
              className="py-2 cursor-pointer"
              onClick={() => {
                navigate(myLinks.LOGIN);
              }}
            >
              login
            </p>
            <p
              className="py-2 cursor-pointer"
              onClick={() => {
                navigate(myLinks.Appointments);
              }}
            >
              My Appointments
            </p>
          </div>
          {/* navpar dropdown */}
          <img
            src={assets.menu_icon}
            alt=""
            className="block sm:hidden w-6 h-6"
            onClick={() => setTogelNav(!togelNav)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
