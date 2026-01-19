"use client";
import React, { useState } from "react";

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

  const [disponibilidadToggle, setDisponibilidadToggle] = useState(true);
  const [colorTogle, setColorToggle] = useState(true);
  const [estilos,setEstilos]=useState(true)
  const [grosores,setGrosores]=useState(true)
  const [acabado,setAcabado]=useState(true)
  const estilosData=[
      "Natural Granulado",
  "Natural Veteado",
  "Natural Irregular",
  "Sólido",
  "Industrial",
  "Metálico",
  "Otro"

  ]
  const acabadoData=[
  "Brillante",
  "Soft",
  "Mate",
  "Levigato",
  "Texturizado",
  "Pulido"
]
const grosoresData=[
  "0.4 cm",
  "0.8 cm",
  "1.2 cm",
  "2.0 cm",
  "3.0 cm"
]

  return (
    <div>
      <header className="max-w-[1920px] mx-auto mt-[23px] md:mt-[39px] flex items-center gap-[10px]  px-[15px] md:px-8 lg:px-12 xl:px-[60px]  text-white">
        <img src="/logo.png" alt="" />
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
        <span className="text-[#B7B9BA] text-[15px] font-medium">
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
        <span className="text-[#1B2022]  font-semibold text-[15px]">
          Piedras Sinterizadas
        </span>
      </header>

      <section className="max-w-[1920px] mx-auto mt-[40px] lg:mt-[65px] px-[15px] md:px-8 lg:px-12 xl:px-[240px] ">
        <h5 className="font-medium text-2xl md:text-3xl xl:text-[53px] text-center">
          Piedras Sinterizadas
        </h5>
        <div className="mt-[25px] xl:mt-[61px] grid grid-cols-3 gap-[57px]">
          <div className="border-r-[1px] border-r-[#1B20220F]">
            <h4 className="text-[20px] font-medium">Filtrar por:</h4>
            <div className="space-y-[20px] mt-[21px] lg:max-w-[284px]">
              <div className="border-b border-[#1B20220F] pb-[20px]">
                <div className="relative border border-[#1B20220F] focus-within:border-[#1B2022]">
                  <input
                    type="text"
                    placeholder="Introduzca la búsqueda..."
                    className="w-full py-[14px] px-[14px] text-[#B7B9BA] text-[12px] font-normal outline-none"
                  />
                  <span className="absolute right-[14px] top-[15px]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7996 10.2499C11.7337 9.18822 12.3054 7.79989 12.3054 6.27778C12.3054 2.95433 9.60109 0.25 6.27769 0.25C2.9543 0.25 0.25 2.95433 0.25 6.27778C0.25 9.60122 2.9543 12.3056 6.27769 12.3056C7.79978 12.3056 9.1881 11.7339 10.2498 10.7998L13.5856 14.1357C13.6618 14.2119 13.7614 14.25 13.8609 14.25C13.9605 14.25 14.06 14.2119 14.1363 14.1364C14.2879 13.9848 14.2879 13.7382 14.1363 13.5866L10.7996 10.2499ZM1.02777 6.27778C1.02777 3.38289 3.38285 1.02778 6.27769 1.02778C9.17254 1.02778 11.5276 3.38289 11.5276 6.27778C11.5276 7.71589 10.9459 9.01944 10.0063 9.96833C9.99931 9.97456 9.98998 9.97689 9.98298 9.98389C9.97598 9.99089 9.97364 10.0002 9.96742 10.0072C9.01855 10.9468 7.71501 11.5286 6.27692 11.5286C3.38285 11.5278 1.02777 9.17267 1.02777 6.27778Z"
                        fill="#1B2022"
                        stroke="#1B2022"
                        stroke-width="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="border-b border-[#1B20220F] pb-[20px]">
                <button
                  onClick={() => setDisponibilidadToggle(!disponibilidadToggle)}
                  className="flex justify-between items-center w-full "
                >
                  <span className="text-[16px] font-medium">
                    Disponibilidad
                  </span>{" "}
                  <span>
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
                  </span>
                </button>
                {disponibilidadToggle && (
                  <ul className="mt-[18px]">
                    <li>
                      <button className="flex items-center gap-[10px]">
                        <span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.25"
                              y="0.25"
                              width="14"
                              height="14"
                              fill="white"
                              stroke="#1B2022"
                              stroke-width="0.5"
                            />
                          </svg>
                        </span>
                        <span className="text-[14px] font-normal">
                          En stock
                        </span>
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <div className="border-b border-[#1B20220F] pb-[20px]">
                <button
                  onClick={() => setColorToggle(!colorTogle)}
                  className="flex justify-between items-center w-full "
                >
                  <span className="text-[16px] font-medium">Colores</span>{" "}
                  <span>
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
                  </span>
                </button>
                {colorTogle && (
                  <ul className="mt-[18px] flex gap-[10px]">
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#6E5B4C" }}
                      >
                        {" "}
                      </button>
                    </li>{" "}
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#E7E0D8" }}
                      >
                        {" "}
                      </button>
                    </li>{" "}
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#CCCCCC" }}
                      >
                        {" "}
                      </button>
                    </li>{" "}
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#004C80" }}
                      >
                        {" "}
                      </button>
                    </li>{" "}
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#B45D5A" }}
                      >
                        {" "}
                      </button>
                    </li>{" "}
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#000000" }}
                      >
                        {" "}
                      </button>
                    </li>{" "}
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#1B202266" }}
                      >
                        {" "}
                      </button>
                    </li>{" "}
                    <li>
                      <button
                        className="w-[18px] h-[18px]"
                        style={{ backgroundColor: "#1B202266" }}
                      >
                        {" "}
                      </button>
                    </li>
                  </ul>
                )}
              </div>
               <div className="border-b border-[#1B20220F] pb-[20px]">
                <button
                  onClick={() => setEstilos(!estilos)}
                  className="flex justify-between items-center w-full "
                >
                  <span className="text-[16px] font-medium">Estilos</span>{" "}
                  <span>
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
                  </span>
                </button>
                {estilos && (
                    <ul className="mt-[18px] space-y-[12px] gap-[10px]">
                    {estilosData.map((elm,idx)=>(
                      <li key={idx}>
                        <span>{elm}</span>
                      </li>
                    ))}
                      
                    </ul>
                )}
              </div>
                <div className="border-b border-[#1B20220F] pb-[20px]">
                <button
                  onClick={() => setAcabado(!acabado)}
                  className="flex justify-between items-center w-full "
                >
                  <span className="text-[16px] font-medium">Acabado</span>{" "}
                  <span>
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
                  </span>
                </button>
                {acabado && (
                    <ul className="mt-[18px] space-y-[12px] gap-[10px]">
                    {acabadoData.map((elm,idx)=>(
                      <li key={idx}>
                        <span>{elm}</span>
                      </li>
                    ))}
                      
                    </ul>
                )}
              </div>
                <div className="border-b border-[#1B20220F] pb-[20px]">
                <button
                  onClick={() => setGrosores(!grosores)}
                  className="flex justify-between items-center w-full "
                >
                  <span className="text-[16px] font-medium">Grosores</span>{" "}
                  <span>
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
                  </span>
                </button>
                {grosores && (
                    <ul className="mt-[18px] space-y-[12px] gap-[10px]">
                    {grosoresData.map((elm,idx)=>(
                      <li key={idx}>
                        <span>{elm}</span>
                      </li>
                    ))}
                      
                    </ul>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-2 mb-[60px] md:mb-[80px] xl:mb-[130px]">
            <div className="flex justify-between">
              <p className="text-[16px] font-light">
                Mostrando <span className="font-medium">232</span> resultados
              </p>
              <div>
                Ordenar por: <span className="font-medium">Nuevo</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[29px] mt-[22px] lg:mt-[41px]">
              {data.map((elm, idx) => (
                <div>
                  <img src={elm.imgUrl} alt={elm.title} />
                  <h5 className="text-lg lg:text-[24px] font-medium mt-[10px]">
                    {elm.title}
                  </h5>
                  <span className="text-[#747474] mt-[4px]">€ {elm.price}</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}
