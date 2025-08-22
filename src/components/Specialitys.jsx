import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const Specialitys = () => {
  const { specialitys } = useContext(ShopContext);
  return (
    <div id="specialitys">
      <Title
        title={"Find by Speciality"}
        paragraph={
          "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        }
      />
      <div className="flex flex-row items-center justify-center overflow-x-scroll scrollbar-hide gap-3 py-8">
        {specialitys.map((speciality) => (
          <div className="translatey-20 flex flex-col items-center justify-center transition-all duration-500">
            <img src={speciality.image} alt="" className="w-16 md:w-24 mb-2" />
            <span className="text-xs min-w-[100px] text-center">
              {speciality.speciality}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialitys;
