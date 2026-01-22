import React from 'react'

export default function Dimensión() {
  return (
    <>
                <div className="py-[25px] xl:py-[0px] xl:pt-[47px] xl:px-[56px]">
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

                <label className="flex flex-col gap-[11px] text-[16px] font-medium">
                  Espesor del listón
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

          
          </div>
    </>
  )
}
