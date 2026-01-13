import React from "react";

export default function CompanyLogos() {
  return (
    <div className="max-w-[1920px]  mx-auto 2xl:mb-[160px]">
      <div className="flex flex-col items-center text-center max-w-[899px] mx-auto">
        <span className="font-semibold text-[18px] text-[#B7B9BA]">
          ALIADOS
        </span>
        <h5 className="text-2xl 2xl:text-[53px]  mt-[16px] leading-[100%]">
          Con la confianza de los líderes del sector que impulsan la innovación
          real en los astilleros.
        </h5>
      </div>

      {/* logos  */}
      <div className="grid grid-cols-3  2xl:mt-[150px] max-w-[899px] mx-auto 2xl:h-[250px]">
        <div className="border border-slate-200 flex items-center justify-center ">
          <img
            src="/img/home/c1.png"
            alt=""
            className="filter grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
        <div className="border border-slate-200 flex items-center justify-center ">
          <img
            src="/img/home/c2.png"
            alt=""
            className="filter grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
        <div className="border border-slate-200 flex items-center justify-center ">
          <img
            src="/img/home/c3.png"
            alt=""
            className="filter grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}
