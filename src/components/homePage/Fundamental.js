import Link from "next/link";
import React from "react";

export default function Fundamental() {
  return (
    <div  className="max-w-[1920px] mx-auto mb-[60px] md:mb-[90px] 2xl:mb-[140px]">
      <div  data-aos="fade-down" className="px-[15px] md:px-8 lg:px-12 2xl:px-[0] mb-[28px] md:mb-[50px]  lg:mb-[63px] 2xl:max-w-[1268px] mx-auto">
        <div className="flex items-center justify-between">
          <h5 className="text-3xl md:text-4xl lg:text-5xl   2xl:text-[77px] max-w-[768px] font-medium 2xl:leading-[95px]">
Existimos para elevar el estándar de la remodelación y construcción          </h5>
          <button className="h-[30px] aspect-square md:h-[40px] md:w-[40px] xl:h-[89px] xl:w-[89px] border-[#1B2022] rounded-full border-[0.5px] inline-flex justify-center items-center">
            <svg
              viewBox="0 0 33 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[12px] h-[12px] md:w-[16px] md:h-[18px] xl:w-[33px] xl:h-[37px]"
            >
              <path
                d="M30.7537 15.3071C30.213 15.3071 29.6724 15.0368 29.2669 14.6313C29.2669 14.6313 29.2669 14.6313 29.1317 14.4962L17.7781 4.76447C16.9671 3.9535 15.6155 3.9535 14.8045 4.76447L3.45088 14.4962C2.63991 15.172 1.28828 15.172 0.477311 14.2258C-0.1985 13.4149 -0.198499 12.0632 0.747637 11.2523L12.1013 1.52058C14.5342 -0.506858 18.0484 -0.506858 20.4813 1.52058L31.835 11.2523C31.9701 11.2523 32.1053 11.5226 32.2404 11.6577C33.0514 12.4687 33.0514 13.8203 32.2404 14.6313C31.835 15.0368 31.2943 15.172 30.7537 15.172"
                fill="#1B2022"
              />
              <path
                d="M16.4265 17.875C12.3717 17.875 9.12777 21.1189 9.12777 25.1738C9.12777 29.2286 12.3717 32.4725 16.4265 32.4725C20.4814 32.4725 23.7253 29.2286 23.7253 25.1738C23.7253 21.1189 20.4814 17.875 16.4265 17.875ZM16.4265 36.5274C10.0739 36.5274 4.93774 31.3912 4.93774 25.0386C4.93774 18.686 10.0739 13.5498 16.4265 13.5498C22.7792 13.5498 27.9153 18.686 27.9153 25.0386C27.9153 31.3912 22.7792 36.5274 16.4265 36.5274Z"
                fill="#1B2022"
              />
            </svg>
          </button>

        </div>
        <div className="mt-[40px] 2xl:mt-[60px] flex flex-col gap-y-4 2xl:flex-row  justify-between">
          <div className="max-w-[496px]">
            <span>
              <svg
                width="66"
                height="1"
                viewBox="0 0 66 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="66" y2="0.5" stroke="#1B2022" />
              </svg>
            </span>
            <h6 className="text-[16px] md:text-[20px]    2xl:text-[24px] font-medium leading-[32px] ff-satoshi mt-[30px]">
              Nuestro objetivo es mejorar nuestros estándares mediante el uso de
              tecnología y avances en constante evolución.
            </h6>
          </div>
          <div className="max-w-[694px]">
            <p className="text-[#B7B9BA] ff-satoshi leading-[29px] text-[14px] md:text-[16px] xl:text-[18px] font-[400] mb-[34px]">
             Nuestro propósito es simplificar el proceso de creación de espacios extraordinarios, ofreciendo una curaduría experta de revestimientos, piezas sanitarias y elementos de carpintería que fusionan innovación técnica con una estética de vanguardia. En OBRA, construimos el escenario de tu éxito
            </p>
            <Link
              href="#"
              className="rounded-[70px] uppercase font-medium text-xs py-[10px] px-[12px] md:text-[13px] md:py-[17px] md:px-[50px] transition-colors capitalize  bg-[#1B2022] text-[#ffff] "
            >
              Reservar una cita
            </Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="px-[15px] md:px-8 lg:px-12  2xl:px-[242px] ">
        <img src="/img/home/p8.jpg" alt="product" className="2xl:h-[755px] 2xl:w-[1439px] object-contain" />
      </div>
    </div>
  );
}
