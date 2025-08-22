import React, { useContext } from "react";
import Title from "./Title";
import CatdDoctor from "./CatdDoctor";
import { ShopContext } from "../context/ShopContext";

function AllDoctor() {
  const { alldoctor } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-center flex-col">
      <Title
        title={"Top Doctors to Book"}
        paragraph={
          "Simply browse through our extensive list of trusted doctors."
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 my-10">
        {alldoctor.slice(0, 10).map((item) => (
          <CatdDoctor
            image={item.image}
            name={item.name}
            speciality={item.speciality}
          />
        ))}
      </div>
      <button className="px-10 py-2 rounded-full bg-[#EAEFFF] cursor-pointer">more</button>
    </div>
  );
}

export default AllDoctor;
