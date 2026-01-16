import React from 'react'

export default function DescargasUi() {
  const data = [
    {
      id: 1,
      img: "/img/descargas/1.png",
      title: "Piedras Translúcidas",
    },
    {
      id: 1,
      img: "/img/descargas/1.png",
      title: "Piedras Naturales",
    },
    {
      id: 1,
      img: "/img/descargas/1.png",
      title: "PU Stone",
    },
    {
      id: 1,
      img: "/img/descargas/1.png",
      title: "Laminas Decorativas",
    },
    {
      id: 1,
      img: "/img/descargas/1.png",
      title: "Laminas Wall Panel",
    },
  ];
  return (
    <>
      

      <div data-aos="fade-up" className="px-[15px] md:px-8 lg:px-12 flex justify-center items-center 2xl:block  2xl:px-[240px] 2xl:pt-[290px] 2xl:pb-[190px] h-[300px] md:h-[450px] lg:h-[550px]  2xl:h-[660px] bg-[url(/img/banner/2.png)] 2xl:bg-center bg-cover  bg-[position:25%_0%]">
        <h4 className="2xl:max-w-[559px] text-[#FFFFFF]  text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] 2xl:text-[82px] font-medium leading-[40px] md:leading-[90px]">            Obra Descargas
</h4>
      </div>

      <div data-aos="fade-up" className="max-w-[600px] lg:max-w-[781px] mx-auto px-[15px] flex flex-col items-center text-center mt-[60px] mb-[60px] xl:mt-[127px]  xl:mb-[75px]">
        <h5 className=" text-2xl md:text-3xl  lg:text-[42px] font-medium text-[#1B2022] ">Catalogues</h5>
        <span className="mt-[11px] mb-[22px]">
          <svg
            width="55"
            height="1"
            viewBox="0 0 55 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="55" y2="0.5" stroke="#1B2022" />
          </svg>
        </span>
        <p className="text-[#80807E] text-[18px] leading-[28px] ">
          Si puedes imaginarlo, Obra puede hacerlo realidad. Explora nuestros
          catálogos para descubrir una amplia gama de modelos diseñados para
          cada superficie y convierte tus ideas en realidad.
        </p>
      </div>

      <section  data-aos="fade-up" className="max-w-[1920px] mx-auto  px-[15px] md:px-8 lg:px-12 2xl:px-[240px] mb-[60px] lg:mb-[146px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[56px]">
          {data.map((elm, index) => (
            <div id={index} className="">
              <img src={elm.img}  className="h-[350px] 2xl:h-[442px] object-cover w-full" />
              <h6 className="text-[16px] lg:text-[20px] font-medium text-[#1B2022] mt-[22px] text-center">{elm.title}</h6>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
