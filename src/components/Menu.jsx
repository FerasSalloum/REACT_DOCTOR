import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { togelNav, setTogelNav, myLinks } = useContext(ShopContext);
  return (
    <div
      className={` w-full h-full absolute top-0 left-0 bg-white z-50 flex flex-col ${
        togelNav ? "hidden" : ""
      }`}
    >
      {/* hider */}
      <div className="flex items-center justify-between p-4 mb-10">
        <img src={assets.logo} alt="" className="w-40 " />
        <img
          src={assets.cross_icon}
          alt=""
          className="w-8 h-8"
          onClick={() => setTogelNav(!togelNav)}
        />
      </div>
      {/* menu */}
      <div className=" menu flex flex-col items-center justify-center gap-6 text-xl">
        <NavLink
          to={myLinks.HOME}
          className="w-auto font-bold text-center px-4 py-2 rounded"
        >
          HOME
        </NavLink>
        <NavLink
          to={myLinks.ALLDOCTORS}
          className="w-auto font-bold text-center px-4 py-2 rounded"
        >
          ALL DOCTORS
        </NavLink>
        <NavLink
          to={myLinks.ABOUT}
          className="w-auto font-bold text-center px-4 py-2 rounded"
        >
          ABOUT
        </NavLink>
        <NavLink
          to={myLinks.CONTACT}
          className="w-auto font-bold text-center px-4 py-2 rounded"
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
