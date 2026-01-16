"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";



export default function Products() {
  const products = [
    {
      id: 1,
      title: "Piedras Naturales",
      image: "/img/home/product1.jpg",
      alt: "product 1",
    },
    {
      id: 2,
      title: "Piedras Sinterizadas",
      image: "/img/home/product2.jpg",
      alt: "product 2",
    },
    {
      id: 3,
      title: "PU Stones",
      image: "/img/home/product3.jpg",
      alt: "product 3",
    },
    {
      id: 4,
      title: "Piedras Naturales",
      image: "/img/home/product4.jpg",
      alt: "product 4",
    },
    {
      id: 5,
      title: "Piedras Naturales",
      image: "/img/home/product1.jpg",
      alt: "product 5",
    },
    {
      id: 6,
      title: "Piedras Sinterizadas",
      image: "/img/home/product2.jpg",
      alt: "product 6",
    },
    {
      id: 7,
      title: "PU Stones",
      image: "/img/home/product3.jpg",
      alt: "product 7",
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
    <section data-aos="fade-right" className="products overflow-hidden mb-[60px] md:mb-[90px]  2xl:mb-[151px]">
      <div className="max-w-[1920px] px-[15px] md:px-8 lg:px-12 2xl:px-[60px] overflow-hidden mx-auto">
        
        <div className="flex items-center justify-between mb-[25px]">
          <h4 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-[53px] font-medium">
            Productos
          </h4>

          <Link href="#" className="flex items-center gap-x-[7px] text-[#1B2022]">
            <svg
            className=""
              width="42"
              height="1"
              viewBox="0 0 42 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="42" y1="0.5" x2="0" y2="0.5" stroke="#1B2022" />
            </svg>
            Ver todas las colecciones
          </Link>
        </div>

        <div className="slider-wrapper relative ">
          <Slider {...settings} className="products-slider">
            {products.map((product) => (
              <div key={product.id} className="px-3">
                <div className="relative h-[350px] md:h-[400px] 2xl:h-[586px] w-full">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="h-full w-full object-cover"
                  />

                  <h6 className="absolute lg:text-nowrap bottom-10 left-1/2 -translate-x-1/2 text-white text-[22px] 2xl:text-[30px] font-medium text-center">
                    {product.title}
                  </h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
