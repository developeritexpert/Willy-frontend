"use client";
import React, { useRef } from "react";

import Slider from "react-slick";
import Link from "next/link";

const productSlides = [
  {
    id: 1,
    imgSlide: "/img/home/ps1.jpg",
    title: "Laminas Pvc Marmolizadas",
  },
  {
    id: 2,
    imgSlide: "/img/home/ps2.png",
    title: "Laminas Traslúcidas",
  },
  {
    id: 3,
    imgSlide: "/img/home/ps3.png",
    title: "Marmol Y Cuarcita Traslúcida",
  },
  {
    id: 4,
    imgSlide: "/img/home/ps4.png",
    title: "Piedra Sinterizada Obra...",
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

  speed: 500,

  slidesToShow: 3,
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
        slidesToShow: 3,
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
export default function ProductsSlide() {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="ProductsSlide overflow-x-hidden max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12  2xl:px-[240px] mb-[60px] md:mb-[90px]  2xl:mb-[191px]">
      <div className="flex justify-between items-center mb-[32px] md:mb-[40px] 2xl:mb-[47px]">
        <h5 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-[53px] font-medium">
          Productos Más Vendidos
        </h5>
        <div className="flex items-center gap-[16px]">
          <button
            onClick={handlePrev}
            className="w-[40px] h-[40px] 2xl:w-[75px] 2xl:h-[75px] border-[0.6px] border-[#000000] rounded-full flex justify-center items-center text-black hover:bg-[#2B3032] hover:text-white transition-colors"
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
                stroke-width="0.6"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-[40px] h-[40px] 2xl:w-[75px] 2xl:h-[75px] border-[0.6px] border-[#000000] rounded-full flex justify-center items-center text-black hover:bg-[#2B3032] hover:text-white transition-colors"
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
                stroke-width="0.6"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="slider-wrapper relative ">
        <Slider {...settings} className="products-slider" ref={sliderRef}>
          {productSlides.map((product) => (
            <div key={product.id} className="px-3 group ">
              <div className="pb-[31px]  flex flex-col items-center">
                <img
                  src={product.imgSlide}
                  alt={product.title}
                  className="h-[250px] w-full  md:h-[320x] 2xl:h-[397px] 2xl:w-[432px] object-cover object-center"
                />
                <h4 className="my-[12px] lg:my-[20px] text-xl lg:text-[26px] font-medium text-center">
                  {product.title}
                </h4>
                <Link
                  href="#"
                  className=" uppercase text-[13px] rounded-[70px] py-[14px] px-[38px] bg-[#2B3032] text-[#fff] lg:bg-transparent transition-colors  lg:text-[#000] lg:group-hover:bg-[#2B3032] lg:group-hover:text-[#ffff]"
                >
                  Ver producto{" "}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
