import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="bg-[#5F6FFF] text-white px-6 md:px-10 lg:px-20 rounded-xl my-4 flex flex-col md:flex-row items-center md:items-end justify-center  gap-2 ">
      {/* left */}
      <div className="flex flex-col items-start justify-center py-[84px] w-2/3">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Book Appointment With Trusted Doctors
        </h3>
        {/* imag box */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-10">
          <img src={assets.group_profiles} alt="" className="w-28 " />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#specialitys"
          className=" bg-white text-black px-7 py-3 rounded-full flex gap-2 hover:scale-110 transition-all ease-in-out mt-10"
        >
          Book appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* rigth */}
      <div className=" flex items-end ">
        <img src={assets.header_img} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
