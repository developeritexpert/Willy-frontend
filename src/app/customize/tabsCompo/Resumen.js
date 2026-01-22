import React from 'react'

export default function Resumen() {
  return (
      <div className="py-[25px] xl:pt-[30px] xl:pb-[0] xl:px-[32px]">
            <h5 className="text-xl lg:text-[28px] font-medium max-w-[383px] ">
              Tu resumen
            </h5>
            {/* dimension box */}
            <div className="">
              <h6 className="text-xl lg:text-[16px] pt-[20px] mb-[10px] font-medium">
                Dimensión
              </h6>

              <div className="dimension-list flex flex-wrap !gap-[15px] ff-satoshi">
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1] pb-[10px] mb-[20px]">
                  <div className="font-medium">Ancho de la pared (cm):</div>
                  <div className="text-[#747474]">890</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Altura de la pared (cm):</div>
                  <div className="text-[#747474]">560</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Recuento de estilos</div>
                  <div className="text-[#747474]">20</div>
                </div>
                  <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Recuento ferroviario</div>
                  <div className="text-[#747474]">2</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Ancho del listón</div>
                  <div className="text-[#747474]">7cm</div>
                </div>
                                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Espesor del listón</div>
                  <div className="text-[#747474]">6mm</div>
                </div>
                <div className="flex justify-between lg:text-[13px] w-[calc(50%-7.5px)] border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                  <div className="font-medium">Altura del zócalo</div>
                  <div className="text-[#747474]">15,4</div>
                </div>
                
              

              </div>
            </div>

            {/* Seleccionar piedra box */}
            <div>
              <h6 className="text-xl lg:text-[16px] pt-[20px] mb-[10px] font-medium">
                Seleccionar piedra
              </h6>
              <div className="flex justify-between lg:text-[13px]  border-b border-[#E1E1E1]  pb-[10px] mb-[20px] ff-satoshi">
                <div className="font-medium">
                  Superficie de piedra preferida
                </div>
                <div className="text-[#747474]">Piedras Sinterizadas</div>
              </div>
            </div>

            {/* Diseño y patrón box */}
            <div>
              <h6 className="text-xl lg:text-[16px] pt-[20px] mb-[10px]">
Diseño y patrón
              </h6>
              <div className="flex justify-between lg:text-[13px]  border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                <div className="font-medium">
                  Controle cómo se coloca la piedra:
                </div>
                <div className="text-[#747474]">Horizontal</div>
              </div>
                 <div className="flex justify-between lg:text-[13px]  border-b border-[#E1E1E1]  pb-[10px] mb-[20px]">
                <div className="font-medium">
                  Seleccione su patrón de diseño:
                </div>
                <div className="text-[#747474]">Calacatta Reale</div>
              </div>
            </div>

          </div>
  )
}
