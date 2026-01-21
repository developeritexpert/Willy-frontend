"use client";
import React, { useState } from "react";
import ProductFilter from "./ProductFilter";

export default function ProductosUi() {
  const data = [
    {
      imgUrl: "/img/productos/1.png",
      title: "Calacatta Reale",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/2.png",
      title: "Carrara Eleganza",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/3.png",
      title: "Pietra Oscura",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/4.png",
      title: "Onice Azzurro",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/5.png",
      title: "Rosa Palazzo",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/6.png",
      title: "Grigio Etereo",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/7.png",
      title: "Calacatta Puro",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/8.png",
      title: "Panda Blanco",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/9.png",
      title: "Statuario Supremo",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/10.png",
      title: "Carrara Eleganza",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/11.png",
      title: "Pietra Oscura",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/12.png",
      title: "Onice Azzurro",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/13.png",
      title: "Rosa Palazzo",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/14.png",
      title: "Grigio Etereo",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/15.png",
      title: "Calacatta Puro",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/16.png",
      title: "Panda Blanco",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/17.png",
      title: "Calacatta Reale",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
    {
      imgUrl: "/img/productos/14.png",
      title: "Carrara Eleganza",
      price: "750",
      bg: ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#1B202266"],
    },
  ];

  const [showFilter, setShowFilter] = useState(false);
  return (
    <div>
      <header className="max-w-[1920px] mx-auto mt-[23px] md:mt-[39px] flex flex-wrap  items-center gap-[10px]  px-[15px] md:px-8 lg:px-12 xl:px-[60px]  text-white">
        <img src="/logo.png" alt="" className="w-12 md:w-auto" />
        <span>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17743 0.174753L7.25592 0.244079L11.4226 4.41076C11.723 4.71116 11.7461 5.18383 11.4919 5.51074L11.4226 5.58925L7.25592 9.75592C6.93048 10.0814 6.40286 10.0814 6.07743 9.75592C5.77702 9.45552 5.75391 8.98285 6.0081 8.65594L6.07743 8.57743L9.6542 5L6.07743 1.42257C5.77702 1.12217 5.75391 0.649496 6.0081 0.322586L6.07743 0.244079C6.37783 -0.0563247 6.85052 -0.0794346 7.17743 0.174753ZM1.34409 0.174753L1.42257 0.244079L5.58925 4.41076C5.88965 4.71116 5.91276 5.18383 5.65857 5.51074L5.58925 5.58925L1.42257 9.75592C1.09713 10.0814 0.569518 10.0814 0.244079 9.75592C-0.0563247 9.45552 -0.0794346 8.98285 0.174753 8.65594L0.244079 8.57743L3.82085 5L0.244079 1.42257C-0.0563247 1.12217 -0.0794346 0.649496 0.174753 0.322586L0.244079 0.244079C0.544483 -0.0563247 1.01718 -0.0794346 1.34409 0.174753Z"
              fill="#B7B9BA"
            />
          </svg>
        </span>
        <span className="text-[#B7B9BA] text-xs md:text-[15px] font-medium">
          Productos
        </span>
        <span>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17743 0.174753L7.25592 0.244079L11.4226 4.41076C11.723 4.71116 11.7461 5.18383 11.4919 5.51074L11.4226 5.58925L7.25592 9.75592C6.93048 10.0814 6.40286 10.0814 6.07743 9.75592C5.77702 9.45552 5.75391 8.98285 6.0081 8.65594L6.07743 8.57743L9.6542 5L6.07743 1.42257C5.77702 1.12217 5.75391 0.649496 6.0081 0.322586L6.07743 0.244079C6.37783 -0.0563247 6.85052 -0.0794346 7.17743 0.174753ZM1.34409 0.174753L1.42257 0.244079L5.58925 4.41076C5.88965 4.71116 5.91276 5.18383 5.65857 5.51074L5.58925 5.58925L1.42257 9.75592C1.09713 10.0814 0.569518 10.0814 0.244079 9.75592C-0.0563247 9.45552 -0.0794346 8.98285 0.174753 8.65594L0.244079 8.57743L3.82085 5L0.244079 1.42257C-0.0563247 1.12217 -0.0794346 0.649496 0.174753 0.322586L0.244079 0.244079C0.544483 -0.0563247 1.01718 -0.0794346 1.34409 0.174753Z"
              fill="#B7B9BA"
            />
          </svg>
        </span>
        <span className="text-[#1B2022]  font-semibold  text-xs md:text-[15px]">
          Piedras Sinterizadas
        </span>
      </header>

      <section className="max-w-[1920px] mx-auto mt-[40px] lg:mt-[65px] px-[15px] md:px-8 lg:px-12 xl:px-[180px] 2xl:px-[240px] ">
        <h5
          data-aos="fade-up"
          className="font-medium text-2xl md:text-3xl xl:text-[53px] text-center"
        >
          Piedras Sinterizadas
        </h5>
        <div
          data-aos="fade-up"
          className="mt-[25px] xl:mt-[61px] grid grid-cols-1 lg:grid-cols-3 gap-[24px] lg:gap-[57px]"
        >
          <div
            className={` border-b lg:border-b-0 lg:border-r border-[#1B20220F] pb-6 lg:pb-0`}
          >
            <button
              onClick={() => {
                if (window.innerWidth < 991) {
                  setShowFilter((prev) => !prev);
                }
              }}
              className="text-[20px] font-medium flex items-center gap-[10px] "
            >
              Filtrar por:{" "}
              <span
                className={`${showFilter ? "rotate-90" : "rotate-180"} lg:hidden`}
              >
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6576 5.66523C11.7163 5.6152 11.7495 5.54722 11.75 5.47617C11.7504 5.44091 11.7424 5.40596 11.7265 5.37345C11.7106 5.34094 11.6872 5.31156 11.6577 5.28711L6.47351 0.829041C6.44478 0.804004 6.41055 0.784125 6.37281 0.770556C6.33507 0.756987 6.29457 0.75 6.25366 0.75C6.21275 0.75 6.17225 0.756987 6.13451 0.770556C6.09677 0.784125 6.06254 0.804004 6.03381 0.829041L0.848572 5.28711C0.8181 5.31162 0.793674 5.34116 0.776747 5.37395C0.75982 5.40675 0.750739 5.44214 0.750043 5.47802C0.749348 5.5139 0.757052 5.54953 0.772698 5.58279C0.788344 5.61605 0.811612 5.64627 0.841117 5.67164C0.870622 5.69702 0.90576 5.71703 0.944442 5.73048C0.983124 5.74394 1.02456 5.75056 1.06628 5.74996C1.108 5.74936 1.14915 5.74156 1.18729 5.727C1.22543 5.71244 1.25977 5.69144 1.28828 5.66523L6.25366 1.39623L11.2179 5.66523C11.2468 5.69016 11.281 5.70994 11.3187 5.72343C11.3565 5.73693 11.3969 5.74388 11.4378 5.74388C11.4787 5.74388 11.5191 5.73693 11.5569 5.72343C11.5946 5.70994 11.6288 5.69016 11.6576 5.66523Z"
                    fill="#1B2022"
                    stroke="#1B2022"
                    stroke-width="1.5"
                  />
                </svg>
              </span>{" "}
            </button>
            <ProductFilter showFilter={showFilter} />
          </div>

          <div className="col-span-2 mb-[60px] md:mb-[80px] xl:mb-[130px]">
            <div className="flex flex-wrap gap-4 lg:gap-0 justify-between text-sm lg:text-[16px]">
              <p className=" font-light">
                Mostrando <span className="font-medium">232</span> resultados
              </p>
              <div className="flex items-center gap-[26px]">
                <p>
                  {" "}
                  Ordenar por: <span className="font-medium">Nuevo</span>{" "}
                </p>
                <span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.82525 1.38249L9.75592 1.46322L5.58924 5.74895C5.28884 6.05793 4.81617 6.0817 4.48926 5.82025L4.41075 5.74895L0.244078 1.46322C-0.0813599 1.12848 -0.0813599 0.58579 0.244078 0.251053C0.544481 -0.0579344 1.01715 -0.0817047 1.34406 0.179746L1.42257 0.251053L5 3.93002L8.57743 0.251053C8.87783 -0.0579341 9.3505 -0.0817043 9.67741 0.179747L9.75592 0.251053C10.0563 0.560041 10.0794 1.04624 9.82525 1.38249Z"
                      fill="#1B2022"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[40px] md:gap-[29px] mt-[22px] lg:mt-[41px]">
              {data.map((elm, idx) => (
                <div>
                  <img
                    src={elm.imgUrl}
                    alt={elm.title}
                    className="w-full lg:w-auto"
                  />
                  <h5 className="text-lg lg:text-[24px] font-medium mt-[10px]">
                    {elm.title}
                  </h5>
                  <span className="text-[#747474] mt-[4px] text-[16px]">
                    € {elm.price}
                  </span>
                  <div className="flex gap-[6px]">
                    {elm.bg.map((bgColor) => (
                      <button
                        className="h-[18px] w-[18px] mt-[10px] "
                        style={{ backgroundColor: bgColor }}
                      ></button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="
    mt-[40px] lg:mt-[80px]
    flex justify-center items-center
    gap-[8px] sm:gap-[10px] lg:gap-[15px]
    flex-wrap
  "
            >
              {/* Previous */}
              <button
                className="
      w-[38px] h-[38px]
      sm:w-[44px] sm:h-[44px]
      lg:w-[59px] lg:h-[59px]
      rounded-full
      flex items-center justify-center
      border border-[#1B20220F]
    "
              >
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2575 6.59808C10.5543 6.59808 9.61585 6.59808 2.94682 6.59808C2.93542 6.63135 2.92402 6.66462 2.92402 6.69789C3.08362 6.77553 3.24322 6.85316 3.40282 6.94188C5.56883 8.0842 6.75444 9.89194 7.19904 12.1987C7.22184 12.2875 7.11924 12.3984 7.07364 12.5093C6.97104 12.4427 6.81144 12.3873 6.77724 12.2875C6.59484 11.7662 6.50364 11.2117 6.28703 10.7126C5.30663 8.428 3.56242 7.07497 1.043 6.66462C0.883405 6.64244 0.769405 6.43172 0.609804 6.29864C1.49901 6.01029 2.28561 5.84393 2.98102 5.52231C5.01023 4.57962 6.18443 2.96042 6.66324 0.842144C6.72024 0.575973 6.68604 0.165628 7.21044 0.343075C6.80004 2.96042 5.86523 4.21364 2.84422 6.14337C3.16342 6.14337 3.38002 6.14337 3.59662 6.14337C9.87805 6.14337 10.4403 6.14337 16.7331 6.15446C16.9725 6.15446 17.3601 6.01028 17.2575 6.59808Z" fill="#1B2022" stroke="#1B2022" stroke-width="0.6"/>
</svg>

              </button>

              {/* Page 1 (active) */}
              <button
                className="
      w-[38px] h-[38px]
      sm:w-[44px] sm:h-[44px]
      lg:w-[59px] lg:h-[59px]
      bg-[#1B20220F]
      rounded-full
      flex items-center justify-center
      border border-[#1B20220F]
      text-[14px] sm:text-[16px] lg:text-[18px]
    "
              >
                1
              </button>

              {/* Page 2 */}
              <button
                className="
      hidden sm:flex
      w-[38px] h-[38px]
      sm:w-[44px] sm:h-[44px]
      lg:w-[59px] lg:h-[59px]
      text-[#747474]
      bg-white
      rounded-full
      items-center justify-center
      border border-[#1B20220F]
      text-[14px] sm:text-[16px] lg:text-[18px]
    "
              >
                2
              </button>

              {/* Page 3 */}
              <button
                className="
      hidden sm:flex
      w-[38px] h-[38px]
      sm:w-[44px] sm:h-[44px]
      lg:w-[59px] lg:h-[59px]
      text-[#747474]
      bg-white
      rounded-full
      items-center justify-center
      border border-[#1B20220F]
      text-[14px] sm:text-[16px] lg:text-[18px]
    "
              >
                3
              </button>

              {/* Next */}
              <button
                className="
      w-[38px] h-[38px]
      sm:w-[44px] sm:h-[44px]
      lg:w-[59px] lg:h-[59px]
      text-white
      bg-[#1B2022]
      rounded-full
      flex items-center justify-center
      border border-[#1B20220F]
    "
              >
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.316729 6.35969C7.01997 6.35969 7.95837 6.35969 14.6274 6.35969C14.6388 6.32642 14.6502 6.29314 14.6502 6.25987C14.4906 6.18224 14.331 6.10461 14.1714 6.01588C12.0054 4.87357 10.8198 3.06583 10.3752 0.759018C10.3524 0.670295 10.455 0.559391 10.5006 0.448486C10.6032 0.515029 10.7628 0.570481 10.797 0.670295C10.9794 1.19155 11.0706 1.74607 11.2872 2.24514C12.2676 4.52977 14.0118 5.8828 16.5312 6.29314C16.6908 6.31532 16.8048 6.52604 16.9644 6.65913C16.0752 6.94748 15.2886 7.11384 14.5932 7.43546C12.564 8.37815 11.3898 9.99735 10.911 12.1156C10.854 12.3818 10.8882 12.7921 10.3638 12.6147C10.7742 9.99735 11.709 8.74413 14.73 6.81439C14.4108 6.81439 14.1942 6.81439 13.9776 6.81439C7.69617 6.81439 7.13396 6.81439 0.84113 6.8033C0.601728 6.8033 0.214129 6.94748 0.316729 6.35969Z" fill="white" stroke="white" stroke-width="0.6"/>
</svg>

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
