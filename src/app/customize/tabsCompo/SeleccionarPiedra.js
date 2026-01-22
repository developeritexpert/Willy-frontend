import React from "react";

export default function SeleccionarPiedra() {
  const prodcut=[
   
     {
      title:"Piedras Sinterizadas",
      img:"/img/customize/pd1.png"
    },
    {
      title:"Laminas Translucidas",
      img:"/img/customize/pd2.png"
    },
    {
      title:"Laminas Bambú",
      img:"/img/customize/pd3.png"
    },
    {
      title:"Pu Stones",
      img:"/img/customize/pd4.png"
    },
     {
      title:"Piedras Naturales",
      img:"/img/customize/pd5.png"
    },
     {
      title:"Wall Panels",
      img:"/img/customize/pd6.png"
    },
    
  ]
  return (
    <>
      <div className="py-[25px] xl:pt-[30px] xl:pb-[0] xl:px-[32px]">
       
        <h5 className="text-xl lg:text-[28px] font-medium max-w-[347px] ">
          Elija su superficie de piedra preferida{" "}
        </h5>
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
