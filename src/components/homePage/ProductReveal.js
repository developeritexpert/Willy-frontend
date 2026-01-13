import React from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

export default function ProductReveal() {
  return (
   <div className="max-w-[1920px]  mx-auto  2xl:mb-[118px] 2xl:px-[321px]">
      <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
 <span className="font-semibold uppercase text-[18px] text-[#B7B9BA]">
   Instalación de paneles de pared
 </span>
 <h5 className="text-2xl 2xl:text-[53px] max-w-[899px] mt-[16px] leading-[100%]">
   Comparaciones antes y después
 </h5>
 <p className='mt-5 text-xs 2xl:text-[22px] font-[400] leading-[32px] text-[#2B3032]'>Los paneles de pared pueden transformar completamente un espacio, dándole un aspecto moderno y elegante. Antes de su instalación, las paredes pueden parecer sencillas, anticuadas o dañadas.</p>
      </div>

      <div className=" 2xl:mt-[46px] ">

          <BeforeAfterSlider/>


      </div>
    </div>
  )
}
