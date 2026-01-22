"use client";
import React, { useState } from "react";

export default function CustomizeComp() {
  const tabs = [
    "Dimensión",
    "Seleccionar piedra",
    "Diseño y patrón",
    "Rendimiento",
    "Resumen",
  ];

  const [currentTab, setCurrentTab] = useState("Dimensión");
  return (
    <div className="max-w-[1920px] px-[15px] md:px-8 md:px-12 xl:px-[15px] 2xl:px-[0] mt-[40px]">
      <div className="flex ">
        <div className="flex-1 ">
          <div className="max-w-[814px] mx-auto py-[166px] relative">
            <div className="flex items-center gap-[10px] justify-center mb-[15px]">
              <span>
                <svg
                  width="298"
                  height="8"
                  viewBox="0 0 298 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.146447 3.32842C-0.0488155 3.52369 -0.0488155 3.84027 0.146447 4.03553L3.32843 7.21751C3.52369 7.41277 3.84027 7.41277 4.03553 7.21751C4.2308 7.02225 4.2308 6.70567 4.03553 6.5104L1.20711 3.68198L4.03553 0.853549C4.2308 0.658287 4.2308 0.341705 4.03553 0.146442C3.84027 -0.0488198 3.52369 -0.0488198 3.32843 0.146442L0.146447 3.32842ZM297.854 4.03553C298.049 3.84027 298.049 3.52369 297.854 3.32842L294.672 0.146442C294.476 -0.0488198 294.16 -0.0488198 293.964 0.146442C293.769 0.341705 293.769 0.658287 293.964 0.853549L296.793 3.68198L293.964 6.5104C293.769 6.70567 293.769 7.02225 293.964 7.21751C294.16 7.41277 294.476 7.41277 294.672 7.21751L297.854 4.03553ZM0.5 3.68198V4.18198H297.5V3.68198V3.18198H0.5V3.68198Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="text-[15px] ff-satoshi font-medium">890cm</span>
              <span>
                <svg
                  width="298"
                  height="8"
                  viewBox="0 0 298 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.146447 3.32842C-0.0488155 3.52369 -0.0488155 3.84027 0.146447 4.03553L3.32843 7.21751C3.52369 7.41277 3.84027 7.41277 4.03553 7.21751C4.2308 7.02225 4.2308 6.70567 4.03553 6.5104L1.20711 3.68198L4.03553 0.853549C4.2308 0.658287 4.2308 0.341705 4.03553 0.146442C3.84027 -0.0488198 3.52369 -0.0488198 3.32843 0.146442L0.146447 3.32842ZM297.854 4.03553C298.049 3.84027 298.049 3.52369 297.854 3.32842L294.672 0.146442C294.476 -0.0488198 294.16 -0.0488198 293.964 0.146442C293.769 0.341705 293.769 0.658287 293.964 0.853549L296.793 3.68198L293.964 6.5104C293.769 6.70567 293.769 7.02225 293.964 7.21751C294.16 7.41277 294.476 7.41277 294.672 7.21751L297.854 4.03553ZM0.5 3.68198V4.18198H297.5V3.68198V3.18198H0.5V3.68198Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          
            <img src="/img/customize/1.png" alt="" className="" />
              <div className="flex items-center gap-[10px] justify-center mb-[15px] -rotate-90 absolute left-0 top-0">
              <span>
                <svg
                  width="298"
                  height="8"
                  viewBox="0 0 298 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.146447 3.32842C-0.0488155 3.52369 -0.0488155 3.84027 0.146447 4.03553L3.32843 7.21751C3.52369 7.41277 3.84027 7.41277 4.03553 7.21751C4.2308 7.02225 4.2308 6.70567 4.03553 6.5104L1.20711 3.68198L4.03553 0.853549C4.2308 0.658287 4.2308 0.341705 4.03553 0.146442C3.84027 -0.0488198 3.52369 -0.0488198 3.32843 0.146442L0.146447 3.32842ZM297.854 4.03553C298.049 3.84027 298.049 3.52369 297.854 3.32842L294.672 0.146442C294.476 -0.0488198 294.16 -0.0488198 293.964 0.146442C293.769 0.341705 293.769 0.658287 293.964 0.853549L296.793 3.68198L293.964 6.5104C293.769 6.70567 293.769 7.02225 293.964 7.21751C294.16 7.41277 294.476 7.41277 294.672 7.21751L297.854 4.03553ZM0.5 3.68198V4.18198H297.5V3.68198V3.18198H0.5V3.68198Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="text-[15px] ff-satoshi font-medium">560cm</span>
              <span>
                <svg
                  width="298"
                  height="8"
                  viewBox="0 0 298 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.146447 3.32842C-0.0488155 3.52369 -0.0488155 3.84027 0.146447 4.03553L3.32843 7.21751C3.52369 7.41277 3.84027 7.41277 4.03553 7.21751C4.2308 7.02225 4.2308 6.70567 4.03553 6.5104L1.20711 3.68198L4.03553 0.853549C4.2308 0.658287 4.2308 0.341705 4.03553 0.146442C3.84027 -0.0488198 3.52369 -0.0488198 3.32843 0.146442L0.146447 3.32842ZM297.854 4.03553C298.049 3.84027 298.049 3.52369 297.854 3.32842L294.672 0.146442C294.476 -0.0488198 294.16 -0.0488198 293.964 0.146442C293.769 0.341705 293.769 0.658287 293.964 0.853549L296.793 3.68198L293.964 6.5104C293.769 6.70567 293.769 7.02225 293.964 7.21751C294.16 7.41277 294.476 7.41277 294.672 7.21751L297.854 4.03553ZM0.5 3.68198V4.18198H297.5V3.68198V3.18198H0.5V3.68198Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className=" xl:px-[27px] ">
          <div className="flex xl:text-nowrap  gap-[35px] p-[22px] borde border-[#2B303205]">
            {tabs.map((tab, idx) => (
              <button
                onClick={() => setCurrentTab(tab)}
                key={idx}
                className={`${currentTab == tab ? "text-[#1B2022] font-medium" : "text-[#747474] font-normal"}  text-[16px] ff-satoshi`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="xl:py-[47px] xl:px-[56px]">
            <div className="relative w-full mb-[27px] max-w-[275px]">
              <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.275 0.149994H2.02502C0.975024 0.149994 0.150024 0.974994 0.150024 2.02499V13.275C0.150024 14.325 0.975024 15.15 2.02502 15.15H19.275C20.325 15.15 21.15 14.325 21.15 13.275V2.02499C21.15 0.974994 20.325 0.149994 19.275 0.149994ZM0.900024 6.14999H10.275V9.89999H0.900024V6.14999ZM11.025 6.14999H20.4V9.89999H11.025V6.14999ZM2.02502 0.899994H19.275C19.9125 0.899994 20.4 1.38749 20.4 2.02499V5.39999H0.900024V2.02499C0.900024 1.38749 1.38752 0.899994 2.02502 0.899994ZM0.900024 13.275V10.65H10.275V14.4H2.02502C1.38752 14.4 0.900024 13.9125 0.900024 13.275ZM19.275 14.4H11.025V10.65H20.4V13.275C20.4 13.9125 19.9125 14.4 19.275 14.4Z"
                    fill="#747474"
                    stroke="#747474"
                    stroke-width="0.3"
                  />
                </svg>
              </div>

              <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="#747474"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Select */}
              <select
                name="Suite de calculadoras"
                className="
      w-full
      appearance-none
      uppercase
      border border-[#0524240D]
      text-[#747474]
      font-semibold
      text-[14px]
      p-[20px]
      pl-[64px]
      pr-[56px]
      bg-[#2B303205]
      cursor-pointer
    "
              >
                <option value="" disabled selected>
                  Suite de calculadoras
                </option>
                <option value="1">Suite de calculadoras 1</option>
                <option value="2">Suite de calculadoras 2</option>
              </select>
            </div>

            <h5 className="text-xl lg:text-[28px] font-medium max-w-[383px] ">
              Introduzca las dimensiones de la pared.
            </h5>
            <div>
              <div className="mt-[17px] grid grid-cols-2 gap-[18px]">
                <label
                  htmlFor=""
                  className="flex flex-col gap-[11px] text-[16px] font-medium"
                >
                  Ancho de la pared (cm):
                  <input
                    type="text"
                    placeholder="890"
                    className="text-[#747474] text-[15px] font-medium px-[20px] py-[24px] border border-[#1B20220F]"
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col gap-[11px] text-[16px] font-medium"
                >
                  Altura de la pared (cm):
                  <input
                    type="text"
                    placeholder="890"
                    className="text-[#747474] text-[15px] font-medium px-[20px] py-[24px] border border-[#1B20220F]"
                  />
                </label>
              </div>
              <div className="mt-[21px] grid grid-cols-2 gap-[18px]">
                <label
                  htmlFor=""
                  className="flex flex-col gap-[11px] text-[16px] font-medium"
                >
                  Recuento de estilos
                  <input
                    type="text"
                    placeholder="20"
                    className="text-[#747474] text-[15px] font-medium px-[20px] py-[24px] border border-[#1B20220F]"
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col gap-[11px] text-[16px] font-medium"
                >
                  Recuento ferroviario
                  <input
                    type="text"
                    placeholder="10"
                    className="text-[#747474] text-[15px] font-medium px-[20px] py-[24px] border border-[#1B20220F]"
                  />
                </label>
              </div>
              <div className="mt-[21px] grid grid-cols-2 gap-[18px]">
                <label className="flex flex-col gap-[11px] text-[16px] font-medium">
                  Ancho del listón
                  <div className="relative">
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.85472 0L5.48668 4.54132L1.09201 0.0289256L0 1.21488L5.46005 7L11 1.2438L9.85472 0Z"
                          fill="#1B2022"
                        />
                      </svg>
                    </div>

                    <select
                      className="
          w-full
          appearance-none
          text-[#747474]
          text-[15px]
          font-medium
          px-[20px]
          py-[24px]
          pr-[56px]
          border border-[#1B20220F]
          bg-white
          cursor-pointer
        "
                    >
                      <option value="" disabled selected>
                        7cm
                      </option>
                      <option value="5">5cm</option>
                      <option value="6">6cm</option>
                      <option value="7">7cm</option>
                      <option value="8">8cm</option>
                    </select>
                  </div>
                </label>

                {/* Espesor del listón */}
                <label className="flex flex-col gap-[11px] text-[16px] font-medium">
                  Espesor del listón
                  <div className="relative">
                    {/* Arrow */}
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.85472 0L5.48668 4.54132L1.09201 0.0289256L0 1.21488L5.46005 7L11 1.2438L9.85472 0Z"
                          fill="#1B2022"
                        />
                      </svg>
                    </div>

                    <select
                      className="
          w-full
          appearance-none
          text-[#747474]
          text-[15px]
          font-medium
          px-[20px]
          py-[24px]
          pr-[56px]
          border border-[#1B20220F]
          bg-white
          cursor-pointer
        "
                    >
                      <option value="" disabled selected>
                        6mm
                      </option>
                      <option value="4">4mm</option>
                      <option value="5">5mm</option>
                      <option value="6">6mm</option>
                      <option value="8">8mm</option>
                    </select>
                  </div>
                </label>
              </div>
              <div className="mt-[21px] grid grid-cols-2 gap-[18px]">
                <label
                  htmlFor=""
                  className="flex flex-col gap-[11px] text-[16px] font-medium"
                >
                  Altura del zócalo
                  <input
                    type="text"
                    placeholder="15.4"
                    className="text-[#747474] text-[15px] font-medium px-[20px] py-[24px] border border-[#1B20220F]"
                  />
                </label>
              </div>
            </div>

            <div className="mt-[54px]">
              <div className="border border-[#1B20220F] px-[32px] pt-[16px] pb-[20px] flex justify-between items-center">
                <button className="text-[#747474] text-[16px] ff-satoshi font-normal flex items-center gap-[5px]">
                  <span>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.29873 0.838337L5.41693 -1.18361e-05L-7.12595e-06 5.14999L5.41693 10.3L6.29873 9.46164L2.39317 5.74895L11.8413 5.74895L11.8413 4.55096L2.39317 4.55096L6.29873 0.838337Z"
                        fill="#747474"
                      />
                    </svg>
                  </span>{" "}
                  Anterior
                </button>
                <button className="text-[#2B3032] text-[16px] ff-satoshi font-normal flex items-center gap-[5px]">
                  Siguiente
                  <span>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.54257 9.46165L6.42438 10.3L11.8413 5.15L6.42438 0L5.54257 0.838351L9.44814 4.55103L0 4.55103L0 5.74903L9.44814 5.74903L5.54257 9.46165Z"
                        fill="#2B3032"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center mt-[37px] px-[31px]">
                <span className="font-bold ff-satoshi">$299</span>
                <button className="text-[14px] font-medium text-[#FFFFFF] bg-[#1B2022] px-[52px] py-[17px] rounded-[70px]">
                  Aplicar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
