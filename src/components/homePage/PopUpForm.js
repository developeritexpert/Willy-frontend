"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


export default function PopUpForm() {
  const [open, setOpen] = useState(false);


useEffect(() => {
  const interId = setTimeout(() => {
    setOpen(true);
  }, 3000);

  return () => clearTimeout(interId);
}, []);



  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
      <>
          <AnimatePresence>


           {open && (
             <motion.div  initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-[1074px] bg-white text-[#1B2022] max-h-[90vh] ">
        
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-10"
          aria-label="Close popup"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.33 0.33c-.44.44-.44 1.16 0 1.6L5.4 7 .33 12.07c-.44.44-.44 1.16 0 1.6.44.44 1.16.44 1.6 0L7 8.6l5.07 5.07c.44.44 1.16.44 1.6 0 .44-.44.44-1.16 0-1.6L8.6 7l5.07-5.07c.44-.44.44-1.16 0-1.6-.44-.44-1.16-.44-1.6 0L7 5.4 1.93.33c-.44-.44-1.16-.44-1.6 0Z"
              fill="#1B2022"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="mx-auto xl:mx-0 max-w-[377px] px-5 pt-16  md:pb-10 text-center 
                          lg:px-0 lg:pt-[62px] lg:pb-[79px] 2xl:ps-[86px]">
            <h5 className="font-bold text-[32px] leading-[38px] lg:text-[56px] lg:leading-[60px]">
              Diseño sin límites
            </h5>

            <span className="my-6 inline-block">
              <svg width="55" height="1" viewBox="0 0 55 1" fill="none">
                <line y1="0.5" x2="55" y2="0.5" stroke="#1B2022" />
              </svg>
            </span>

            <p>
            Descubre nuestras ofertas limitadas en Piedra Sinterizada. La base perfecta para tu hogar, oficina o comercio te espera
            </p>

            <div className="mt-10 flex w-full flex-col items-center space-y-3 uppercase">
              <Link
                href="#"
                className="w-full max-w-[292px] rounded-[70px] bg-[#1B2022] py-4 text-[12px] text-white"
              >
                Ver selección
              </Link>
              <Link
                href="#"
                className="w-full max-w-[292px] rounded-[70px] border border-[#1B2022] py-4 text-[12px] text-[#1B2022]"
              >
                Hablar con un asesor
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:relative  md:pt-6 lg:pt-[37px]">
            <img
              src="/img/pop/logo.png"
              alt="logo"
              className="absolute top-4 lg:top-[37px] left-4 max-w-[60px] max-h-[40px] md:max-h-[36px] md:max-w-[123px]"
            />

            <img
              src="/img/pop/1.png"
              alt="product"
              className="mt-8 max-w-[90%] lg:absolute mx-auto lg:right-0 lg:top-[146px] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </motion.div>
           )}
              </AnimatePresence>

      </>
  );
}
