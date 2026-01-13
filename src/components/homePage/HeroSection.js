
"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";



export default function HeroSection() {
  const heroSlides = [
    {
      id: 1,
      image: "/img/home/slide1.webp",
      alt: "slide1",
      title: "Obra Paneles de pared",
      description:
        "Paneles decorativos perfectos para realzar cualquier espacio",
      buttonText: "VER MÁS",
    },
    {
      id: 2,
      image: "/img/home/slide1.webp",
      alt: "slide2",
      title: "Diseño que transforma espacios",
      description:
        "Soluciones decorativas modernas para crear ambientes únicos",
      buttonText: "DESCUBRIR",
    },
    {
      id: 1,
      image: "/img/home/slide1.webp",
      alt: "slide1",
      title: "Obra Paneles de pared",
      description:
        "Paneles decorativos perfectos para realzar cualquier espacio",
      buttonText: "VER MÁS",
    },
  ];

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
  };

  return (
    <section className="hero-section overflow-y-hidden max-w-[1920px] mx-auto   relative h-[80vh] 2xl:h-[940px] mb-[60px] md:mb-[90px]  2xl:mb-[106px]">
      <Slider {...settings} className="myslider h-full relative ">
        {heroSlides.map((slide) => (
          <div key={slide.id} >
            <div className="relative h-[80vh] 2xl:h-[940px] w-full ">

              {/* <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                className="object-cover -z-10"
              /> */}

              <img
                src={slide.image}
                alt={slide.alt}

                className="object-cover -z-10 h-full w-full"
              />

              <div
                className="
                  absolute inset-0 flex flex-col justify-end text-white
                  px-[15px] md:px-8 lg:px-12 2xl:px-[236px]
                  pb-20 md:pb-28 lg:pb-32 2xl:pb-40
                "
              >
                <h1
                  className="
                    text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] 2xl:text-[93px]
                    leading-[36px] sm:leading-[46px] md:leading-[62px] lg:leading-[78px] 2xl:leading-[96px]
                    font-medium
                    max-w-full md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[674px]
                  "
                >
                  {slide.title}
                </h1>

                <p
                  className="
                    mt-3 mb-5
                    text-sm sm:text-base
                    max-w-full md:max-w-[420px] 2xl:max-w-[495px]
                    pr-0 lg:pr-20 2xl:pr-48
                  "
                >
                  {slide.description}
                </p>

                <button
                  className="
                    rounded-[70px] bg-white text-[#1B2022]
                    py-3 px-6 sm:py-4 sm:px-8 2xl:py-[17px] 2xl:px-[47px]
                    text-sm sm:text-base
                    w-fit
                  "
                >
                  {slide.buttonText}
                </button>
              </div>

            </div>
          </div>
        ))}
      </Slider>

      {/* Circle in bottom right corner */}
      <div className="contact_containier ">
        <div className="banner-btm-contact">
          <Link href="/contact" className="circle-button">
            <div className="mail-icon relative">
              <img
                src="/hero-conatct.png"
                alt="contact"

              />
              <span className="absolute  ">
                <svg
                  width="66"
                  height="62"
                  viewBox="0 0 66 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_96_41)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.0674 24C40.5803 24 41.0715 24.1971 41.4339 24.5475C41.7963 24.8988 42 25.3739 42 25.8693V36.1307C42 36.6269 41.7963 37.1028 41.4339 37.4525C41.0715 37.8029 40.5803 38 40.0674 38H25.9326C25.4205 38 24.9285 37.8029 24.5661 37.4525C24.2037 37.1028 24 36.6269 24 36.1307V25.8693C24 25.3739 24.2037 24.8988 24.5661 24.5475C24.9285 24.1971 25.4205 24 25.9326 24H40.0674ZM36.7593 27.5228L34.1511 29.5384C33.5053 30.0345 32.448 30.0345 31.8029 29.5384L29.2036 27.5236C28.9346 27.3148 28.5409 27.3569 28.325 27.6178C28.1092 27.878 28.1527 28.2588 28.4217 28.4675L31.0226 30.4832L31.0243 30.4847C32.0969 31.3103 33.8571 31.3103 34.9297 30.4847L34.9305 30.4839L37.5395 28.4683C37.8085 28.2604 37.8528 27.8787 37.6378 27.6186C37.4228 27.3577 37.0283 27.3148 36.7593 27.5228Z"
                      fill="white"
                    />
                  </g>

                  <defs>
                    <filter
                      id="filter0_d_96_41"
                      x="0"
                      y="0"
                      width="66"
                      height="62"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="12" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_96_41"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_96_41"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>

            </div>
            <svg className="text-circle" viewBox="0 0 200 200" fill="white"
            >
              <defs>
                <path id="circlePath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  CONTACT US
                </textPath>
              </text>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

