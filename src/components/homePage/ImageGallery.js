"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ImageGallery() {
  const floating = (delay = 0) => ({
    animate: {
      y: [0, -12, 0],
      x: [0, 6, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <section
      data-aos="fade-up"
      className="mb-[60px] md:mb-[90px]  2xl:mb-[125px] bg-[#1B2022]"
    >
      <div className="flex items-center justify-center relative h-[350px] md:h-[500px] xl:h-[939px] max-w-[1920px] mx-auto px-5 md:px-8 lg:px-12 2xl:px-[90px]">
        <div
          className="text-lg md:text-3xl xl:text-[46px] relative z-10  text-white font-bold text-center max-w-[300px] md:max-w-[500px]  xl:max-w-[771px] 2xl:leading-[58px]"
        >
          <h5 className="mb-[40px] ">
            {" "}
            C¿Es posible unir resistencia total, estética de vanguardia y un presupuesto inteligente?{" "}
            <span className="text-[#ffffff33]">
              {" "}
              En OBRA, esa es nuestra especialidad: paneles impermeables{" "}
            </span>{" "}
           que elevan tu diseño sin comprometer tu inversión
          </h5>
          <Link
            href=""
            className=" rounded-[50px]  2xl:rounded-[70px] bg-[#2B3032] text-[14px] px-[39px] py-[17px]"
          >
            Decora tu pared
          </Link>
        </div>

        <div className="absolute inset-0 px-4 py-6 md:px-10 md:py-10 xl:px-[89px] xl:py-[139px]">
          <motion.img
            src="/img/home/g1.png"
            alt="gallery1"
            className="w-[50px] h-[50px] md:w-[140px] md:h-[100px] lg:w-[200px] lg:h-[170px] xl:w-[254px] xl:h-[212px] rounded-[13px] absolute object-cover top-[8%] left-[6%] md:top-[10%] md:left-[4%] xl:top-[10%] xl:left-[12%] 2xl:top-[139px] 2xl:left-[234px]"
            {...floating(0)}
          />

          <motion.img
            src="/img/home/g2.jpg"
            alt="gallery1"
            className="w-[20px] h-[20px] md:w-[120px] md:h-[120px] xl:w-[147px] xl:h-[147px] rounded-[13px] absolute right-[45%] md:right-[40%] xl:right-[40%] object-cover top-[10%] md:top-[4%] 2xl:right-[438px] top-[133px]"
            {...floating(0.5)}
          />

          <motion.img
            src="/img/home/g3.jpg"
            alt="gallery1"
            className="w-[50px] h-[50px] md:w-[140px] md:h-[100px] lg:w-[190px] lg:h-[190px] xl:w-[228px] xl:h-[228px] rounded-[13px] absolute right-[6%] md:right-[4%] xl:right-[10%] object-cover top-[10%] md:top-[10%] 2xl:right-[90px] 2xl:top-[108px]"
            {...floating(1)}
          />

          <motion.img
            src="/img/home/g4.png"
            alt="gallery1"
            className="w-[50px] h-[50px] md:w-[120px] md:h-[120px] lg:w-[230px] lg:h-[190px] xl:w-[297px] xl:h-[247px] rounded-[13px] absolute bottom-[4%] left-[8%] md:bottom-[5%] md:left-[10%] xl:bottom-[168px] xl:left-[89px] object-cover [object-position:0%_90%] 2xl:left-[89px] 2xl:bottom-[168px]"
            {...floating(1.5)}
          />

          <motion.img
            src="/img/home/g5.jpg"
            alt="gallery1"
            className="w-[50px] h-[50px] md:w-[120px] md:h-[120px] lg:w-[200px] lg:h-[190px] xl:w-[228px] xl:h-[227px] rounded-[13px] absolute bottom-[4%] right-[12%] md:bottom-[5%] md:right-[4%] xl:bottom-[127px] xl:right-[235px] object-cover 2xl:right-[235px] 2xl:bottom-[127px]"
            {...floating(2)}
          />
        </div>
      </div>
    </section>
  );
}

/* Rectangle 3 */
