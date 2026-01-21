import React from "react";

export default function CarritoUi() {
  return (
    <section className="max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[240px] mt-[60px] md:mt-[80px] xl:mt-[117px] mb-[65px] md:mb-[70px] xl:mb-[120px]">
      <h4 className="text-2xl md:text-3xl lg:text-[53px] font-medium text-center">
        Carrito de la compra
      </h4>
    <div className="mt-[35px] lg:mt-[65px]">
  <div >

    <div className="hidden lg:grid grid-cols-10 text-sm md:text-[20px] font-medium text-[#1B2022]">
      <div className="col-span-4">Producto</div>
      <div className="col-span-2">Precio</div>
      <div className="col-span-2">Cantidad</div>
      <div className="col-span-2 text-start">Color</div>
    </div>

    <div className="
      grid grid-cols-1 gap-4
      lg:grid-cols-10 lg:items-center
      py-4 lg:py-[30px]
      border-b border-t border-[#1B202214]
      mt-[21px]
    ">
      
     <div className="lg:col-span-4 flex justify-between lg:block">
             <span className="lg:hidden font-medium text-[#1B2022]">Producto</span>

       <div className=" flex items-center gap-4 lg:gap-[23px]">
        <img
          src="/img/productos/1.png"
          alt="Calacatta Reale"
          className="w-[96px] h-[80px] lg:w-[112px] lg:h-[93px] object-cover"
        />
        <div className="text-[#1B2022] font-medium text-base lg:text-[20px]">
          <p>Calacatta</p>
          <p>Reale</p>
        </div>
      </div>
     </div>

      <div className="lg:col-span-2 flex justify-between lg:block text-[#747474]">
        <span className="lg:hidden font-medium text-[#1B2022]">Precio</span>
        <span>€750</span>
      </div>

      <div className="lg:col-span-2 flex justify-between lg:justify-start items-center gap-3 text-[#747474]">
        <span className="lg:hidden font-medium text-[#1B2022]">Cantidad</span>
        <div className="flex items-center gap-3">
          <button className="px-2">−</button>
          <span>12</span>
          <button className="px-2">+</button>
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between items-center gap-4">
        <div className="flex justify-between w-full lg:w-auto">
          <span className="lg:hidden font-medium text-[#1B2022]">Color</span>
          <span className="text-[#747474]">Memphis</span>
        </div>

        <button>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.330466 0.331578C-0.110155 0.772211 -0.110155 1.48986 0.330466 1.93197L5.39988 7L0.330466 12.068C-0.110155 12.5101 -0.110155 13.2278 0.330466 13.6684C0.772559 14.1105 1.49019 14.1105 1.93228 13.6684L7.00018 8.60039L12.0681 13.6684C12.5102 14.1105 13.2263 14.1105 13.6684 13.6684C14.1105 13.2278 14.1105 12.5101 13.6684 12.068L8.60053 7L13.6684 1.93197C14.1105 1.48986 14.1105 0.772211 13.6684 0.331578C13.2263 -0.110526 12.5102 -0.110526 12.0681 0.331578L7.00018 5.39961L1.93228 0.331578C1.49019 -0.110526 0.772559 -0.110526 0.330466 0.331578Z"
              fill="#1B2022"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>


      <div className="flex justify-end mt-[44px] ">
        <div className="w-full lg:w-[471px] border rounded-xl p-6 lg:px-[40px] lg:py-[34px] border border-[#1B202214] rounded-[10px]">
          <h4 className="font-medium mb-1 lg:mb-[9px] text-[24px] lg:text-[26px]">
            Resumen del pedido
          </h4>
          <p className="text-sm lg:text-[16px] text-[#747474] mb-6 lg:mb-[30px]">
            Calcular gastos de envío e impuestos
          </p>

          <div className="space-y-4 lg:space-y-[px20] text-sm ">
            <div className="flex justify-between text-[18px] py-[12px] border-t border-b border-[#1B202214] lg:py-[20px]">
              <span className=" font-medium">Subtotal</span>
              <span className="text-[#747474] text-[]">€9,000</span>
            </div>
            <div className="flex justify-between text-[18px] py-[12px] border-t border-b border-[#1B202214] lg:py-[20px]">
              <span className=" font-medium">Envío </span>
              <span className="text-[#747474] text-[]">€10</span>
            </div>
            <div className="flex justify-between text-[18px] py-[12px] border-t border-b border-[#1B202214] lg:py-[20px]">
              <span className=" font-medium">Impuesto </span>
              <span className="text-[#747474] text-[]">€15</span>
            </div>

           

            <div className="flex justify-between font-semibold text-[18px] mt-[20px] ">
              <span>Total del pedido</span>
              <span>€9,025</span>
            </div>
          </div>

          <button className="mt-6 lg:mt-[31px] w-full bg-[#1B2022] text-white py-3 lg:py-[13px] rounded-full text-[12px]">
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </section>
  );
}
