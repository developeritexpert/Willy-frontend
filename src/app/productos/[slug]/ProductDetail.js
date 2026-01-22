"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
export default function ProductDetail() {
  const [colorsVal, setColorVal] = useState("#CCCCCC");

  const colors = ["#CCCCCC", "#E7E0D8", "#6E5B4C", "#FFFFFF"];
const sizes = ["30x40 cm", "50x70 cm", "70x100 cm"];
  const [sizeVal, setSizeVal] = useState(null);

  const similarPorduct = [
    {
      img: "/img/productos/2.png",
      title: "Carrara Eleganza",
      subTitle: "Soft",
    },
    {
      img: "/img/productos/3.png",
      title: "Pietra Oscura",
      subTitle: "Brillante",
    },
    {
      img: "/img/productos/4.png",
      title: "Onice Azzurro",
      subTitle: "Brillante",
    },
    {
      img: "/img/productos/5.png",
      title: "Rosa Palazzi",
      subTitle: "Brillante",
    },
  ];
  return (
    <div>
      <header className="max-w-[1920px] mx-auto mt-[23px] md:mt-[39px] flex   items-center md:gap-[10px]  px-[15px] md:px-8 lg:px-12 xl:px-[60px]  text-white">
        <img src="/logo.png" alt="" className="w-12 md:w-auto" />
        <div className="flex flex-wrap  items-center gap-[5px] sm:gap-[10px]">
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
          <span className="text-[#B7B9BA] text-xs md:text-[15px] font-medium">
            Piedras Sinterizadas
          </span>{" "}
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
            Calacatta Reale
          </span>
        </div>
      </header>

      <section className="max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[240px] mt-[138px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] xl:gap-[51px]">
          <div className="gallery">
            <div>
              <img src={`/img/product/inner1.png`} alt="product" className="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[17px]">
              <img src={`/img/product/inner2.png`} alt="product" className="" />
              <img src={`/img/product/inner3.png`} alt="product" className="" />

              <img src={`/img/product/inner4.png`} alt="product" className="" />

              <img src={`/img/product/inner5.png`} alt="product" className="" />
            </div>
          </div>

          <div className="details">
            <div className="mb-[15px] pb-[25px] border-b border-[#1B20220A]">
              <h4 className="font-medium text-2xl md:text-3xl lg:text-[35px] xl:text-[42px]">
                Calacatta Reale
              </h4>
              <p className="text-[#747474] text-[20px] font-semibold mt-[5px] mb-[15px]">
                €750
              </p>
              <h6 className="font-medium text-[18px] mb-[7px]">Descripción:</h6>
              <p className="text-[16px] text-[#2B3032] font-normal leading-[24px]">
                Calacatta Reale presenta una base blanquecina con vetas doradas,
                creando un patrón equilibrado y orgánico. Su refinado contraste
                añade carácter y sofisticación, lo que lo hace ideal para
                espacios que combinan la elegancia clásica con un toque
                contemporáneo.
              </p>
            </div>
            <div>
              <p className="text-[#1B2022] font-medium text-[18px] mb-[15px] pb-[17px] border-b border-[#1B20220A]">
                Disponibilidad:{" "}
                <span className="text-[#80807E]">En stock</span>{" "}
              </p>
              <div className="text-[18px] font-medium">
                Colores disponibles:
                <ul className="mt-[18px] flex gap-[10px]">
                  {colors.map((color, index) => (
                    <li key={index} onClick={() => setColorVal(color)}>
                      <button
                        className={`w-[18px] h-[18px] ${colorsVal == color && "flex justify-center items-center border border-[#1B2022]"}`}
                        style={{ backgroundColor: colorsVal != color && color }}
                      >
                        {colorsVal == color && (
                          <span
                            className="w-[12px] h-[12px] bg-[#1B2022] block"
                            style={{ backgroundColor: color }}
                          ></span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-[18px] font-medium mt-[24px]">
                Tamaños disponibles:
                <ul className="mt-[18px] flex gap-[10px]">
                  {sizes.map((size, index) => (
                    <li key={index} onClick={() => setSizeVal(size)}>
                      <button
                        className={`min-w-[40px] h-[32px] px-[10px] text-[14px] font-medium border 
            ${
              sizeVal === size
                ? "border-[#1B2022] bg-[#1B2022] text-white"
                : "border-[#CCCCCC] text-[#1B2022]"
            }`}
                      >
                        {size}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-dashed border-[#1B20220F] py-[25px] px-[10px] md:px-[28px] mt-[10px] md:mt-[26px]">
              <div>
                <h5 className="text-[18px] font-medium mb-[11px]">
                  Área a cubrir
                </h5>

                <div className="flex flex-wrap gap-[13px]">
                  <div className="flex flex-col gap-[10px]">
                    <label className="text-[14px] font-normal">Longitud</label>
                    <input
                      type="number"
                      placeholder="20"
                      className="w-[80] h-[40px] border border-[#1B20220F] px-[15px] py-[11px] text-[14px] outline-none focus:border-[#1B2022]"
                    />
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[14px] font-normal">Ancho</label>
                    <input
                      type="number"
                      placeholder="15"
                      className="w-[80] h-[40px] border border-[#1B20220F] px-[15px] py-[11px] text-[14px] outline-none focus:border-[#1B2022]"
                    />
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[14px] font-normal opacity-0">
                      Unidad
                    </label>
                    <select className="w-[105px] h-[40px] border border-[#1B20220F] px-3 text-[14px] outline-none focus:border-[#1B2022]">
                      <option>metros</option>
                      <option>cm</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* <div className="border-t border-dashed border-[#1B20220F] my-[10px] md:my-[24px] pt-[14px]" />

              <div>
                <h5 className="text-[18px] font-medium mb-[10px]">
                  Tamaño del hueco
                </h5>

                <div className="flex gap-[13px]">
                  <input
                    type="number"
                    placeholder="0.25"
                    className="w-[80px] h-[40px] border border-[#1B20220F] px-3 text-[14px] outline-none focus:border-[#1B2022]"
                  />

                  <select className="w-[105px] h-[40px] border border-[#1B20220F] px-3 text-[14px] outline-none focus:border-[#1B2022]">
                    <option>cm</option>
                    <option>mm</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-dashed border-[#1B20220F] pt-[14px] mt-[20px]" />

              <div>
                <h5 className="text-[18px] font-medium mb-[10px]">
                  Tamaño de la caja
                </h5>

                <div className="flex items-center gap-[15px]">
                  <input
                    type="number"
                    placeholder="12"
                    className="w-[80px] h-[40px] border border-[#1B20220F] px-3 text-[14px] outline-none focus:border-[#1B2022]"
                  />
                  <span className="text-[14px] text-[#747474] font-normal">
                    Azulejos por caja
                  </span>
                </div>
              </div> */}

              <button className="mt-[28px] w-full xl:w-auto block ff-satoshi bg-[#1B2022] text-white uppercase px-[34px] py-[13px] rounded-full text-[12px] font-medium">
                Calculadora
              </button>
            </div>

            <div className="mt-[21px] border-b border-dotted border-[#1B202203] pb-[28px] flex justify-center md:justify-start flex-wrap  gap-[20px] lg:gap-[35px] xl:gap-[60px] text-center">
              <div>
                <h6 className="text-[16px] font-medium">
                  Azulejos necesarios:
                </h6>
                <p className="font-normal text-[#80807E] text-[14px]">
                  19,992 Piezas
                </p>
              </div>
              <div>
                <h6 className="text-[16px] font-medium">Cajas necesarias:</h6>
                <p className="font-normal text-[#80807E] text-[14px]">
                  1,666 Cajas
                </p>
              </div>
              <div>
                <h6 className="text-[16px] font-medium">Superficie total:</h6>
                <p className="font-normal text-[#80807E] text-[14px]">
                  {" "}
                  300 metro cuadrado
                </p>
              </div>
            </div>
            <div className="mt-[21px] flex justify-between md:block gap-[10px] ">
              <h6 className="text-[18px] font-normal mb-[9px]">Cantidad:</h6>

              <div className="flex items-center md:gap-[10px] text-[#80807E]">
                <button className="" aria-label="Decrease quantity">
                  <svg
                    width="8"
                    height="2"
                    viewBox="0 0 8 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.5V0H8V1.5H0Z" fill="#80807E" />
                  </svg>
                </button>

                <input
                  type="number"
                  value={12}
                  readOnly
                  className="w-[90px] h-[36px] text-center border border-[#1B20220A] outline-none text-[14px] font-normal"
                />

                <button className="" aria-label="Increase quantity">
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16822 2.88V4.144H4.25622V7.008H2.91222V4.144H0.000222683V2.88H2.91222V3.8147e-06H4.25622V2.88H7.16822Z"
                      fill="#80807E"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-[31px] mb-[26px] flex flex-wrap gap-[10px]">
              <Link
                href="#"
                className="py-[17px] px-[37px] w-full text-center xl:w-auto  bg-[#1B2022] rounded-[70px] font-medium text-[14px] ff-satoshi uppercase text-[#FFFFFF]"
              >
                Añadir al carrito
              </Link>
              <Link
                href="#"
                className="py-[17px] px-[37px] w-full xl:w-auto text-center border border-[#1B2022] rounded-[70px] font-medium text-[14px] ff-satoshi uppercase text-[#1B2022]"
              >
                Visualizar mi proyecto
              </Link>
            </div>
            <div className="pt-[19px] ">
              <h5 className="font-medium text-[18px]">
                Productos complementarios:
              </h5>
              <div className="mt-[14px] space-y-[10px]">
                <div className="p-[14px] flex flex-wrap items-center gap-[17px]">
                  <img
                    src="/img/product/cp1.png"
                    alt="Productos"
                    className="w-auto xl:w-[74px] xl:h-[73px] object-cover"
                  />
                  <div className="font-medium">
                    <h6 className="text-[16px]">
                      Perfil de acabado de aluminio esquina interior - esquina
                      exterior
                    </h6>
                    <p className="text-[14px] text-[#747474]">Desde €8,81</p>
                  </div>
                </div>
                <div className="p-[14px] flex flex-wrap items-center gap-[17px]">
                  <img
                    src="/img/product/cp1.png"
                    alt="Productos"
                    className="w-auto xl:w-[74px] xl:h-[73px] object-cover"
                  />
                  <div className="font-medium">
                    <h6 className="text-[16px]">
                      Perfil de acabado inicial de aluminio
                    </h6>
                    <p className="text-[14px] text-[#747474]">Desde €8,81</p>
                  </div>
                </div>
                <div className="p-[14px] flex flex-wrap items-center gap-[17px]">
                  <img
                    src="/img/product/cp1.png"
                    alt="Productos"
                    className="w-auto xl:w-[74px] xl:h-[73px] object-cover"
                  />
                  <div className="font-medium">
                    <h6 className="text-[16px]">
                      Perfil de acabado de cubierta de aluminio
                    </h6>
                    <p className="text-[14px] text-[#747474]">Desde €8,81</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
    grid grid-cols-1 lg:grid-cols-2
    gap-[40px] md:gap-[50px] lg:gap-[60px]
    mt-[40px] md:mt-[60px] lg:mt-[100px]
    mb-[60px] lg:mb-[130px]
    text-[#1B2022]
  "
        >
          {/* Brillante */}
          <div>
            <h5 className="text-center md:text-left font-medium text-[22px] md:text-[26px] pb-[15px] border-b border-[#1B2022]">
              Acabado: Brillante
            </h5>

            <div className="mt-[25px] flex flex-col gap-[40px] md:flex-row md:justify-between">
              {/* Left */}
              <div>
                <h6 className="text-[20px] md:text-[22px] font-medium mb-[23px]">
                  Tamaño
                </h6>

                <div className="space-y-[25px]">
                  <div className="flex items-center gap-[19px]">
                    <span className="text-[16px] font-medium border-2 border-[#1B2022] border-l-0 border-r-0 relative">
                      <span className="absolute left-[10px] -top-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 6L16.5217 0H0L8.26087 6Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                      6mm
                      <span className="absolute left-[10px] -bottom-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 0L16.5217 6H0L8.26087 0Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="text-[16px] font-normal">
                      2,70 x 1,20 (METROS)
                    </span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <h6 className="text-[20px] md:text-[22px] font-medium mb-[23px]">
                  Tamaño
                </h6>

                <div className="space-y-[25px]">
                  <div className="flex items-center gap-[19px]">
                    <span className="text-[16px] font-medium border-2 border-[#1B2022] border-l-0 border-r-0 relative">
                      <span className="absolute left-[10px] -top-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 6L16.5217 0H0L8.26087 6Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                      9mm
                      <span className="absolute left-[10px] -bottom-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 0L16.5217 6H0L8.26087 0Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="text-[16px] font-normal">
                      2,40 x 1,20 (METROS)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mate */}
          <div>
            <h5 className="text-center md:text-left font-medium text-[22px] md:text-[26px] pb-[15px] border-b border-[#1B2022]">
              Acabado: Mate
            </h5>

            <div className="mt-[25px] flex flex-col gap-[40px] md:flex-row md:justify-between">
              {/* Left */}
              <div>
                <h6 className="text-[20px] md:text-[22px] font-medium mb-[23px]">
                  Tamaño
                </h6>

                <div className="space-y-[25px]">
                  <div className="flex items-center gap-[19px]">
                    <span className="text-[16px] font-medium border-2 border-[#1B2022] border-l-0 border-r-0 relative">
                      <span className="absolute left-[10px] -top-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 6L16.5217 0H0L8.26087 6Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                      6mm
                      <span className="absolute left-[10px] -bottom-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 0L16.5217 6H0L8.26087 0Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="text-[16px] font-normal">
                      2,60 x 1,20 (METROS)
                    </span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <h6 className="text-[20px] md:text-[22px] font-medium mb-[23px]">
                  Tamaño
                </h6>

                <div className="space-y-[25px]">
                  <div className="flex items-center gap-[19px]">
                    <span className="text-[16px] font-medium border-2 border-[#1B2022] border-l-0 border-r-0 relative">
                      <span className="absolute left-[10px] -top-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 6L16.5217 0H0L8.26087 6Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                      9mm
                      <span className="absolute left-[10px] -bottom-[7px]">
                        <svg
                          width="17"
                          height="6"
                          viewBox="0 0 17 6"
                          fill="none"
                        >
                          <path
                            d="M8.26087 0L16.5217 6H0L8.26087 0Z"
                            fill="#1B2022"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="text-[16px] font-normal">
                      2,60 x 1,20 (METROS)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[60px] md:mt-[100px] lg:mt-[130px] mb-[60px] md:mb-[80px] lg:mb-[100px]">
          <h5 className="text-[24px] md:text-[32px] lg:text-[42px] font-medium text-center">
            Diagrama de baldosas Calacatta Reale
          </h5>

          <div
            className="
    mt-[30px] md:mt-[44px]
    grid grid-cols-1 lg:grid-cols-3
    px-[16px] md:px-[19px]
    2xl:min-h-[513px] 2xl:max-w-[1440px]
  "
          >
            {/* Left section */}
            <div className="lg:col-span-2 border border-[#1B20220F] lg:border-r">
              <h6 className="text-[18px] md:text-[22px] font-medium border-b border-[#1B20220F] px-[16px] md:px-[19px] py-[18px] md:py-[21px]">
                6mm Calacatta Reale
              </h6>

              <div className="px-[16px] md:px-[19px] py-[40px] md:py-[60px] relative">
                <img
                  src="/img/product/productInner.png"
                  alt="productInner"
                  className="w-full lg:max-w-[360px] xl:max-w-[590px] 2xl:max-w-[639px]"
                />

                {/* Labels – hidden on small screens for clarity */}
                <div className="hidden lg:block font-medium text-[18px] xl:text-[22px]">
                  <p className="absolute right-[7%] top-[20%]">
                    Acabado superficial
                  </p>
                  <p className="absolute right-[8%] top-[36%]">
                    Núcleo sinterizado
                  </p>
                  <p className="absolute right-[10%] top-[55%]">
                    Malla de refuerzo
                  </p>
                  <p className="absolute right-[10%] top-[75%]">
                    Malla de refuerzo
                  </p>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="lg:col-span-1 border border-[#1B20220F] border-t-0 lg:border-t lg:border-l-0">
              <h6 className="text-[18px] md:text-[22px] font-medium border-b border-[#1B20220F] px-[20px] md:px-[40px] py-[18px] md:py-[21px]">
                Especificaciones
              </h6>

              <ul>
                <li className="flex gap-[7px] text-[16px] md:text-[20px] border-b border-[#1B20220F] px-[20px] md:px-[40px] py-[20px] md:py-[26px]">
                  Espesor:
                  <span className="text-[#747474] ff-satoshi text-[16px] md:text-[18px]">
                    6mm
                  </span>
                </li>

                <li className="flex gap-[7px] text-[16px] md:text-[20px] border-b border-[#1B20220F] px-[20px] md:px-[40px] py-[20px] md:py-[26px]">
                  Peso:
                  <span className="text-[#747474] ff-satoshi text-[16px] md:text-[18px]">
                    14 Kg
                  </span>
                </li>

                <li className="flex flex-wrap gap-[7px] text-[16px] md:text-[20px] border-b border-[#1B20220F] px-[20px] md:px-[40px] py-[20px] md:py-[26px]">
                  Tamaño máximo de losas:
                  <span className="text-[#747474] ff-satoshi text-[16px] md:text-[18px]">
                    2,70x1,20 (metros)
                  </span>
                </li>

                <li className="flex gap-[7px] text-[16px] md:text-[20px] border-b border-[#1B20220F] px-[20px] md:px-[40px] py-[20px] md:py-[26px]">
                  Opciones de borde:
                  <span className="text-[#747474] ff-satoshi text-[16px] md:text-[18px]">
                    Biselado, Recto
                  </span>
                </li>

                <li className="flex flex-wrap gap-[7px] text-[16px] md:text-[20px] px-[20px] md:px-[40px] py-[20px] md:py-[26px]">
                  Aplicaciones:
                  <span className="text-[#747474] ff-satoshi text-[16px] md:text-[18px]">
                    Encimeras, Revestimiento de paredes, Piso
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-[30px] flex flex-col md:flex-row justify-center md:justify-end gap-[10px]">
            <Link
              href="#"
              className="px-[30px] py-[15px] ff-satoshi bg-[#1B2022] text-white flex items-center justify-center gap-[6px] rounded-[70px]"
            >
              <span>Descargar PDF</span>
            </Link>

            <Link
              href="#"
              className="px-[30px] py-[15px] ff-satoshi bg-[#1B2022] text-white flex items-center justify-center gap-[6px] rounded-[70px]"
            >
              <span>Solicitar asistencia</span>
            </Link>
          </div>
        </div>

        <div className="mb-[60px] lg:mb-[100px]">
          <h6 className="font-medium text-xl text-center md:text-start lg:text-[26px]">
            Detailed view of the full slab of Calacatta Reale
          </h6>
          <img
            src="/img/product/mainInner.png"
            alt="product"
            className="mt-[34px] "
          />
        </div>

        <div
          className="
    grid grid-cols-1 xl:grid-cols-3
    items-start lg:items-center
    gap-[30px] md:gap-[40px] 2xl:gap-[80px]
    mb-[60px] md:mb-[90px] lg:mb-[120px]
  "
        >
          <div>
            <h5 className="text-[28px] md:text-[34px] lg:text-[42px] font-medium text-center xl:text-left">
              Optimiza diseño y funcionalidad con nuestros espesores.
            </h5>

            <div className="mt-[30px] md:mt-[50px] text-center flex flex-col items-center">
              <img
                src="/img/product/thinkness1.png"
                alt="product"
                className="max-w-[220px] md:max-w-none"
              />
              <h6 className="font-medium text-[22px] md:text-[26px] mt-[10px]">
                Silestone
              </h6>
              <p className="text-[#80807E] text-[16px] md:text-[18px] ff-inter">
                12 mm, 20 mm, 30 mm
              </p>
            </div>
          </div>

          <div>
            <p className="text-[16px] md:text-[18px] text-[#80807E] font-normal ff-inter text-center xl:text-left">
              Los diferentes espesores de Calacatta Reale permiten una
              integración perfecta en aplicaciones de paredes y suelos. Puedes
              elegir el espesor más adecuado para cada uso manteniendo el mismo
              color y acabado, optimizando los costes sin comprometer la
              estética ni las prestaciones de la superficie.
            </p>

            <div className="mt-[30px] md:mt-[50px] text-center flex flex-col items-center">
              <img
                src="/img/product/thinkness2.png"
                alt="product"
                className="max-w-[220px] md:max-w-none"
              />
              <h6 className="font-medium text-[22px] md:text-[26px] mt-[10px]">
                Dekton
              </h6>
              <p className="text-[#80807E] text-[16px] md:text-[18px] ff-inter">
                8 mm, 12 mm, 20 mm, 30 mm
              </p>
            </div>
          </div>

          <div>
            <p className="text-[16px] md:text-[18px] text-[#80807E] font-normal ff-inter text-center xl:text-left">
              Selecciona el espesor de Calacatta Reale según el diseño que
              desees, desde opciones más delgadas y minimalistas hasta espesores
              más sólidos. Esto permite adaptar la superficie a paredes y
              suelos, manteniendo el mismo acabado y optimizando estética,
              funcionalidad y coste.
            </p>

            <div className="mt-[30px] md:mt-[50px] text-center flex flex-col items-center">
              <img
                src="/img/product/thinkness2.png"
                alt="product"
                className="max-w-[220px] md:max-w-none"
              />
              <h6 className="font-medium text-[22px] md:text-[26px] mt-[10px]">
                Sensa / Scalea
              </h6>
              <p className="text-[#80807E] text-[16px] md:text-[18px] ff-inter">
                20 mm, 30 mm
              </p>
            </div>
          </div>
        </div>

        <div
          className="
    grid grid-cols-1 lg:grid-cols-2
    gap-[30px] md:gap-[40px]
    mb-[60px] xl:mb-[120px]
  "
        >
          {/* Image */}
          <img
            src="/img/product/product.png"
            alt="product"
            className="w-full object-cover"
          />

          {/* Content */}
          <div className="flex flex-col justify-center items-center px-[16px] md:px-[0]">
            <div className="max-w-[500px] text-center lg:text-left">
              <h5 className="text-[28px] md:text-[34px] lg:text-[42px] font-medium">
                Descubre dónde puedes comprar esto.
              </h5>

              <p className="text-[#80807E] mt-[15px] ff-inter  leading-[28px]">
                Utilice nuestro localizador web para encontrar las tiendas y
                puntos de venta asociados de Obra donde podrá ver este producto
                y muchos más.
              </p>

              <Link
                href="#"
                className="
          text-[#FFFFFF] ff-satoshi
          mt-[18px]
          rounded-[70px]
          bg-[#2B3032]
          w-full block
          uppercase text-center
          py-[14px]
        "
              >
                Dónde comprar
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-[60px] xl:mb-[120px]">
          <h6 className="text-[28px] md:text-[34px] xl:text-[42px] font-medium text-center lg:text-left">
            Similar Colors Calacatta Reale
          </h6>

          <div
            className="
      mt-[20px] md:mt-[30px]
      grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-[20px] md:gap-[25px] lg:gap-[30px]
    "
          >
            {similarPorduct.map((product, indx) => (
              <div key={indx} className="text-center lg:text-left">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full object-cover"
                />

                <h6 className="text-[14px] md:text-[16px] xl:text-[24px] font-medium mt-[10px] mb-[4px]">
                  {product.title}
                </h6>

                <p className="text-[#747474] text-[12px] md:text-[14px]">
                  Acabado: {product.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
