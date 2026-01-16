"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
export default function Header() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "PRODUCTOS", href: "#" },
    { label: "Dónde comprar", href: "/donde-comprar" },
    { label: "NOSOTROS", href: "/nosotros" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  const pathName = usePathname();
  const [fixed, setFixed] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.header
      initial={{ y: -80, backgroundColor: "rgba(27,32,34,0)" }}
      animate={{
        y: 0,
        backgroundColor: fixed || toggle ? "#1B2022" : "rgba(27,32,34,0)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`text-white py-4 fixed inset-x-0 z-50 ${toggle && "bg-[#1B2022]"
        }`}
    >
      <div className="flex items-center justify-between max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[60px] uppercase">
        <img src="/img/logo.svg" className="w-[120px] 2xl:max-w-[164px]" />
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-10 text-[15px] ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`relative ${pathName == item.href ? "font-black" : "font-medium"
                    }`}
                >
                  {item.label}

                  {pathName == item.href && (
                    <span className="absolute -bottom-[4px] left-0">
                      <svg
                        width="19"
                        height="1"
                        viewBox="0 0 19 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line y1="0.5" x2="19" y2="0.5" stroke="white" />
                      </svg>
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" flex items-center gap-x-[33px]">
          <button>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1332 15.4427C18.0552 13.9054 16.6002 12.6958 14.9017 11.9159C16.3872 10.6762 17.3326 8.82206 17.3326 6.75398C17.3326 3.02951 14.2681 0 10.5006 0C6.73311 0 3.66861 3.02951 3.66861 6.75398C3.66861 8.82192 4.614 10.6762 6.09949 11.9159C4.39994 12.6948 2.94485 13.9055 1.86688 15.4427C0.645476 17.184 0 19.2207 0 21.335C0 21.7024 0.300998 22 0.672655 22C1.04431 22 1.34531 21.7024 1.34531 21.335C1.34531 17.6642 3.67404 14.2824 7.1416 12.9203C7.23506 12.8837 7.31438 12.8279 7.37958 12.7613C8.31521 13.2382 9.37688 13.5079 10.5006 13.5079C11.6242 13.5079 12.6848 13.2382 13.6215 12.7613C13.6867 12.8279 13.7661 12.8837 13.8595 12.9203C17.326 14.2824 19.6547 17.6642 19.6547 21.335C19.6547 21.7024 19.9557 22 20.3273 22C20.699 22 21 21.7024 21 21.335C21 19.2209 20.3546 17.1829 19.1332 15.4427ZM5.01523 6.75398C5.01523 3.76324 7.47654 1.32995 10.5019 1.32995C13.5273 1.32995 15.9886 3.76316 15.9886 6.75398C15.9886 9.7448 13.5273 12.178 10.5019 12.178C7.47654 12.178 5.01523 9.7448 5.01523 6.75398Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="cart relative ">
            <span className="absolute w-[14px] h-[14px] border-1  2xl:border-2 border-black inline-flex items-center justify-center text-black bg-white rounded-full text-[8px]">
              0
            </span>
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5083 5.09656C18.4865 4.86878 18.2996 4.69433 18.0756 4.69433H14.1627V4.24988C14.1627 2.04431 12.4072 0.25 10.2497 0.25C8.09225 0.25 6.33679 2.04446 6.33679 4.24988V4.69433H2.42384C2.19992 4.69433 2.01187 4.86877 1.99122 5.09656L0.25207 23.7633C0.240114 23.8878 0.28033 24.0111 0.362941 24.1044C0.445552 24.1967 0.562944 24.25 0.68467 24.25H19.8153C19.9371 24.25 20.0545 24.1967 20.1371 24.1044C20.2197 24.0111 20.2599 23.8878 20.2479 23.7633L18.5083 5.09656ZM7.206 4.24988C7.206 2.53433 8.57122 1.13861 10.2497 1.13861C11.9281 1.13861 13.2933 2.53416 13.2933 4.24988V4.69433H7.20628L7.206 4.24988ZM1.16238 23.3612L2.81892 5.58336H6.33645V7.4245C5.58862 7.62339 5.03209 8.31339 5.03209 9.13894C5.03209 10.1189 5.81254 10.9167 6.77124 10.9167C7.72995 10.9167 8.51039 10.1189 8.51039 9.13894C8.51039 8.31228 7.95386 7.62338 7.20603 7.4245V5.58336H13.2931V7.4245C12.5452 7.62339 11.9887 8.31339 11.9887 9.13894C11.9887 10.1189 12.7691 10.9167 13.7278 10.9167C14.6865 10.9167 15.467 10.1189 15.467 9.13894C15.467 8.31228 14.9105 7.62338 14.1626 7.4245V5.58336H17.6802L19.3367 23.3612H1.16238ZM6.77108 8.25005C7.25044 8.25005 7.64065 8.64892 7.64065 9.13894C7.64065 9.62895 7.25044 10.0278 6.77108 10.0278C6.29171 10.0278 5.9015 9.62895 5.9015 9.13894C5.9015 8.64892 6.29171 8.25005 6.77108 8.25005ZM13.7277 8.25005C14.207 8.25005 14.5973 8.64892 14.5973 9.13894C14.5973 9.62895 14.207 10.0278 13.7277 10.0278C13.2483 10.0278 12.8581 9.62895 12.8581 9.13894C12.8581 8.64892 13.2483 8.25005 13.7277 8.25005Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </button>
          <button
            className={`uppercase hidden xl:block rounded-[70px] border-[0.8px] border-[#6666666b] py-[14px] px-[31px] ${fixed ? " background: rgba(255, 255, 255, 0.06)" : "bg-transparent"
              } `}
          >
            Personaliza tu pared
          </button>

          <button onClick={() => setToggle(!toggle)} className="xl:hidden">
            <IoMdMenu />
          </button>

        </div>


      </div>

      {/* mobile nav  */}

      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="px-[15px] md:px-8 lg:px-12 xl:hidden"
        >
          <ul className="flex flex-col items-start pt-10 gap-4 lg:gap-6 text-[15px] ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`relative ${pathName == item.href ? "font-black" : "font-medium"
                    }`}
                >
                  {item.label}

                  {pathName == item.href && (
                    <span className="absolute -bottom-[4px] left-0">
                      <svg
                        width="19"
                        height="1"
                        viewBox="0 0 19 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line y1="0.5" x2="19" y2="0.5" stroke="white" />
                      </svg>
                    </span>
                  )}
                </Link>
              </li>
            ))}
            <li>
            <button
              className={`uppercase  rounded-[70px] border-[0.8px] border-[#6666666b] text-sm px-[15px] py-[10px] 2xl:py-[14px] 2xl:px-[31px] ${fixed ? "bg-[#666666]" : "bg-transparent"
                } `}
            >
              Personaliza tu pared
            </button>
            </li>
           
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
