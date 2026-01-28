"use client";
import React from "react";
import { useState } from "react";
import { Slider } from "@heroui/react";

export default function ProductFilter({ showFilter }) {
  const [disponibilidadToggle, setDisponibilidadToggle] = useState(true);
  const [colorTogle, setColorToggle] = useState(true);
  const [estilos, setEstilos] = useState(true);
  const [grosores, setGrosores] = useState(true);
  const [acabado, setAcabado] = useState(true);
  const [precio, setPrecio] = useState(true);

  const [grosoresVal, setGrosoresVal] = useState("0.4 cm");
  const [acabadoVal, setacabadoVal] = useState("Brillante");
  const [estilosVal, seteEtilosVal] = useState("Natural Granulado");
  const [disponibilidadVal, setDisponibilidadVal] = useState("En stock");
  const [colorsVal, setColorVal] = useState("#6E5B4C");

  const MIN_PRICE = 750;
  const MAX_PRICE = 100000;

  const [value, setValue] = useState([MIN_PRICE, MAX_PRICE]);

  const handleChange = (newValue) => {
    if (Array.isArray(newValue)) {
      setValue([MIN_PRICE, newValue[1]]);
    }
  };
  const colors = [
    "#6E5B4C",
    "#E7E0D8",
    "#CCCCCC",
    "#004C80",
    "#B45D5A",
    "#000000",
    "#1B202266",
    "#1B202266",
  ];
  const estilosData = [
    "Natural Granulado",
    "Natural Veteado",
    "Natural Irregular",
    "Sólido",
    "Industrial",
    "Metálico",
    "Otro",
  ];
  const acabadoData = [
    "Brillante",
    "Soft",
    "Mate",
    "Levigato",
    "Texturizado",
    "Pulido",
  ];
  const grosoresData = ["0.4 cm", "0.8 cm", "1.2 cm", "2.0 cm", "3.0 cm"];
  return (
    <div
      className={`
    ${showFilter ? "translate-x-0" : "-translate-x-full hidden "}
    lg:translate-x-0 lg:block
    transition-transform duration-300
    space-y-[20px] mt-[21px] lg:max-w-[284px]
  `}
    >
      <div className="border-b border-[#1B20220F] pb-[20px]">
        <div className="relative border border-[#1B20220F] focus-within:border-[#1B2022]">
          <input
            type="text"
            placeholder="Introduzca la búsqueda..."
            className="w-full py-[14px] px-[14px] placeholder:text-[#B7B9BA]  text-[12px] font-normal outline-none"
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
          <span className="text-[16px] font-medium">Disponibilidad</span>{" "}
          <span className={`duration-200 ${disponibilidadToggle ? "" : "rotate-180"}`}>
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
          <ul className="lg:ps-4 mt-[18px] space-y-[12px] gap-[10px]">
            <li
              onClick={() => setDisponibilidadVal("En stock")}
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[14px] h-[14px] border-[0.5px]  ${disponibilidadVal == "En stock" ? " border-[#1B2022]" : "border-[#1B20221A]"} flex justify-center items-center`}
              >
                {disponibilidadVal == "En stock" && (
                  <span className="w-[6px] h-[6px] bg-[#1B2022] block"></span>
                )}
              </div>
              <span className="">En stock</span>
            </li>
          </ul>
        )}
      </div>
      <div className="border-b border-[#1B20220F] pb-[25px]">
        <button
          onClick={() => setColorToggle(!colorTogle)}
          className="flex justify-between items-center w-full "
        >
          <span className="text-[16px] font-medium">Colores</span>{" "}
          <span className={`duration-200 ${colorTogle ? "" : "rotate-180"}`}>
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
        )}
      </div>
      <div className="border-b border-[#1B20220F] pb-[27px]">
        <button
          onClick={() => setEstilos(!estilos)}
          className="flex justify-between items-center w-full "
        >
          <span className="text-[16px] font-medium">Estilos</span>{" "}
          <span className={`duration-200 ${estilos ? "" : "rotate-180"}`}>
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
          <ul className="lg:ps-4 mt-[18px] space-y-[12px] gap-[10px]">
            {estilosData.map((elm, idx) => (
              <li
                onClick={() => seteEtilosVal(elm)}
                key={idx}
                className="flex items-center gap-[10px]"
              >
                <div
                  className={`w-[14px] h-[14px] border-[0.5px]  ${estilosVal == elm ? " border-[#1B2022]" : "border-[#1B20221A]"} flex justify-center items-center`}
                >
                  {estilosVal == elm && (
                    <span className="w-[6px] h-[6px] bg-[#1B2022] block"></span>
                  )}
                </div>
                <span className="">{elm}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-b border-[#1B20220F] pb-[29px]">
        <button
          onClick={() => setAcabado(!acabado)}
          className="flex justify-between items-center w-full "
        >
          <span className="text-[16px] font-medium">Acabado</span>{" "}
          <span className={`duration-200 ${acabado ? "" : "rotate-180"}`}>
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
          <ul className="lg:ps-4 mt-[18px] space-y-[12px] gap-[10px]">
            {acabadoData.map((elm, idx) => (
              <li
                onClick={() => setacabadoVal(elm)}
                key={idx}
                className="flex items-center gap-[10px]"
              >
                <div
                  className={`w-[14px] h-[14px] border-[0.5px]  ${acabadoVal == elm ? " border-[#1B2022]" : "border-[#1B20221A]"} flex justify-center items-center`}
                >
                  {acabadoVal == elm && (
                    <span className="w-[6px] h-[6px] bg-[#1B2022] block"></span>
                  )}
                </div>
                <span className="">{elm}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-b border-[#1B20220F] pb-[29px]">
        <button
          onClick={() => setGrosores(!grosores)}
          className="flex justify-between items-center w-full "
        >
          <span className="text-[16px] font-medium">Grosores</span>{" "}
          <span className={`duration-200 ${grosores ? "" : "rotate-180"}`}>
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
          <ul className="lg:ps-4 mt-[18px] space-y-[12px] gap-[10px]">
            {grosoresData.map((elm, idx) => (
              <li
                onClick={() => setGrosoresVal(elm)}
                key={idx}
                className="flex items-center gap-[10px]"
              >
                <div
                  className={`w-[14px] h-[14px] border-[0.5px]  ${grosoresVal == elm ? " border-[#1B2022]" : "border-[#1B20221A]"} flex justify-center items-center`}
                >
                  {grosoresVal == elm && (
                    <span className="w-[6px] h-[6px] bg-[#1B2022] block"></span>
                  )}
                </div>
                <span className="">{elm}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border-b border-[#1B20220F] pb-[40px]">
        <button
          onClick={() => setPrecio(!precio)}
          className="flex justify-between items-center w-full "
        >
          <span className="text-[16px] font-medium">Precio</span>{" "}
          <span className={`duration-200 ${precio ? "" : "rotate-180"}`}>
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
        {precio && (
          <div className="lg:ps-4 mt-[18px]">
            <div className="w-full max-w-lg space-y-3">
              {/* Labels */}
              <div className="flex justify-between text-sm font-normal mb-[20px]">
                <span>€{MIN_PRICE}</span>
                <span>€{value[1].toLocaleString()}</span>
              </div>

              <Slider
                value={value}
                onChange={handleChange}
                minValue={MIN_PRICE}
                maxValue={MAX_PRICE}
                step={250}
                hideValue
                className="w-full"
                classNames={{
                  track: "h-1",
                  filler: "bg-black",
                  thumb: "bg-black w-4 h-4",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
