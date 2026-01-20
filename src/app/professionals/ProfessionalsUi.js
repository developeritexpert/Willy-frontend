"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import LoctionDetailSlider from "./LoctionDetailSlider";
import CompanyLogos from "@/components/homePage/CompanyLogos";
export default function ProfessionalsUi() {
  const productSlides = [
    {
      id: 1,
      imgSlide: "/img/product/10.png",
      title: "Cristina Puerta / Spain",
    },
    {
      id: 2,
      imgSlide: "/img/product/11.png",
      title: "David gandy / United Kingdom",
    },
    {
      id: 3,
      imgSlide: "/img/product/12.png",
      title: "paolo griffa / Italy",
    },
    {
      id: 4,
      imgSlide: "/img/product/13.png",
      title: "Alex Rivière / spain",
    },
    {
      id: 1,
      imgSlide: "/img/product/10.png",
      title: "Cristina Puerta / Spain",
    },
    {
      id: 2,
      imgSlide: "/img/product/11.png",
      title: "David gandy / United Kingdom",
    },
    {
      id: 3,
      imgSlide: "/img/product/12.png",
      title: "paolo griffa / Italy",
    },
    {
      id: 4,
      imgSlide: "/img/product/13.png",
      title: "Alex Rivière / spain",
    },
  ];

 


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,

    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,

    speed: 1000,

    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        data-aos="fade-up"
        style={{ backgroundImage: `url(${"/img/banner/5.png"})` }}
        className={`max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 flex justify-center items-center 2xl:block  2xl:px-[240px] 2xl:pt-[254px] 2xl:pb-[153px] h-[450px] md:h-[450px] lg:h-[550px]  2xl:h-[660px]  2xl:bg-center bg-cover  bg-[position:25%_0%]`}
      >
        <div className="2xl:max-w-[750px] text-[#FFFFFF] text-center 2xl:text-start">
          <h4 className="  text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] 2xl:text-[82px] font-medium leading-[40px] md:leading-[70px] lg:leading-[90px]">
            Arquitectos con los que trabajamos
          </h4>
          <p className="text-[22px] font-normal leading-[30px] mt-[13px] ff-satoshi  2xl:max-w-[640px] ">
            Profesionales creativos que confían en nuestros materiales para
            obtener resultados excepcionales.
          </p>
        </div>
      </div>

     <div data-aos="fade-up" className="max-w-[1920px] mx-auto px-[15px] md:px-0 md:ps-[60px] lg:ps-[150px] 2xl:ps-[240px]   mt-[60px] md:mt-[85px] xl:mt-[127px] ">
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl xl:text-[42px] font-medium ">
            Las mentes creativas detrás de los proyectos
          </h4>
          <span className="mx-auto">
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
        </div>

        <div className="slider-wrapper relative  mt-[40px] xl:mt-[60px] ">
          <Slider {...settings} className="products-slider">
            {productSlides.map((product) => (
              <div key={product.id} className=" ">
                <div
                  className="relative h-[250px] md:h-[320px] 2xl:h-[515px] bg-cover bg-center bg-no-repeat flex justify-center items-end pb-[43px]"
                  style={{ backgroundImage: `url(${product.imgSlide})` }}
                >
                  <h4 className="text-sm lg:text-[18px] font-semibold bg-[#1B2022] px-[14px] py-[7px] text-white">
                    {product.title}
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
 <div data-aos="fade-up" className="mt-[60px] md:mt-[80px] xl:mt-[102px] max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[255px]">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 items-center">
    
    <div className="text-center lg:text-left">
      <h4 className="text-lg sm:text-xl md:text-2xl xl:text-[42px] font-medium leading-snug xl:leading-[52px]">
        Diseñar espacios con propósito y precisión
      </h4>

      <div className="mt-6 md:mt-10 xl:mt-[46px]">
        <p className="font-semibold text-lg md:text-[20px] xl:text-[24px]">
          Ubicación:
        </p>
        <span className="text-[#80807E] ff-inter text-sm md:text-base lg:text-[18px]">
          Barcelona, España
        </span>
      </div>

      <div className="mt-4 lg:mt-[20px]">
        <p className="font-semibold text-lg md:text-[20px] xl:text-[24px]">
          Sitio web:
        </p>
        <span className="text-[#80807E] ff-inter text-sm md:text-base lg:text-[18px] break-all">
          www.architectstudio.com
        </span>
      </div>
    </div>

    <div className="col-span-1 lg:col-span-2 flex flex-col items-center">
      <div className="text-center">
        <div className="text-[40px] sm:text-[56px] md:text-[72px] xl:text-[92px] font-medium leading-tight">
          Steve M.
        </div>
        <div className="text-[56px] sm:text-[80px] md:text-[104px] xl:text-[132px] font-medium leading-tight">
          Jarrell
        </div>
      </div>

      <div className="-mt-[30px] md:-mt-[50px] xl:-mt-[60px]">
        <img
          src="/img/professionals/1.png"
          alt="professionals"
          className="w-full max-w-[300px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[350px] xl:max-w-[643px] mx-auto"
        />
      </div>
    </div>

    <div className="text-center lg:text-left lg:self-end lg:pb-24">
      <p className="text-[#80807E] ff-inter text-sm md:text-base lg:text-[18px] leading-relaxed">
        Steve M. Jarrell es un estudio de arquitectura y diseño centrado
        en la creación de espacios cuidados y atemporales que equilibran
        la estética, la funcionalidad y la integridad de los materiales.
        Con experiencia en proyectos residenciales, comerciales y
        hoteleros, el estudio es conocido por su atención al detalle y su
        enfoque refinado del diseño.
      </p>
    </div>

  </div>
</div>


    
     <LoctionDetailSlider/>


 <section data-aos="fade-up" className="mt-[60px] lg:pt-[120px] xl:mt-[130px] bg-[#1B2022] flex items-center px-[15px] xl:px-0 text-[#FFFFFF]  mb-[60px] xl:pb-[120px] pb-[24px] pt-[24px]  lg:pt-[50px] xl:pt-[108px] xl:pb-[119px] xl:mb-[130px] min-h-[450px] md:h-[480px] xl:h-[543px]">
            <div className="max-w-[500px] lg:max-w-[1010px] mx-auto text-center">
              <h5 className=" text-2xl md:text-3xl xl:text-[42px] font-bold mb-[35px] leading-[35px] lg:leading-[54px] ">
              Unimos nuestra experiencia a la creatividad arquitectónica para ofrecer componentes de diseño que elevan el estándar de cada proyecto con calidad, respaldo y distinción
              </h5>
              <Link
                href="#"
                className="bg-[#2B3032] px-[48px] py-[17px] rounded-[70px] uppercase text-[14px]"
              >
               Eleva tu pared
              </Link>
            </div>
          </section>

              <CompanyLogos/> 
     
    </>
  );
}
