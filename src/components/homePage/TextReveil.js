"use client"; // IMPORTANT for Next.js App Router

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function TextReveal({desc}) {
  const pathName=usePathname
  const sectionRef = useRef(null);

 useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const textElements = gsap.utils.toArray(".animate");

    textElements.forEach((el) => {
      const text = el.textContent.trim();
      el.innerHTML = "";

      const words = text.split(" ");
      const wordSpans = [];

      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.whiteSpace = "nowrap";
        span.style.display = "inline-block";
        span.style.marginRight = "0.25em";

        el.appendChild(span);
        wordSpans.push(span);
      });

      gsap.from(wordSpans, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          scrub: true,
        },
        color: "#00000040",
        stagger: 0.08,
        ease: "none",
      });
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section className={`mb-[60px] md:mb-[90px] ${pathName=="/"?"2xl:mb-[170px]":"2xl:mb-[120px]"}  max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[184px]`}>
      <div data-aos="fade-up" className="content-animate " ref={sectionRef}>
        <div className=" ">
          <div className={`animate  leading-[1.3] md:leading-[1.4] lg:leading-[57px] flex flex-wrap justify-center text-center font-medium  text-2xl md:text-3xl xl:text-[44px] tracking-[-2%]    mx-auto  lg:max-w-[800px] ${pathName=="/"?"2xl:max-w-[970px]":"2xl:max-w-[1150px]"} `}>
          
            {desc}
          </div>
        </div>
      </div>

{pathName=="/" && (
  <div
        className="mt-8 text-center md:text-start px-[15px] 2xl:pr-[100px] pb-[100px] flex items-end justify-end  lg:mt-12 2xl:mt-[139px] h-[300px] md:h-[400px] lg:h-[550px] xl:h-[796px] relative  bg-fixed bg-no-repeat bg-cover bg-[position:0%_59%]"
        style={{ backgroundImage: "url(/img/home/1.png)" }}
      >
        <h5 className=" text-xl md:text-[25px] lg:text-[40px] font-semibold text-white lg:px-[13px] max-w-[250px] md:max-w-[300px] lg:max-w-[551px]">
          Su fabricación eficiente y duradera reduce el impacto ambiental a
          largo plazo.
        </h5>
      </div>
)}
    
    </section>
  );
}
