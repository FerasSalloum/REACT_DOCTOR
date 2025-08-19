import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="bg-[#5F6FFF] text-white p-10 rounded-xl mt-4 flex flex-col sm:flex-row gap-5">
      {/* left */}
      <div className="flex flex-col gap-5 items-center justify-center">
        <h3 className="text-2xl font-bold">
          Book Appointment With Trusted Doctors
        </h3>
        {/* imag box */}
        <div>
          <img src={assets.group_profiles} alt="" />
        </div>
        <p>
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <a href="">
          Book appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* rigth */}
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
