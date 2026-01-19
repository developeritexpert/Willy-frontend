"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function LoctionDetailSlider() {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const locationSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    swipe: false, // ✅ IMPORTANT
    draggable: false, // ✅ IMPORTANT
  };

  const imageSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,

    swipe: true,
    draggable: true,
  };

  const imgPlusDetailSlides = [
    {
      imgSlide: [
        "/img/professionals/2.png",
        "/img/banner/1.png",
        "/img/banner/2.png",
     
      ],
      title: "Residencia costera moderna",
      desc: "Explore una selección curada de proyectos completados que muestran cómo este profesional da vida a nuestros materiales. Cada proyecto refleja un equilibrio cuidadoso entre diseño, funcionalidad y artesanía, destacando la versatilidad de nuestras superficies en diferentes espacios y aplicaciones.",
      locations: [
        { title: "Ubicación", desc: "Malibú, California" },
        {
          title: "Materiales utilizados",
          desc: "Losas de porcelana, piedra natural",
        },
        { title: "Tipo de proyecto", desc: "Residencial" },
      ],
    },
    {
      imgSlide: [
        "/img/professionals/2.png",
        "/img/banner/1.png",
        "/img/banner/2.png",
     
      ],
      title: "Apartamento urbano contemporáneo",
      desc: "Este proyecto urbano destaca el uso inteligente de materiales de alto rendimiento para crear espacios modernos y funcionales. La combinación de texturas y acabados aporta elegancia y durabilidad en cada ambiente.",
      locations: [
        { title: "Ubicación", desc: "Ciudad de México, México" },
        {
          title: "Materiales utilizados",
          desc: "Piedra sinterizada, laminados decorativos",
        },
        { title: "Tipo de proyecto", desc: "Residencial" },
      ],
    },
    {
      imgSlide: [
        "/img/professionals/2.png",
        "/img/banner/1.png",
        "/img/banner/2.png",
     
      ],
      title: "Espacio comercial minimalista",
      desc: "Un proyecto comercial que prioriza la estética limpia y la funcionalidad. Los materiales seleccionados refuerzan la identidad de marca y garantizan resistencia en áreas de alto tránsito.",
      locations: [
        { title: "Ubicación", desc: "Madrid, España" },
        {
          title: "Materiales utilizados",
          desc: "Paneles de pared, piedra natural",
        },
        { title: "Tipo de proyecto", desc: "Comercial" },
      ],
    },
  ];

  return (
    <div className="location-slider relative max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 xl:px-[140px] 2xl:px-[240px] mt-[60px] md:mt-[90px] xl:mt-[120px]">
      <Slider ref={sliderRef} {...locationSlider}>
        {imgPlusDetailSlides.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 xl:gap-[60px] items-center z-10">
              <div className="w-full relative">
                <Slider {...imageSliderSettings}>
                  {item.imgSlide.map((elm, indx) => (
                    <div key={indx}>
                      <img
                        src={elm}
                        alt={`slide-${indx}`}
                        className="w-full md:max-w-[500px] xl:max-w-[690px] h-[400px] 2xl:h-[653px]   object-cover mx-auto"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="select-text ">
                <h5 className="text-xl sm:text-2xl md:text-3xl xl:text-[52px] leading-tight xl:leading-[60px]">
                  {item.title}
                </h5>

                <p className="mt-4 md:mt-[20px] mb-6 md:mb-[40px] xl:mb-[59px] text-sm md:text-base text-[#80807E] leading-[24px] md:leading-[28px] max-w-full xl:max-w-[626px]">
                  {item.desc}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 sm:gap-8 xl:gap-[45px]">
                  {item.locations.map((loc, i) => (
                    <div key={i}>
                      <h6 className="font-semibold text-xs md:text-sm lg:text-[20px]">
                        {loc.title}
                      </h6>
                      <p className="text-[#80807E] text-xs md:text-sm lg:text-[16px]">
                        {loc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

   <div className="flex justify-center gap-10  xl:block md:mt-[50px]" >
      <button
          onClick={handlePrev}
          className=" xl:absolute top-[50%] xl:left-[50px] 2xl:left-[114px] w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[75px] lg:h-[75px] border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition  "
        >
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2572 6.59808C10.554 6.59808 9.61561 6.59808 2.94657 6.59808C2.93517 6.63135 2.92377 6.66462 2.92377 6.69789C3.08337 6.77553 3.24297 6.85316 3.40257 6.94188C5.56859 8.0842 6.75419 9.89194 7.19879 12.1987C7.22159 12.2875 7.119 12.3984 7.07339 12.5093C6.97079 12.4427 6.81119 12.3873 6.77699 12.2875C6.59459 11.7662 6.50339 11.2117 6.28679 10.7126C5.30638 8.428 3.56217 7.07497 1.04276 6.66462C0.883161 6.64244 0.769161 6.43172 0.609559 6.29864C1.49876 6.01029 2.28537 5.84393 2.98077 5.52231C5.00998 4.57962 6.18419 2.96042 6.66299 0.842144C6.71999 0.575973 6.68579 0.165628 7.21019 0.343075C6.79979 2.96042 5.86499 4.21364 2.84397 6.14337C3.16317 6.14337 3.37978 6.14337 3.59638 6.14337C9.87781 6.14337 10.44 6.14337 16.7328 6.15446C16.9722 6.15446 17.3598 6.01028 17.2572 6.59808Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="xl:absolute top-[50%] xl:right-[50px] 2xl:right-[149px] w-[36px] h-[36px] md:w-[40px] md:h-[40px] lg:w-[75px] lg:h-[75px] border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.316973 6.35944C7.02021 6.35944 7.95861 6.35944 14.6276 6.35944C14.639 6.32617 14.6504 6.2929 14.6504 6.25963C14.4908 6.182 14.3312 6.10436 14.1716 6.01564C12.0056 4.87332 10.82 3.06558 10.3754 0.758774C10.3526 0.670051 10.4552 0.559147 10.5008 0.448242C10.6034 0.514785 10.763 0.570237 10.7972 0.670051C10.9796 1.1913 11.0708 1.74582 11.2874 2.24489C12.2678 4.52952 14.012 5.88255 16.5315 6.2929C16.6911 6.31508 16.8051 6.5258 16.9647 6.65888C16.0755 6.94724 15.2888 7.11359 14.5934 7.43521C12.5642 8.3779 11.39 9.9971 10.9112 12.1154C10.8542 12.3815 10.8884 12.7919 10.364 12.6144C10.7744 9.9971 11.7092 8.74389 14.7302 6.81415C14.411 6.81415 14.1944 6.81415 13.9778 6.81415C7.69641 6.81415 7.1342 6.81415 0.841374 6.80306C0.601973 6.80306 0.214373 6.94724 0.316973 6.35944Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </svg>
        </button>
   </div>
    </div>
  );
}
