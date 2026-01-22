import React from "react";

export default function DiseñoPatrón() {
  const prodcut=[
     {
      title:"Calacatta Reale",
      img:"/img/customize/pd7.png"
    },
    {
      title:"Carrara Eleganza",
      img:"/img/customize/pd8.png"
    },
    {
      title:"Pietra Oscura",
      img:"/img/customize/pd9.png"
    },
    {
      title:"Onice Azzurro",
      img:"/img/customize/pd10.png"
    },
     {
      title:"Rosa Palazzi",
      img:"/img/customize/pd11.png"
    },
     {
      title:"Grigio Etereo",
      img:"/img/customize/pd12.png"
    },
      {
      title:"Grigio Etereo",
      img:"/img/customize/pd13.png"
    },
      {
      title:"Grigio Etereo",
      img:"/img/customize/pd14.png"
    },
      {
      title:"Grigio Etereo",
      img:"/img/customize/pd15.png"
    }
    
  ]
  return (
    <>
      <div className="py-[25px] xl:pt-[30px] xl:pb-[0] xl:px-[32px]">
       
        <h5 className="text-xl lg:text-[28px] font-medium max-w-[536px] ">
          Selecciona el patrón y controla la colocación de la piedra.
        </h5>
        <p className="mt-[21px] text-[16px] font-medium">Controle cómo se coloca la piedra:</p>
        <div className="mt-[13px] flex flex-wrap gap-[12px]">
                <button className="px-[46px] py-[19px] text-[15px] w-full md:w-fit font-medium bg-[#052424] text-[#FFFFFF]">
                    Horizontal
                </button>
                <button className="px-[46px] py-[19px] text-[15px] w-full md:w-fit font-medium  border border-[#052424]/10 text-[#747474]">
                    Vertical
                </button>
        </div>
        <p className="mt-[21px] mb-[14px] font-medium text-[16px]">Seleccione su patrón de diseño:</p>
        <div className="mt-[19px] grid grid-cols-2 md:grid-cols-3 gap-[12px]">
        {prodcut.map((elm,indx)=>(
          <div key={indx} className="relative xl:h-[192px]">
            <img src={elm.img} alt={elm.title} />
            <button className="text-[14px] font-bold ff-satoshi absolute bottom-0 inset-x-0  text-center py-[10px] bg-[#FFFFFFD9] text-[#1B2022] hover:bg-[#1B2022] hover:text-[#FFFFFFD9]">{elm.title}</button>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
