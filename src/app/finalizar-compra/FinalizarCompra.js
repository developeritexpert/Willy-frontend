import React from "react";

export default function FinalizarCompra() {
  return (
    <section className="max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[240px] mb-[60px] lg:mb-[110px] xl:mb-[140px]">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[40px] lg:gap-0">
        <div className="pt-[40px] lg:pt-[79px] xl:pr-[59px] ">
          <h5 className="text-lg md:text-xl xl:text-[26px] text-center">
            Pago rápido
          </h5>
          <div className="mt-[16px] lg:mt-[25px] flex flex-col gap-[12px] sm:flex-row sm:gap-[15px] justify-center">
            <button className="h-[62px] w-full sm:w-[220px] rounded-[7px] bg-[#5A2DF4] flex items-center justify-center">
              <img src="/img/chekout/shoppay.png" alt="Shop Pay" />
            </button>

            <button className="h-[62px] w-full sm:w-[220px] rounded-[7px] bg-[#FFC439] flex items-center justify-center">
              <img src="/img/chekout/paypal.png" alt="PayPal" />
            </button>

            <button className="h-[62px] w-full sm:w-[220px] rounded-[7px] bg-[#000000] flex items-center justify-center">
              <img src="/img/chekout/gpay.png" alt="Google Pay" />
            </button>
          </div>

          <div className="mt-[20px] md:mt-[40px] lg:mt-[65px] flex flex-col md:flex-row  items-center gap-[14px]">
            <span>
              <svg
                width="320"
                height="1"
                viewBox="0 0 320 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4.37114e-08"
                  y1="0.5"
                  x2="320"
                  y2="0.500028"
                  stroke="#1B2022"
                  stroke-opacity="0.08"
                />
              </svg>
            </span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.82806 19.994C8.45873 19.994 7.17606 19.7513 5.98006 19.266C4.78406 18.7633 3.7354 18.0613 2.83406 17.16C1.95006 16.2587 1.25673 15.2013 0.754063 13.988C0.251396 12.7573 6.26147e-05 11.4227 6.26147e-05 9.98401C6.26147e-05 8.52801 0.251396 7.19334 0.754063 5.98001C1.25673 4.76667 1.95006 3.70934 2.83406 2.80801C3.7354 1.90667 4.7754 1.21334 5.95406 0.728006C7.15006 0.242673 8.4414 6.07967e-06 9.82806 6.07967e-06C11.2147 6.07967e-06 12.4974 0.251339 13.6761 0.754006C14.8721 1.23934 15.9121 1.93267 16.7961 2.83401C17.6974 3.71801 18.3994 4.76667 18.9021 5.98001C19.4221 7.19334 19.6821 8.52801 19.6821 9.98401C19.6821 11.4227 19.4221 12.7573 18.9021 13.988C18.3994 15.2013 17.6974 16.2587 16.7961 17.16C15.9121 18.0613 14.8721 18.7633 13.6761 19.266C12.4974 19.7513 11.2147 19.994 9.82806 19.994ZM9.82806 17.628C10.9027 17.628 11.8821 17.4373 12.7661 17.056C13.6501 16.6573 14.4127 16.1113 15.0541 15.418C15.7127 14.7073 16.2154 13.8927 16.5621 12.974C16.9261 12.038 17.1081 11.0413 17.1081 9.98401C17.1081 8.92667 16.9261 7.93867 16.5621 7.02001C16.2154 6.10134 15.7127 5.29534 15.0541 4.60201C14.4127 3.89134 13.6501 3.34534 12.7661 2.96401C11.8821 2.56534 10.9027 2.36601 9.82806 2.36601C8.77073 2.36601 7.80006 2.56534 6.91606 2.96401C6.03206 3.34534 5.26073 3.89134 4.60206 4.60201C3.96073 5.29534 3.45806 6.10134 3.09406 7.02001C2.73006 7.93867 2.54806 8.92667 2.54806 9.98401C2.54806 11.0413 2.73006 12.038 3.09406 12.974C3.45806 13.8927 3.96073 14.7073 4.60206 15.418C5.26073 16.1113 6.03206 16.6573 6.91606 17.056C7.80006 17.4373 8.77073 17.628 9.82806 17.628Z"
                  fill="#1B2022"
                />
              </svg>
            </span>
            <span>
              <svg
                width="320"
                height="1"
                viewBox="0 0 320 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4.37114e-08"
                  y1="0.5"
                  x2="320"
                  y2="0.500028"
                  stroke="#1B2022"
                  stroke-opacity="0.08"
                />
              </svg>
            </span>
          </div>
          {/* detais */}
          <div className=" mt-[30px] lg:mt-[61px]">
            {/* Contacto */}
            <div>
              <div className="font-medium text-[#1B2022] flex justify-between items-center">
                <h5 className="text-2xl lg:text-3xl xl:text-[32px] ">
                  Contacto
                </h5>
                <h6 className="text-[20px] underline">Iniciar sesión</h6>
              </div>
              <div className="mt-[16px]">
                <input
                  type="text"
                  name=""
                  placeholder="Introduzca su correo electrónico"
                  className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[14px] py-[21px] px-[20px]"
                />
              </div>
              <div className="mt-[13px]">
                <label htmlFor="" className="flex items-center gap-[7px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] border border-[#1B20220F] accent-[#1B2022]"
                  />
                  <p className="text-[14px] font-normal">
                    Envíame un correo electrónico con noticias y ofertas.
                  </p>
                </label>
              </div>
            </div>

            {/* Dirección de envío */}
            <div className="mt-[40px] lg:mt-[60px]">
              <h5 className="text-2xl lg:text-3xl xl:text-[32px]">
                Dirección de envío
              </h5>
              <div className="mt-[16px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <input
                  type="text"
                  name=""
                  placeholder="Nombre"
                  className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[14px] p-[20px]"
                />
                <input
                  type="text"
                  name=""
                  placeholder="Apellido"
                  className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[14px] p-[20px]"
                />
              </div>
              <div className="mt-[20px]">
                <div className="relative w-full">
                  <select
                    className="
      w-full
      appearance-none
      border border-[#1B20220F]
      text-[#80807E]
      font-normal
      text-[16px]
      p-[20px]
      bg-white
      cursor-pointer
    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Estados Unidos
                    </option>
                    <option value="Estados Unidos">Estados Unidos 1</option>
                    <option value="Estados Unidos">Estados Unidos 2</option>
                    <option value="Estados Unidos">Estados Unidos 3</option>
                  </select>

                  {/* Arrow */}
                  <span className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 ">
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L6 6L1 1"
                        stroke="#1B2022"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mt-[20px]">
                <input
                  type="text"
                  name=""
                  placeholder="Introduzca aquí su dirección"
                  className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[16px] p-[20px]"
                />
              </div>
              <div className="mt-[20px]">
                <input
                  type="text"
                  name=""
                  placeholder="Apartamento, suite, piso, etc."
                  className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[16px] p-[20px]"
                />
              </div>
              <div className="mt-[20px]">
                <input
                  type="text"
                  name=""
                  placeholder="Ciudad."
                  className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[16px] p-[20px]"
                />
              </div>
              <div className="mt-[18px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div className="relative w-full">
                  <select
                    className="
      w-full
      appearance-none
      border border-[#1B20220F]
      text-[#80807E]
      font-normal
      text-[16px]
      p-[20px]
      bg-white
      cursor-pointer
    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Estado
                    </option>
                    <option value="estado1">Estado 1</option>
                    <option value="estado2">Estado 2</option>
                    <option value="estado3">Estado 3</option>
                  </select>

                  {/* Arrow */}
                  <span className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 ">
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L6 6L1 1"
                        stroke="#1B2022"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <input
                  type="text"
                  name=""
                  placeholder="Código postal"
                  className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[16px] p-[20px]"
                />
              </div>
              <div className="mt-[18px]">
                <label htmlFor="" className="flex items-center gap-[7px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] border border-[#1B20220F] accent-[#1B2022]"
                  />
                  <p className="text-[14px] font-normal">
                    Guarda esta información para la próxima vez.
                  </p>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-[40px] lg:mt-[60px]">
            {/* Shipping method” */}
            <div className="">
              <h6 className="text-2xl lg:text-3xl xl:text-[32px] font-medium">
                Método de envío
              </h6>
              <p className="text-[#80807E] font-normal mt-[10px]">
                Seleccione la dirección que coincida con su tarjeta o método de
                pago.
              </p>
              <div className="mt-[25px] border border-[#1B20220F]">
                <div className="bg-[#1B2022] p-[25px] flex justify-between text-[#FFFFFF] ">
                  <div className="flex items-center gap-[10px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="9.5" stroke="white" />
                      <circle cx="10" cy="10" r="5" fill="white" />
                    </svg>

                    <span className="text-[16px] font-normal">Estándar</span>
                  </div>
                  <h6 className="text-[18px] font-medium">€13.00</h6>
                </div>
                <div className=" p-[25px] flex justify-between text-[##1B2022] ">
                  <div className="flex items-center gap-[10px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="9.5" stroke="#D9D9D9" />
                    </svg>

                    <h6 className="text-[16px] font-normal flex flex-col">
                      Exprés
                      <span className="text-[#80807E] text-[12px] font-normal">
                        De 1 a 4 días hábiles
                      </span>
                    </h6>
                  </div>
                  <h6 className="text-[18px] font-medium">€20.00</h6>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-[40px] lg:mt-[60px]">
              <h6 className="text-2xl lg:text-3xl xl:text-[32px] font-medium">
                Pago
              </h6>
              <p className="text-[#80807E] font-normal mt-[12px]">
                Todas las transacciones son seguras y están encriptadas.
              </p>
            </div>

            <div className="mt-[25px] border border-[#1B20220F]">
              <div className="bg-[#1B2022] p-[25px] flex justify-between text-[#FFFFFF] ">
                <div className="flex items-center gap-[10px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="9.5" stroke="white" />
                    <circle cx="10" cy="10" r="5" fill="white" />
                  </svg>

                  <span className="text-[16px] font-normal">
                    Tarjeta de crédito
                  </span>
                </div>
                <h6 className="text-[18px] font-medium">
                  <img src="/img/chekout/payemnts.png" alt="" />
                </h6>
              </div>

              <div className=" px-[23px] py-[30px]  text-[##1B2022] space-y-[20px] ">
                <div className="relative w-full ">
                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    className="p-[20px] text-[16px] text-[#80807E]  w-full"
                  />
                  <span className=" absolute right-[20px] top-1/2 -translate-y-1/2">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 4.17668V1.86087C21 0.837372 20.244 0 19.32 0H1.68003C0.755997 0 0 0.837372 0 1.86087V4.17668H21Z"
                        fill="black"
                      />
                      <path
                        d="M0 6.5V13.2351C0 14.2586 0.755997 15.096 1.68003 15.096H19.32C20.244 15.096 21 14.2586 21 13.2351V6.5H0ZM11.6115 12.0825H3.29886V9.75645H11.6111V12.0825H11.6115ZM17.7014 12.0825H14.919V9.75645H17.7014V12.0825Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Nombre en la tarjeta"
                    className="p-[20px] text-[16px] text-[#80807E]  w-full"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <input
                    type="text"
                    name=""
                    placeholder="Fecha de vencimiento (MM/AA) "
                    className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[14px] p-[20px]"
                  />
                  <div className="relative w-full">
                    <input
                      type="text"
                      name=""
                      placeholder="Código de seguridad"
                      className="text-[#80807E] border border-[#1B20220F] w-full font-normal text-[14px] p-[20px]"
                    />
                    <span className=" absolute right-[20px] top-1/2 -translate-y-1/2">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.32227 14.6445C11.3595 14.6445 14.6445 11.3597 14.6445 7.32227C14.6445 3.28484 11.3597 0 7.32227 0C3.28484 0 0 3.28484 0 7.32227C0 11.3597 3.28484 14.6445 7.32227 14.6445ZM7.32227 0.915961C10.8548 0.915961 13.729 3.79 13.729 7.32272C13.729 10.8554 10.855 13.7295 7.32227 13.7295C3.78955 13.7295 0.91551 10.8554 0.91551 7.32272C0.91551 3.79 3.78955 0.915961 7.32227 0.915961Z"
                          fill="#777777"
                        />
                        <path
                          d="M5.49315 5.99666C5.74599 5.99666 5.95059 5.79205 5.95059 5.53922C5.95059 4.76868 6.55345 4.16528 7.3224 4.16528C8.07933 4.16528 8.69531 4.81021 8.69531 5.603C8.69531 6.11612 8.53629 6.43592 8.10868 6.7824C6.76211 7.87309 6.86144 9.18416 6.86655 9.23944L7.77844 9.15887L7.77897 9.16399C7.7765 9.12759 7.73233 8.26535 8.68521 7.49373C9.32552 6.97496 9.61071 6.39191 9.61071 5.60314C9.61071 4.30569 8.58434 3.25 7.32239 3.25C6.03964 3.25 5.03516 4.25552 5.03516 5.53886C5.03569 5.79206 5.24084 5.99666 5.49315 5.99666Z"
                          fill="#777777"
                        />
                        <path
                          d="M7.74 10.8056C7.72833 10.7782 7.7142 10.7514 7.69794 10.7266C7.68116 10.7019 7.6619 10.6786 7.6407 10.6572C7.61985 10.636 7.5967 10.6167 7.57126 10.6005C7.54652 10.5837 7.52002 10.5696 7.49227 10.5579C7.46436 10.5468 7.43609 10.5381 7.40658 10.5321C7.25816 10.5022 7.09949 10.5508 6.99366 10.6572C6.97246 10.6784 6.9532 10.7017 6.93641 10.7266C6.92015 10.7514 6.90602 10.7782 6.89436 10.8056C6.88323 10.8335 6.87457 10.8618 6.86856 10.8913C6.86255 10.9207 6.85938 10.951 6.85938 10.9809C6.85938 11.0102 6.86238 11.0406 6.86856 11.0701C6.87457 11.0995 6.88323 11.1284 6.89436 11.1558C6.90602 11.1837 6.92015 11.2101 6.93641 11.2348C6.9532 11.2601 6.97246 11.2834 6.99366 11.3043C7.01451 11.3255 7.03818 11.3447 7.0631 11.3615C7.08784 11.3778 7.11434 11.3919 7.14208 11.4035C7.17 11.4147 7.19827 11.4239 7.22777 11.4293C7.2571 11.4354 7.28749 11.4385 7.31736 11.4385C7.4375 11.4385 7.55553 11.3899 7.64052 11.3042C7.66172 11.2834 7.68098 11.2603 7.69777 11.2348C7.71402 11.2101 7.72816 11.1836 7.73982 11.1558C7.75095 11.1284 7.76014 11.0996 7.76562 11.0701C7.77162 11.0408 7.7748 11.0104 7.7748 10.9809C7.7748 10.951 7.7718 10.9207 7.76562 10.8913C7.76032 10.8618 7.75113 10.8335 7.74 10.8056Z"
                          fill="#777777"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-[23px] py-[30px]  text-[##1B2022] space-y-[20px]">
                <label
                  htmlFor="paypal"
                  className="flex items-center  justify-between"
                >
                  <div className="flex items-center gap-[10px]">
                    <input
                      id="paypal"
                      type="radio"
                      name="payment-method"
                      className="w-[20px] h-[20px] border border-[#1B20220F] accent-[#1B2022]"
                    />{" "}
                    PayPal{" "}
                  </div>
                  <span>
                    <img src="/img/chekout/pay.png" alt="PayPal" />
                  </span>
                </label>
                <label
                  htmlFor="zip"
                  className="flex items-center  justify-between border-t border-b  border-[#1B20220F] py-[24px]"
                >
                  <div className="flex items-center gap-[10px]">
                    <input
                      type="radio"
                      id="zip"
                      name="payment-method"
                      className="w-[20px] h-[20px] border border-[#1B20220F] accent-[#1B2022]"
                    />{" "}
                    Zip - compra ahora, paga después{" "}
                  </div>
                  <span>
                    <img src="/img/chekout/zp.png" alt="PayPal" />
                  </span>
                </label>
                <label
                  htmlFor="afterpay"
                  className="flex items-center  justify-between"
                >
                  <div className="flex items-center gap-[10px]">
                    <input
                      id="afterpay"
                      type="radio"
                      name="payment-method"
                      className="w-[20px] h-[20px] border border-[#1B20220F] accent-[#1B2022]"
                    />{" "}
                    Afterpay{" "}
                  </div>
                  <span>
                    <img src="/img/chekout/Afterpay.png" alt="Afterpay" />
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-[40px] lg:mt-[60px]">
              <h6 className="text-2xl lg:text-3xl xl:text-[32px] font-medium">
                Dirección de facturación
              </h6>
              <p className="text-[#80807E] font-normal mt-[10px] text-[16px]">
                Seleccione la dirección que coincida con su tarjeta o método de
                pago.
              </p>
              <div className="mt-[30px] border border-[#1B20220F]">
                <div className="bg-[#1B2022] p-[25px]  text-[#FFFFFF] ">
                  <div className="flex items-center gap-[10px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="9.5" stroke="white" />
                      <circle cx="10" cy="10" r="5" fill="white" />
                    </svg>

                    <span className="text-[16px] font-normal">
                      Igual que la dirección de envío
                    </span>
                  </div>
                </div>
                <div className=" p-[25px] flex justify-between text-[##1B2022] ">
                  <div className="flex items-center gap-[10px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="9.5" stroke="#D9D9D9" />
                    </svg>

                    <h6 className="text-[16px] font-normal ">
                      Usar una dirección de facturación diferente
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <button className="text-[14px] font-medium ff-satoshi bg-[#1B2022] rounded-[70px] py-[19px] text-center w-full uppercase mt-[][40px] xl:mt-[65px] text-[#FFFFFF]">
              Pagar ahora
            </button>
          </div>
        </div>

        <div className="pt-[40px] lg:pt-[98px] border-l-4 border-[#1B202205] xl:pl-[84px] w-full xl:max-w-[568px] ">
          <div className="flex justify-between items-center font-medium text-base lg:text-[20px]">
            <div className="flex items-center gap-[23px]">
              <img
                src="/img/productos/1.png"
                alt=""
                className="max-w-[112px] max-h-[93px]"
              />
              <div className="text-[#1B2022] ">
                <p>Calacatta</p>
                <p>Reale</p>
              </div>
            </div>
            <h6 className="text-[#747474]">€750</h6>
          </div>
          <div className="text-[18px] font-medium mt-[28px] ">
            <div className="flex justify-between pt-[16px] pb-[20px] border-t border-[#1B202214]">
              <h6>Subtotal</h6>
              <p className="text-[#747474]">€9,000.00</p>
            </div>
            <div className="flex justify-between pt-[16px] pb-[20px] border-t border-[#1B202214]">
              <h6>Envío </h6>
              <p className="text-[#747474]">€10.00</p>
            </div>
            <div className="flex justify-between pt-[16px] pb-[20px] border-t border-b border-[#1B202214]">
              <h6>Impuesto </h6>
              <p className="text-[#747474]">€15.00</p>
            </div>
            <div className="flex justify-between mt-[20px] font-semibold">
              <h6>Total del pedido </h6>
              <p className="text-[#747474]">€9,025.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
