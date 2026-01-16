import React from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

export default function ProductReveal() {
  return (
   <div data-aos="fade-up" className="max-w-[1920px]  mx-auto  mb-[60px] md:mb-[90px]  2xl:mb-[118px] px-[15px] md:px-8 lg:px-12 2xl:px-[0]">
      <div className="flex flex-col items-center text-center max-w-[500px] xl:max-w-[900px] mx-auto">
 <span className="font-semibold uppercase text-[18px] text-[#B7B9BA]">
   Instalación de paneles de pared
 </span>
 <h5 className="text-2xl md:text-3xl lg:text-4xl   2xl:text-[53px] md:max-w-[500px] xl:max-w-[899px] mt-[16px] leading-[100%]">
   Comparaciones antes y después
 </h5>
 <p className='mt-5 text-xs 2xl:text-[22px] font-[400] leading-[20px] xl:leading-[32px] text-[#2B3032]'>Los paneles de pared pueden transformar completamente un espacio, dándole un aspecto moderno y elegante. Antes de su instalación, las paredes pueden parecer sencillas, anticuadas o dañadas.</p>
      </div>

      <div className="mt-[25px] md:mt-[30px] 2xl:mt-[46px] ">

          <BeforeAfterSlider/>


      </div>
    </div>
  )
}
