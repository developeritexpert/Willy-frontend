"use client"
import React, { useState } from 'react'

export default function CustomizeComp() {
  const tabs=[
    "Dimensión",
    "Seleccionar piedra",
    "Diseño y patrón",
    "Rendimiento",
    "Resumen"
  ]
  const [currentTab,setCurrentTab]=useState("Dimensión")
  return (
    <div className='max-w-[1920px] px-[15px] md:px-8 md:px-12 xl:px-0 mt-[40px]'>
      <div className='grid lg:grid-cols-3 '>
            <div className='col-span-2'>
                <div className='max-w-[814px] mx-auto py-[166px]'>
                  <img src="/img/customize/1.png" alt="" className='' />
                </div>
            </div>
            <div className='col-span-1'>
                <div className='flex xl:text-nowrap  gap-[35px] p-[22px] border border-[#2B303205]'>
                {tabs.map((tab,idx)=>(
                   <button onClick={setCurrentTab(tab)} key={idx} className={`${currentTab==tab?"text-[#1B2022] font-medium":"text-[#747474] font-normal"}  text-[16px] ff-satoshi`}>
                    {tab}
                  </button>
                ))}
                 
                </div>
            </div>
      </div>
    </div>
  )
}
