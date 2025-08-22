import React from "react";

function CatdDoctor({ image, name, speciality }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-between rounded-xl overflow-hidden border border-[#C9D8FF] translatey-10 transition-all duration-500 cursor-pointer">
      {/* image */}
      <div className="bg-[#EAEFFF]">
        <img src={image} alt="" />
      </div>
      {/* text */}
      <div className="pb-4">
        <span className="text-green-500 ">
          <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-1"></span>
          Available
        </span>
        <h3 className="font-bold">{name}</h3>
        <p className="">{speciality}</p>
      </div>
    </div>
  );
}

export default CatdDoctor;
