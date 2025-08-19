import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-xs mt-5">
      {/* footer */}
      <div className="flex flex-col md:flex-row gap-16 mb-4 items-start justify-between">
        {/* left */}
        <div className="w-1/2">
          <img src={assets.logo} alt="" className="w-36 mb-2" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* igth */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* company */}
          <div className="flex flex-col gap-1">
            <h5 className="font-bold mb-2">COMPANY</h5>
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
          </div>
          {/* get in touch */}
          <div  className="flex flex-col gap-1">
            <h4 className="font-bold mb-2">GET IN TOUCH</h4>
            <p>+0-000-000-000</p>
            <p>greatstackdev@gmail.com</p>
          </div>
        </div>
      </div>
      {/* cope raigth */}
      <div className=" pt-2 pb-4 w-full text-center text-xs border-t-gray-400 border-t">
        <p className="">Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
