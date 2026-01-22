"use client";
import React, { useState } from "react";
export default function ResumenTab() {
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
        <div className="w-[60%]">
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
        <div className="w-[40%] xl:px-[27px] ">
          <div className="flex flex-wrap xl:text-nowrap  gap-[35px] p-[22px]  border-[#2B303205]">
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
            <h5 className="text-xl lg:text-[28px] font-medium max-w-[383px] ">
              Tu resumen
            </h5>
            {/* dimension box */}
            <div className="">
              <h6 className="text-xl lg:text-[16px] pt-[20px] mb-[10px]">
                Dimensión
              </h6>

              <div className="dimension-list flex flex-wrap !gap-[15px]">
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1] pb-[10px] mb-[20px]">
                  <div className="font-medium">Ancho de la pared (cm):</div>
                  <div className="text-[#747474]">890</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Recuento de estilos</div>
                  <div className="text-[#747474]">20</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Ancho del listón</div>
                  <div className="text-[#747474]">7cm</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Altura del zócalo</div>
                  <div className="text-[#747474]">15,4</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Altura de la pared (cm):</div>
                  <div className="text-[#747474]">560</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Recuento ferroviario</div>
                  <div className="text-[#747474]">2</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Espesor del listón</div>
                  <div className="text-[#747474]">6mm</div>
                </div>
              </div>
            </div>

            {/* Seleccionar piedra box */}
            <div>
              <h6 className="text-xl lg:text-[16px] pt-[20px] mb-[10px]">
                Seleccionar piedra
              </h6>
              <div className="flex justify-between lg:text-[13px]  border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                <div className="font-medium">
                  Superficie de piedra preferida
                </div>
                <div className="text-[#747474]">Piedras Sinterizadas</div>
              </div>
            </div>

            {/* Diseño y patrón box */}
            <div>
              <h6 className="text-xl lg:text-[16px] pt-[20px] mb-[10px]">
                Seleccionar piedra
              </h6>
              <div className="flex justify-between lg:text-[13px]  border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                <div className="font-medium">
                  Superficie de piedra preferida
                </div>
                <div className="text-[#747474]">Piedras Sinterizadas</div>
              </div>
                 <div className="flex justify-between lg:text-[13px]  border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                <div className="font-medium">
                  Superficie de piedra preferida
                </div>
                <div className="text-[#747474]">Piedras Sinterizadas</div>
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
