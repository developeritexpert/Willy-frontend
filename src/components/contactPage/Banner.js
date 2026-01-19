"use cleint";
import React from "react";

export default function Banner({ img, title, desc }) {
  return (
    <div
    data-aos="fade-up"
      style={{ backgroundImage: `url(${img})` }}
      className={`max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 flex justify-center items-center 2xl:block  2xl:px-[240px] 2xl:pt-[254px] 2xl:pb-[153px] h-[450px] md:h-[450px] lg:h-[550px]  2xl:min-h-[660px]  2xl:bg-center bg-cover  bg-[position:25%_0%]`}
    >
      <div className="2xl:max-w-[750px] text-[#FFFFFF] text-center 2xl:text-start">
        <h4 className="  text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] 2xl:text-[82px] font-medium leading-[40px] md:leading-[70px] lg:leading-[90px]">
          {title}
        </h4>
        <p className="text-[22px] font-normal leading-[30px] mt-[13px] ff-satoshi  2xl:max-w-[452px] ">
          {desc}
        </p>
      </div>
    </div>
  );
}
