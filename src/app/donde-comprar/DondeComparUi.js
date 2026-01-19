import React from "react";
import Link from "next/link";
export default function DondeComparUi() {
  const itemData = [
    {
      id: "1",
      title: "Estudio de diseño Obra",
      location: "245 Madison Ave, Nueva York, NY 10016, EE. UU.",
      phNum: "+1 212-555-0181",
      mail: "newyork@obra-surfaces.com",
      imgUrl:"/img/product/1.png"
    },
    {
      id: "2",
      title: "Centro de Experiencias Obra",
      location: "780 S Alameda St, Los Ángeles, CA 90021, EE. UU.",
      phNum: "+1 323-555-0246",
      mail: "losangeles@obra-surfaces.com",
            imgUrl:"/img/product/2.png"

    },
    {
      id: "3",
      title: "Sala de exposiciones Obra",
      location: "1100 Brickell Ave, Miami, FL 33131, EE. UU.",
      phNum: "+1 305-555-0379",
      mail: "miami@obra-surfaces.com",
            imgUrl:"/img/product/3.png"

    },
    {
      id: "4",
      title: "Galería Obra",
      location: "312 W Superior St, Chicago, IL 60654, EE. UU.",
      phNum: "+1 312-555-0412",
      mail: "chicago@obra-surfaces.com",
                  imgUrl:"/img/product/4.png"

    },
    {
      id: "5",
      title: "Obra Laboratorio de Superficies",
      location: "500 N Akard St, Dallas, TX 75201, EE. UU.",
      phNum: "+1 214-555-0598",
      mail: "dallas@obra-surfaces.com",
                  imgUrl:"/img/product/5.png"

    },
    {
      id: "6",
      title: "Sala de exposición insignia de Obra",
      location: "88 Clerkenwell Rd, Londres EC1M 5RJ, Reino Unido",
      phNum: "+44 20 5555 1624",
      mail: "london@obra-surfaces.com",
                  imgUrl:"/img/product/6.png"

    },
    {
      id: "7",
      title: "Estudio Obra",
      location: "Calle Pallars, 180, 08005 Barcelona, España",
      phNum: "+34 93 555 2946",
      mail: "barcelona@obra-surfaces.com",
                  imgUrl:"/img/product/7.png"

    },
    {
      id: "8",
      title: "Espacio de Experiencia Obra",
      location: "Al Serkal Avenue, Al Quoz 1, Dubái, Emiratos Árabes Unidos",
      phNum: "+971 4 555 7821",
      mail: "dubai@obra-surfaces.com",
                  imgUrl:"/img/product/8.png"

    },
    {
      id: "9",
      title: "Sala de exposiciones Obra",
      location: "Av. Presidente Masaryk 350, Polanco, CDMX 11560, México",
      phNum: "+52 55 5555 9184",
      mail: "mexico@obra-surfaces.com",
                  imgUrl:"/img/product/9.png"

    },
  ];

  return (
    <>
      <div
        data-aos="fade-up"
        style={{ backgroundImage: `url(/img/banner/1.png)` }}
        className="px-[15px] flex justify-center items-center h-[550px]  2xl:h-[660px] max-w-[1920px] mx-auto 2xl:bg-center bg-cover  bg-[position:25%_0%]"
      >
        <div className="text-[#FFFFFF] text-center max-w-[836px]">
          <h4 className="  text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] 2xl:text-[62px] font-medium leading-[40px] md:leading-[70px] lg:leading-[72px]">
           Obra, cerca de ti
          </h4>
          <p className="text-[18px] xl:text-[22px] font-normal leading-[30px] mt-[13px] ff-satoshi mx-auto  2xl:max-w-[722px] ">
            Introduce tu ciudad o código postal para encontrar tiendas
            autorizadas de Obra y ver nuestros productos en persona.
          </p>
          <div className="max-w-[550px] mx-auto mt-[25px] relative">
            <input
              type="text"
              className="py-[19px] px-[20px] bg-white w-full text-[#747474]"
              placeholder="Please, enter a city and zip code"
            />
            <span className="absolute right-[20px] top-[18px] bottom-[18px]">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.506 8.6853C10.4026 8.6853 8.69141 10.3967 8.69141 12.4999C8.69141 14.603 10.4026 16.3144 12.506 16.3144C14.6094 16.3144 16.3206 14.603 16.3206 12.4999C16.3206 10.3967 14.6094 8.6853 12.506 8.6853ZM12.506 15.8247C10.6726 15.8247 9.1812 14.3333 9.1812 12.4999C9.1812 10.6665 10.6726 9.1751 12.506 9.1751C14.3394 9.1751 15.8308 10.6665 15.8308 12.4999C15.8308 14.3333 14.3394 15.8247 12.506 15.8247Z"
                  fill="#1B2022"
                  stroke="#1B2022"
                />
                <path
                  d="M24.2551 12.2551H22.588C22.4582 6.882 18.1182 2.54205 12.7449 2.41231V0.744898C12.7449 0.609534 12.6354 0.5 12.5 0.5C12.3646 0.5 12.2551 0.609534 12.2551 0.744898V2.41231C6.88179 2.54205 2.54184 6.882 2.41204 12.2551H0.744898C0.609534 12.2551 0.5 12.3646 0.5 12.5C0.5 12.6354 0.609534 12.7449 0.744898 12.7449H2.41204C2.54184 18.1181 6.88179 22.4579 12.2551 22.5877V24.2551C12.2551 24.3905 12.3646 24.5 12.5 24.5C12.6354 24.5 12.7449 24.3905 12.7449 24.2551V22.5877C18.1182 22.4579 22.4582 18.1181 22.588 12.7449H24.2551C24.3905 12.7449 24.5 12.6354 24.5 12.5C24.5 12.3646 24.3905 12.2551 24.2551 12.2551ZM12.7449 22.0979V20.5768C12.7449 20.4415 12.6354 20.332 12.5 20.332C12.3646 20.332 12.2551 20.4415 12.2551 20.5768V22.0979C7.1518 21.9684 3.03137 17.8482 2.90184 12.7449H4.42315C4.55851 12.7449 4.66805 12.6354 4.66805 12.5C4.66805 12.3646 4.55851 12.2551 4.42315 12.2551H2.90184C3.03137 7.15183 7.1518 3.03161 12.2551 2.9021V4.42315C12.2551 4.55851 12.3646 4.66805 12.5 4.66805C12.6354 4.66805 12.7449 4.55851 12.7449 4.42315V2.9021C17.8482 3.03161 21.9686 7.15183 22.0982 12.2551H20.5768C20.4415 12.2551 20.332 12.3646 20.332 12.5C20.332 12.6354 20.4415 12.7449 20.5768 12.7449H22.0982C21.9686 17.8482 17.8482 21.9684 12.7449 22.0979Z"
                  fill="#1B2022"
                  stroke="#1B2022"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <section  className="max-w-[1920px] mx-auto px-[12px] md:px-8 lg:px-12 2xl:px-[240px]">
        <div  data-aos="fade-up" className="mt-[60px] xl:mt-[116px] text-center">
          <h5 className="text-2xl md:text-3xl xl:text-[53px] font-medium">
            Nuestros socios comerciales
          </h5>
          <p className="text-[#2B3032] ff-satoshi mt-[9px] text-[18px] xl:text-[22px] font-normal">
            Tiendas de confianza donde puedes encontrar nuestros productos
          </p>
        </div>
        {/* filter */}

        <div data-aos="fade-up" className="flex flex-col  gap-y-4 md:flex-row items-center justify-between ff-satoshi text-sm lg:text-[22px] text-[#2B3032] mt-[60px] xl:mt-[92px]">
          <p>Filtros por estado/región</p>
          <p>Mostrando un total de 9 tiendas</p>
        </div>

        {/* products  */}
        <div data-aos="fade-down" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] mt-[60px] md:mt-[90px] xl:mt-[124px]">
          {itemData.map((elm, idx) => (
            <div
              key={idx}
              className="border flex flex-col border-[#1B20220F] px-[12px] pb-[18px] pt-[15px] lg:px-[20px] lg:pb-[47px] lg:pt-[20px]"
            >
              <img
                src={elm.imgUrl}
                alt="product1"
                className="mb-[20px] max-h-[260px] max-w-[420px]"
              />
              <div className="">
                <h6 className="text-[18px] lg:text-[22px] font-medium text-[#1B2022] mb-[18px]">
                  {elm.title}
                </h6>
                <div className="flex items-baseline  gap-[14px] mb-[21px]">
                  <span>
                    <svg
                      width="13"
                      height="17"
                      viewBox="0 0 13 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49991 0C2.91057 0 0 2.82372 0 6.30595C0 10.446 4.44513 15.2491 5.98361 16.7878C6.26619 17.0707 6.73381 17.0707 7.01639 16.7878C8.55469 15.2499 13 10.446 13 6.30595C13 2.82372 10.0892 0 6.49991 0ZM6.49991 9.10859C4.90473 9.10859 3.61106 7.85352 3.61106 6.30595C3.61106 4.75837 4.90473 3.5033 6.49991 3.5033C8.09508 3.5033 9.38875 4.75837 9.38875 6.30595C9.38875 7.8544 8.09508 9.10859 6.49991 9.10859Z"
                        fill="#1B2022"
                      />
                    </svg>
                  </span>
                  <p className="text-[#747474] text-sm lg:text-[16px] ff-satoshi max-w-[318px]">
                    {elm.location}
                  </p>
                </div>
                <div className="flex items-baseline gap-[14px] mb-[23px]">
                  <span>
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.672 12.4637L14.5817 12.2858C14.3289 11.6986 11.2231 10.809 10.9703 10.7912L10.7717 10.809C10.3924 10.8801 9.97713 11.2182 9.1646 11.9121C9.00211 12.0544 8.78534 12.09 8.58671 11.9832C7.52137 11.396 6.22126 10.2217 5.57117 9.51006C4.86695 8.74506 4.01826 7.48174 3.62101 6.46752C3.54884 6.2718 3.62101 6.05833 3.76548 5.91599C4.68636 5.09748 5.08362 4.70618 5.11976 4.2791C5.13778 4.03002 4.59617 0.880778 4.03627 0.57831L3.87379 0.471575C3.51268 0.240238 2.97093 -0.097841 2.37505 0.0267684C2.23058 0.0623879 2.08611 0.115755 1.95977 0.18687C1.56264 0.436207 0.569471 1.11235 0.118044 1.98408C-0.152761 2.53561 -0.279212 7.53527 3.51278 11.752C7.26865 15.9332 11.9093 16.1111 12.5955 15.9688H12.6135L12.6677 15.9511C13.6067 15.613 14.4012 14.7412 14.7081 14.3675C15.2679 13.7093 14.8888 12.9085 14.672 12.4637L14.672 12.4637Z"
                        fill="#1B2022"
                      />
                    </svg>
                  </span>
                  <p className="text-[#747474] text-sm lg:text-[16px] ff-satoshi max-w-[318px]">
                    {elm.phNum}
                  </p>
                </div>
                <div className="flex items-baseline  gap-[14px] mb-[23px]">
                  <span>
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.836473 0.342867C1.1555 0.121056 1.53557 0 1.92853 0H16.0714C16.4643 0 16.8444 0.121062 17.1634 0.342867L9.41295 6.92503C9.17428 7.12815 8.82553 7.12815 8.58688 6.92503L0.836473 0.342867ZM17.9212 1.39668C17.9727 1.57462 18 1.76068 18 1.95V11.05C18 11.5676 17.7967 12.0632 17.4351 12.4288C17.0735 12.7944 16.5833 13 16.0714 13H1.92857C1.41669 13 0.926516 12.7944 0.564912 12.4288C0.203307 12.0632 0 11.5676 0 11.05V1.95C0 1.76069 0.0273208 1.57462 0.0787494 1.39668L7.7593 7.92018C8.47689 8.52956 9.52313 8.52956 10.2406 7.92018L17.9212 1.39668Z"
                        fill="#1B2022"
                      />
                    </svg>
                  </span>
                  <p className="text-[#747474] text-sm lg:text-[16px] ff-satoshi max-w-[318px]">
                    {elm.mail}
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className="flex w-fit my-auto text-[#FFFFFF] uppercase ff-satoshi font-medium items-center gap-[4px] bg-[#2B3032] rounded-[70px] px-[21px] py-[12px] text-[12px]"
              >
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2504 0.0438496L0.328407 5.58434C0.104291 5.67621 -0.0289635 5.90941 0.00535731 6.14969C0.0396807 6.38794 0.225434 6.5757 0.463674 6.61307L6.52589 7.47421L7.38701 13.5365C7.42436 13.7747 7.61213 13.9595 7.85039 13.9948C7.87361 13.9989 7.89683 14.0009 7.92005 13.9999C8.13609 13.9989 8.33092 13.8696 8.41574 13.6718L13.9562 0.749639C14.043 0.54773 13.9986 0.312509 13.8431 0.15703C13.6876 0.00155058 13.4523 -0.0429716 13.2504 0.0438496Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Obtener indicaciones
              </Link>
            </div>
          ))}
        </div>
 

         <div data-aos="fade-right" className="mt-[40px] mb-[90px] lg:mt-[65px] lg:mb-[130px] flex justify-center ">
             <Link href="#"  className="uppercase px-[46px] py-[14px] bg-[#2B3032] text-[#FFFFFF] rounded-[70px] font-medium">Cargar más</Link>
         </div>

      </section>
    </>
  );
}
