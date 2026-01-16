import React from "react";
import Link from "next/link";

export default function GridProduct() {
  return (
    <div className="max-w-[1920px] mx-auto mb-[60px] md:mb-[90px]  2xl:mb-[135px] ">
      <div data-aos="fade-right" className="grid grid-cols-1   md:grid-cols-2">
        <div>
          <img
            src="/img/home/ps5.png"
            alt="product"
            className="2xl:w-[960px] 2xl:h-[920px]"
          />
        </div>
        <div className="flex mt-10 md:mt-0 items-center justify-center">
          <div className="px-[15] lg:px-3 group ">
            <div className="pb-[31px]  flex flex-col items-center">
              <img
                src="/img/home/ps6.png"
                alt="product"
                className="h-[250px]  lg:h-[320x] 2xl:h-[397px] 2xl:w-[432px]"
              />
              <h4 className="mt-[20px] mb-[7px] text-xl lg:text-[26px] font-medium text-center">
                Azzurro Macaubas
              </h4>
              <p className="text-[#B7B9BA]">OB413BP271206</p>
              <Link
                href="#"
                className="rounded-[70px] mt-[14px] lg:mt-[35px] text-[13px] py-[14px] px-[38px] transition-colors capitalize  bg-[#2B3032] text-[#ffff]"
              >
                Ver producto{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-grid bg-no-repeat bg-cover  bg-fixed bg-[url('/img/home/ps7.png')] h-[350px] md:h-[500px] lg:h-[650px] 2xl:h-[844px] w-full lg:pb-[90px] xl:pe-[100px] 2xl:pb-[96px] 2xl:pe-[321px] flex  justify-center items-center lg:justify-end lg:items-end ">
        <div className="flex flex-col items-center lg:items-start  lg:max-w-[421px]">
          <h3
            className="
      mb-[12px] 2xl:mb-[32px]
      text-[32px] sm:text-[42px] md:text-[56px]
      lg:text-[72px] 2xl:text-[93px]
      lg:leading-[90px] 2xl:leading-[103px]
      font-medium text-white
    "
          >
            Calacatta Grigio
          </h3>

          <Link
            href="#"
            className="
        rounded-[70px]
        border border-white
        text-[13px]
        py-[14px] px-[38px]
        transition-colors capitalize
        hover:bg-[#2B3032]
        text-white
      "
          >
            Comprar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
