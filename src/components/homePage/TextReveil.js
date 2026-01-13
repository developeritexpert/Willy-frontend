"use client"; // IMPORTANT for Next.js App Router

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextReveal() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const textElements = gsap.utils.toArray(".animate");

      textElements.forEach((el) => {
        const text = el.textContent;
        el.innerHTML = text
          .split("")
          .map((char) =>
            char === " "
              ? `<span>&nbsp;</span>`
              : `<span>${char}</span>`
          )
          .join("");

        const chars = el.querySelectorAll("span");

        gsap.from(chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            scrub: true,
          },
          color: "#00000040",
          stagger: 0.03,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="content-animate mb-[60px] md:mb-[90px]  2xl:mb-[170px]" ref={sectionRef}>
      <div className="max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[184px]">
        <div className="animate  leading-[1.3] md:leading-[1.4] lg:leading-[57px] break-words  font-medium text-center text-2xl md:text-3xl lg:text-[44px] tracking-[-2%]    mx-auto md:max-w-[500px] lg:max-w-[700px] 2xl:max-w-[920px]">
          Obra Stone es un material innovador que combina minerales naturales con tecnología avanzada para crear una superficie resistente y elegante.
        </div>

        <div className="mt-8 lg:mt-12 2xl:mt-[139px] h-[300px] md:h-[400px] lg:h-[550px] xl:h-[796px] relative " style={{ backgroundImage: "url(/img/home/1.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <h5 className="absolute bottom-10  right-0  lg:bottom-[100px] lg:right-[100px] text-lg md:text-xl md:text-2xl lg:text-[40px] font-semibold text-white lg:px-[13px] max-w-[250px] md:max-w-[300px] lg:max-w-[551px]">Su fabricación eficiente y duradera reduce el impacto ambiental a largo plazo.</h5>
        </div>

      </div>
    </section>
  );
}
