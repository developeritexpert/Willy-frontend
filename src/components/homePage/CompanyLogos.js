"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function CompanyLogos() {
  const imagesSet1 = [
    "/img/home/c1.png",
    "/img/home/c2.png",
    "/img/home/c3.png",
  ];

  const imagesSet2 = [
    "/img/home/c2.png",
    "/img/home/c3.png",
    "/img/home/c1.png",
  ];

  const [currentLogos, setCurrentLogos] = useState(imagesSet1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos((prev) =>
        prev === imagesSet1 ? imagesSet2 : imagesSet1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-[1920px]  mx-auto mb-[60px] md:mb-[90px] 2xl:mb-[160px] px-[15px] md:px-8 lg:px-12"
    >
      <div className="flex flex-col items-center text-center max-w-[899px] mx-auto">
        <span className="font-semibold text-[18px] text-[#B7B9BA]">
          ALIADOS
        </span>
        <h5 className="text-2xl md:text-3xl lg:text-4xl  2xl:text-[53px]  mt-[16px] leading-[100%]">
          Con la confianza de los líderes del sector que impulsan la innovación
          real en los astilleros.
        </h5>
      </div>

      {/* logos  */}
      <div className="grid grid-cols-3 mt-[30px] md:mt-[70px] 2xl:mt-[150px] max-w-[899px] mx-auto h-[80px] md:h-[150px] 2xl:h-[250px]">
        <AnimatePresence mode="wait">
          {currentLogos.map((img, i) => (
            <motion.div
              key={`${img}-${i}`}
              className="border border-slate-200 flex items-center justify-center group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
            >
              <img
                src={img}
                alt="logo"
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
