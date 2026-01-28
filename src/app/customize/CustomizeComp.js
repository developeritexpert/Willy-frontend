"use client";
import React, { useState } from "react";
import Dimensión from "./tabsCompo/Dimensión";
import SeleccionarPiedra from "./tabsCompo/SeleccionarPiedra";
import DiseñoPatrón from "./tabsCompo/DiseñoPatrón";
import Rendimiento from "./tabsCompo/Rendimiento";
import Resumen from "./tabsCompo/Resumen";

export default function CustomizeComp() {
  const [activeNav, setActiveNav] = useState(null);

  const tabs = [
    "Dimensión",
    "Seleccionar piedra",
    "Diseño y patrón",
    "Rendimiento",
    "Resumen",
  ];

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      setCurrentTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(tabs[currentIndex - 1]);
    }
  };

  const [currentTab, setCurrentTab] = useState("Dimensión");
  return (
    <div className="max-w-[1920px] mx-auto px-[15px] md:px-8 md:px-12 xl:px-[15px] 2xl:px-[0] border-t  border-[#052424]/10 ">
      <div className="xl:min-h-[940px] flex justify-center xl:justify-center flex-wrap xl:flex-nowrap">
        <div className="xl:flex-1 border-r border-[#052424]/10 relative">
        {currentTab == "Resumen" && (
          <div className="flex justify-center lg:justify-end m-[25px] xl:absolute right-0  ">
            <button className="border border-[#1B20221A] px-[10px] md:px-[23px] py-[16px] flex items-center uppercase  gap-[4px] text-xs md:text-[14px] font-semibold">Resumen De Exportaciones <span><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.2917V11.375C0 11.8063 0.170288 12.2193 0.473174 12.524C0.776057 12.8287 1.18663 13 1.61538 13H12.3846C12.8134 13 13.2239 12.8287 13.5268 12.524C13.8297 12.2193 14 11.8063 14 11.375V10.2917C14 9.99239 13.759 9.75 13.4615 9.75C13.164 9.75 12.9231 9.99239 12.9231 10.2917V11.375C12.9231 11.5185 12.8665 11.6567 12.7656 11.7582C12.6646 11.8598 12.5273 11.9167 12.3846 11.9167H1.61539C1.4727 11.9167 1.33539 11.8598 1.23444 11.7582C1.13347 11.6567 1.07694 11.5185 1.07694 11.375V10.2917C1.07694 9.99239 0.835982 9.75 0.538475 9.75C0.240969 9.75 0 9.99239 0 10.2917ZM6.46154 7.90088L4.68866 6.11676C4.47866 5.9055 4.13675 5.9055 3.92674 6.11676C3.71673 6.32802 3.71673 6.67196 3.92674 6.88322L6.61904 9.59156C6.82905 9.80281 7.17096 9.80281 7.38097 9.59156L10.0733 6.88322C10.2833 6.67196 10.2833 6.32802 10.0733 6.11676C9.86327 5.9055 9.52136 5.9055 9.31135 6.11676L7.53848 7.90088V0.541667C7.53848 0.242389 7.29752 0 7.00002 0C6.70251 0 6.46156 0.242389 6.46156 0.541667L6.46154 7.90088Z" fill="#1B2022"/>
</svg>
</span></button>
          </div>
        )}
          {currentTab == "Dimensión" && (
            <div className="max-w-[814px] mx-auto py-[40px] md:py-[80px] xl:py-[166px] relative">
              <div className="flex items-center gap-[10px] justify-center mb-[15px]">
                <span>
                  <svg
                    className="w-[110px] md:w-[250px] lg:w-auto"
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
                <span className="text-[11px] md:text-[15px] ff-satoshi font-medium">
                  890cm
                </span>
                <span>
                  <svg
                    className="w-[110px] md:w-[250px] lg:w-auto"
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

              <img src="/img/customize/1.png" alt="" className="w-full" />
              <div className="flex items-center gap-[10px] justify-center flex-col gap-[22px] md:gap-[24px] absolute -left-[5%] md:left-[1%] lg:left-[2%] top-[20%] md:top-[20%] lg:top-[16%] xl:top-[24%]">
                <span>
                  <svg
                    className="h-[55px] md:h-[130px] lg:h-auto"
                    width="8"
                    height="167"
                    viewBox="0 0 8 167"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.03553 0.146447C3.84027 -0.0488156 3.52369 -0.0488155 3.32842 0.146447L0.146443 3.32843C-0.0488196 3.52369 -0.0488196 3.84027 0.146443 4.03553C0.341705 4.2308 0.658287 4.2308 0.853549 4.03553L3.68198 1.20711L6.5104 4.03553C6.70567 4.2308 7.02225 4.2308 7.21751 4.03553C7.41277 3.84027 7.41277 3.52369 7.21751 3.32843L4.03553 0.146447ZM3.32843 166.854C3.52369 167.049 3.84027 167.049 4.03554 166.854L7.21752 163.672C7.41278 163.476 7.41278 163.16 7.21752 162.964C7.02226 162.769 6.70567 162.769 6.51041 162.964L3.68198 165.793L0.853556 162.964C0.658294 162.769 0.341712 162.769 0.14645 162.964C-0.0488127 163.16 -0.0488127 163.476 0.14645 163.672L3.32843 166.854ZM3.68198 0.5L3.18198 0.5L3.18198 166.5L3.68198 166.5L4.18198 166.5L4.18198 0.5L3.68198 0.5Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span className="text-[12px] md:text-[15px] ff-satoshi font-medium rotate-[270deg]">
                  560cm
                </span>
                <span>
                  <svg
                    className="h-[55px] md:h-[130px] lg:h-auto"
                    width="8"
                    height="167"
                    viewBox="0 0 8 167"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.03553 0.146447C3.84027 -0.0488156 3.52369 -0.0488155 3.32842 0.146447L0.146443 3.32843C-0.0488196 3.52369 -0.0488196 3.84027 0.146443 4.03553C0.341705 4.2308 0.658287 4.2308 0.853549 4.03553L3.68198 1.20711L6.5104 4.03553C6.70567 4.2308 7.02225 4.2308 7.21751 4.03553C7.41277 3.84027 7.41277 3.52369 7.21751 3.32843L4.03553 0.146447ZM3.32843 166.854C3.52369 167.049 3.84027 167.049 4.03554 166.854L7.21752 163.672C7.41278 163.476 7.41278 163.16 7.21752 162.964C7.02226 162.769 6.70567 162.769 6.51041 162.964L3.68198 165.793L0.853556 162.964C0.658294 162.769 0.341712 162.769 0.14645 162.964C-0.0488127 163.16 -0.0488127 163.476 0.14645 163.672L3.32843 166.854ZM3.68198 0.5L3.18198 0.5L3.18198 166.5L3.68198 166.5L4.18198 166.5L4.18198 0.5L3.68198 0.5Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>
          )}

          {currentTab == "Seleccionar piedra" && (
            <div className="max-w-[814px] mx-auto py-[40px] md:py-[80px] xl:py-[166px] relative">
              <img src="/img/customize/1.png" alt="" className="w-full" />
            </div>
          )}

          {["Diseño y patrón", "Rendimiento", "Resumen"].includes(
            currentTab,
          ) && (
            <div className="max-w-[814px] mx-auto py-[40px] md:py-[80px] xl:py-[166px] relative">
              <img src="/img/customize/2.png" alt="" className="w-full" />
            </div>
          )}
        </div>
        <div className=" w-full xl:max-w-[660px]  relative  ">
          <div
            className="space-x-5  md:space-x-10 lg:space-x-0 lg:flex justify-center lg:justify-start gap-[35px] p-4 xl:p-[22px]
                border border-[#052424]/10
                overflow-x-auto whitespace-nowrap
                scrollbar-hide"
          >
            {" "}
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
          <div className="xl:h-[600px] overflow-y-auto custom-scrollbar">
            {currentTab == "Dimensión" && <Dimensión />}
            {currentTab == "Seleccionar piedra" && <SeleccionarPiedra />}
            {currentTab == "Diseño y patrón" && <DiseñoPatrón />}
            {currentTab == "Rendimiento" && <Rendimiento />}
            {currentTab == "Resumen" && <Resumen />}
          </div>

          <div className=" xl:absolute inset-x-0 bottom-0 bg-white text-[#1B2022] ">
            <div className="border border-[#1B20220F] px-[31px] pt-[16px] pb-[20px] flex justify-between items-center">
              <button
                onClick={() => {
                  handlePrevTab();
                  setActiveNav("prev");
                }}
                className={`text-[16px] ff-satoshi font-normal flex items-baseline gap-[5px]
    ${activeNav === "prev" ? "text-[#2B3032]" : "text-[#747474]"}`}
              >
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
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Anterior
              </button>

              {currentTab != "Resumen" && (
                <button
                  onClick={() => {
                    handleNextTab();
                    setActiveNav("next");
                  }}
                  className={`text-[16px] ff-satoshi font-normal flex items-baseline gap-[5px]
    ${activeNav === "next" ? "text-[#2B3032]" : "text-[#747474]"}`}
                >
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
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <div className="flex justify-between items-center my-[37px] px-[31px]">
              <span className="font-bold ff-satoshi">$299</span>
              <button className="text-[14px] font-medium text-[#FFFFFF] bg-[#1B2022] px-[52px] py-[17px] rounded-[70px]">
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
