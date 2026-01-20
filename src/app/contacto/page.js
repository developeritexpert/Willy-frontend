import Banner from "@/components/contactPage/Banner";
import React from "react";

export default function page() {
  const buttons = [
    { label: "Particular", active: false },
    { label: "Profesional", active: false },
    { label: "Aliado Comercial", active: true },
  ];

  return (
    <>
      <Banner
        title="Hagamos realidad tu próxima OBRA."
        desc="Sprechen Sie mit unseren Spezialisten über Steinlösungen für Ihren
          Raum."
        img="/img/banner/1.png"
      />
      <main className="max-w-[1920px] mx-auto  ">
        <section
          data-aos="fade-right"
          className="mt-[60px] lg:mt-[120px]  grid grid-cols-1 md:grid-cols-3 gap-[15px] lg:gap-[29px] px-[15px] md:px-8 lg:px-12 2xl:px-[240px]"
        >
          <a
            href="https://maps.app.goo.gl/hkDS1jx1izMre3sy6"
            className="flex flex-col items-center text-center px-5 py-3  lg:px-[57px] lg:pt-[50px] lg:pb-[60px]  border border-[#1B20220F] bg-[#1B202205]"
          >
            <button className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] rounded-full bg-[#1B2022] flex items-center justify-center">
              <svg
                className="w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9989 32.2772C20.7343 32.2772 21.3322 31.6793 21.3322 30.9439V19.3021C26.0531 18.6521 29.7009 14.5979 29.7009 9.702C29.7009 4.35206 25.3487 0 19.9989 0C14.649 0 10.2969 4.35216 10.2969 9.702C10.2969 14.5979 13.9448 18.6461 18.6655 19.3021V30.9439C18.6655 31.6793 19.2635 32.2772 19.9989 32.2772ZM12.9636 9.702C12.9636 5.82488 16.122 2.6667 19.9989 2.6667C23.8758 2.6667 27.0342 5.82509 27.0342 9.702C27.0342 13.5791 23.8758 16.7373 19.9989 16.7373C16.122 16.7373 12.9636 13.5789 12.9636 9.702Z"
                  fill="white"
                />
                <path
                  d="M27.8881 27.5038C27.1568 27.408 26.4901 27.9309 26.4005 28.6622C26.3089 29.3934 26.8276 30.0601 27.5589 30.1497C34.9296 31.0768 37.334 32.9664 37.334 33.5144C37.334 34.656 31.4357 37.3332 20.0004 37.3332C8.56503 37.3332 2.66681 34.6561 2.66681 33.5144C2.66681 32.9644 5.07308 31.0727 12.4419 30.1497C13.1731 30.0581 13.6898 29.3914 13.6002 28.6622C13.5086 27.9309 12.8419 27.408 12.1127 27.5038C7.5897 28.0684 0 29.6059 0 33.5146C0 37.9688 10.3687 40 20.0003 40C29.6319 40 40.0005 37.9729 40.0005 33.5146C40.0005 29.6062 32.4113 28.0686 27.8881 27.5038Z"
                  fill="white"
                />
              </svg>
            </button>
            <h5 className="text-[22px] lg:text-[28px] xl:text-[32px] font-medium text-[#1B2022]">
              Dirección
            </h5>
            <p className="text-[#747474] text-[18px] lg:text-[20px] font-medium ff-satoshi">
              San Antonio de Los Altos, Calle Los Llaneros, Centro Industrial
              Mapama, Galpón 10, Sector Las Minas
            </p>
          </a>
          <div className="flex flex-col items-center text-center px-5 py-3  lg:px-[57px] lg:pt-[50px] lg:pb-[60px]  border border-[#1B20220F] bg-[#1B202205]">
            <button className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] rounded-full bg-[#1B2022] flex items-center justify-center">
              <svg
                className="w-[20px] h-[20px] xl:w-[37px] xl:h-[37px]"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.7084 23.0074C32.3141 21.6292 30.5973 20.7144 28.8779 20.4372C27.042 20.1405 25.4145 20.5868 24.2905 21.6978C23.8861 22.0975 23.2361 22.1834 22.3628 21.9528C19.4451 21.1803 15.384 17.1779 14.6021 14.3034C14.3664 13.4377 14.4557 12.7902 14.8676 12.3831C17.098 10.1783 16.5025 6.00435 13.5403 3.07616C10.3646 -0.0629872 6.69546 -0.573099 3.72812 1.71502C0.778248 3.9909 -0.896404 8.87855 1.31659 12.5256C7.29578 22.3869 15.1282 30.1268 24.5929 35.5299C25.5283 36.0621 26.5653 36.3 27.6271 36.3C30.319 36.3 33.1498 34.777 34.7577 32.7047C37.1395 29.6367 36.745 26.0145 33.7058 23.0104L33.7084 23.0074ZM33.2618 31.5666C31.3266 34.0584 27.7193 35.1545 25.5412 33.9112C16.3565 28.6703 8.75462 21.1512 2.9419 11.5642C1.26972 8.80525 2.62929 4.935 4.89689 3.1865C5.78506 2.50229 6.73528 2.16138 7.71777 2.16138C9.17908 2.16138 10.7098 2.91182 12.2083 4.39312C13.3273 5.49672 14.0617 6.83086 14.28 8.1503C14.4809 9.35448 14.2154 10.3869 13.5332 11.0614C12.898 11.6892 12.253 12.8443 12.7789 14.7866C13.7465 18.355 18.252 22.7965 21.874 23.7552C23.834 24.2727 24.9976 23.6399 25.6278 23.017C27.0965 21.5651 30.1854 22.166 32.371 24.329C34.7106 26.6417 35.0356 29.2805 33.2592 31.566L33.2618 31.5666ZM19.475 10.3874C19.4403 9.87243 19.8348 9.42856 20.3558 9.39422C22.0205 9.28386 23.6579 9.88962 24.8414 11.0594C26.0248 12.2292 26.6376 13.8454 26.5259 15.4935C26.4937 15.9864 26.0769 16.3641 25.5831 16.3641C25.5608 16.3641 25.541 16.3641 25.5186 16.3616C24.9976 16.3273 24.6032 15.8809 24.6379 15.3684C24.7123 14.2574 24.3005 13.1685 23.5016 12.3813C22.7052 11.5941 21.6036 11.1845 20.4798 11.2581C19.9612 11.2924 19.5098 10.9024 19.475 10.3874ZM19.8224 6.54444C19.7876 6.02943 20.1821 5.58556 20.7006 5.55122C23.328 5.37709 25.9008 6.33355 27.7614 8.1729C29.6221 10.0123 30.5897 12.5555 30.4136 15.15C30.3813 15.6429 29.9645 16.0206 29.4708 16.0206C29.4484 16.0206 29.4286 16.0206 29.4063 16.0181C28.8853 15.9838 28.4908 15.5399 28.5255 15.0249C28.6645 12.9673 27.8978 10.9514 26.4241 9.49216C24.948 8.03296 22.9086 7.27517 20.827 7.41492C20.306 7.45171 19.857 7.05931 19.8223 6.54676L19.8224 6.54444ZM20.2144 2.72843C20.1796 2.21342 20.5741 1.76955 21.0951 1.73521C24.6553 1.49732 28.1508 2.79467 30.6767 5.2913C33.2024 7.78792 34.5148 11.2385 34.2741 14.7602C34.2419 15.2532 33.8251 15.6308 33.3314 15.6308C33.309 15.6308 33.2892 15.6308 33.2669 15.6284C32.7458 15.594 32.3514 15.1477 32.3861 14.6351C32.5871 11.6505 31.4756 8.7247 29.337 6.61086C27.1984 4.49439 24.2361 3.39569 21.2193 3.59678C20.7008 3.63357 20.2493 3.24117 20.2146 2.72617L20.2144 2.72843Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.6"
                />
              </svg>
            </button>
            <h5 className="text-[22px] lg:text-[28px] xl:text-[32px] font-medium text-[#1B2022]">
              Número de teléfono
            </h5>
            <a
              href="tel:+5804125555555"
              className="text-[#747474] text-[20px] font-medium ff-satoshi"
            >
              +58 0412 555 55 55
            </a>
          </div>
          <div className="flex flex-col items-center text-center px-5 py-3  lg:px-[57px] lg:pt-[50px] lg:pb-[60px]  border border-[#1B20220F] bg-[#1B202205]">
            <button className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] rounded-full bg-[#1B2022] flex items-center justify-center">
              <svg
                className="w-[20px] h-[20px] xl:w-[37px] xl:h-[28px]"
                viewBox="0 0 37 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74359 0.75H30.7564C32.1298 0.75 33.3785 1.30596 34.2839 2.20009C35.1879 3.09423 35.75 4.33083 35.75 5.68922V21.8108C35.75 23.1692 35.1879 24.4043 34.2839 25.2999C33.38 26.194 32.1298 26.75 30.7564 26.75H5.74359C4.37025 26.75 3.12148 26.194 2.21606 25.2999C1.31208 24.4058 0.75 23.1706 0.75 21.8108V5.68922C0.75 4.33083 1.31208 3.09566 2.21606 2.20009C3.12003 1.30596 4.37025 0.75 5.74359 0.75ZM30.2609 21.1102C30.6709 21.1102 31.0027 21.4384 31.0027 21.8439C31.0027 22.2494 30.6709 22.5775 30.2609 22.5775H25.7223C25.3123 22.5775 24.9806 22.2494 24.9806 21.8439C24.9806 21.4383 25.3123 21.1102 25.7223 21.1102H30.2609ZM4.59762 5.86683C4.29195 5.59744 4.26443 5.13462 4.53678 4.83228C4.80913 4.52993 5.27706 4.50271 5.58272 4.7721L16.9359 14.7538C17.3792 15.1435 17.9312 15.3384 18.4831 15.3384C19.0351 15.3384 19.587 15.1435 20.0303 14.7538L30.9159 5.18477C31.2216 4.91539 31.6909 4.94261 31.9618 5.24496C32.2342 5.5473 32.2067 6.01155 31.901 6.27951L21.0154 15.8485C20.2897 16.4861 19.3857 16.8057 18.4832 16.8057C17.5806 16.8057 16.6766 16.4861 15.9509 15.8485L4.59762 5.86683ZM30.7564 2.21722H5.74359C4.77875 2.21722 3.90085 2.60841 3.26489 3.23744C2.62894 3.86647 2.23345 4.73481 2.23345 5.68914V21.8107C2.23345 22.765 2.62894 23.6334 3.26489 24.2624C3.90085 24.8914 4.77875 25.2826 5.74359 25.2826H30.7564C31.7212 25.2826 32.5992 24.8914 33.2351 24.2624C33.8711 23.6334 34.2665 22.765 34.2665 21.8107V5.68914C34.2665 4.73481 33.8711 3.86647 33.2351 3.23744C32.5992 2.60841 31.7212 2.21722 30.7564 2.21722Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </button>
            <h5 className="text-[22px] lg:text-[28px] xl:text-[32px] font-medium text-[#1B2022]">
              Correo electrónico
            </h5>
            <p className="text-[#747474] text-[20px] font-medium ff-satoshi">
              support@obra.com
            </p>
          </div>
        </section>

        <section
          className="mt-[40px] md:mt-[60px] 2xl:mt-[120px]
   max-w-[746px] mx-auto text-center md:px-8 lg:px-12 2xl:px-[0px]"
        >
          <h5 className="text-2xl md:text-3xl xl:text-[44px]">
            ¿Es una consulta comercial o desea ser distribuidor?
          </h5>
          <div className="mt-[30px] flex flex-wrap justify-center gap-[15px]">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`border border-[#2B3032] rounded-[70px] py-[14px]   w-[190px] text-center
        ${btn.active ? "bg-[#2B3032] text-white" : ""}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="
  mx-auto
  mt-[40px] md:mt-[60px] 2xl:mt-[210px]
  mb-[40px] md:mb-[80px] 2xl:mb-[100px]
  max-w-[990px]
  px-[15px] md:px-8 lg:px-[49px]
  py-6 lg:pt-[42px] lg:pb-[50px]
  border border-[#1B20220F]
"
        >
          <h5 className="text-[22px] md:text-[28px] xl:text-[32px] font-medium text-center">
            Envíenos un mensaje
          </h5>

          <form className="mt-[20px] xl:mt-[28px] ff-satoshi">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px]">
              {["Nombre", "Apellido", "Correo electrónico", "Teléfono"].map(
                (label, i) => (
                  <label
                    key={i}
                    className="text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]"
                  >
                    {label}
                    <input
                      type="text"
                      placeholder={
                        label === "Teléfono" ? "+58 0412 555 55 55" : ""
                      }
                      className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[16px]"
                    />
                  </label>
                ),
              )}
            </div>

            {/* Company & Country */}
            <div className="grid grid-cols-1 lg:flex  gap-[16px] md:gap-[20px] mt-[20px]">
              <label className="lg:w-full text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]">
                Dirección
                <input className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4" />
              </label>

              <label className="lg:w-[259px] text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]">
                País
                <input className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4" />
              </label>
            </div>

            {/* Radio buttons */}
            <div className="mt-[20px]">
              <h6 className="font-medium text-[18px] lg:text-[26px] ff-satoshi">
                Tipo de consulta
              </h6>

              <div className="mt-[14px] flex flex-wrap  gap-[16px] sm:gap-[26px]">
                {["Particular", "Profesional", "Ser aliado comercial"].map(
                  (type) => (
                    <label
                      key={type}
                      className="flex items-center gap-[10px] text-[16px] md:text-[18px] text-[#1B2022]"
                    >
                      <input
                        type="radio"
                        name="tipo"
                        className="w-[16px] h-[16px] accent-[#1B2022] cursor-pointer"
                      />
                      {type}
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Tipo de consulta */}
            <div className="mt-[20px] flex flex-col gap-[10px]">
              <label className="text-[16px] md:text-[18px] text-[#1B2022]">
                Tipo de consulta
              </label>
              <input
                type="text"
                placeholder="Quiero comprar"
                className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[#747474]"
              />
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px] mt-[20px]">
              {["Nombre de la empresa", "Número de contacto"].map(
                (label, i) => (
                  <label
                    key={i}
                    className="text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]"
                  >
                    {label}
                    <input
                      type="text"
                      className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[16px]"
                    />
                  </label>
                ),
              )}
            </div>

             <div className="grid grid-cols-1 md:grid-cols-1 gap-[16px] md:gap-[20px] mt-[20px]">
              {["Área de negocio", "Ubicación Región de coberta"].map(
                (label, i) => (
                  <label
                    key={i}
                    className="text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]"
                  >
                    {label}
                    <input
                      type="text"
                      className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[16px]"
                    />
                  </label>
                ),
              )}
            </div>

            {/* Message */}
            <div className="mt-[20px] flex flex-col gap-[10px]">
              <label className="text-[16px] md:text-[18px] text-[#1B2022]">
                Mensaje
              </label>
              <textarea className="w-full h-[120px] md:h-[160px] rounded-[6px] border border-[#1B20220F] px-4 py-3 resize-none text-[#747474]" />

              <label className="flex items-start gap-[10px] text-[14px] md:text-[16px] text-[#747474]">
                <input type="checkbox" className="mt-[4px]" />
                He leído y acepto la política de privacidad.
              </label>
            </div>

            {/* Button */}
            <button
              className="
      mt-[28px]
      w-full sm:w-auto
      bg-[#2B3032]
      py-[14px] px-[33px]
      rounded-[70px]
      uppercase text-white
      text-center
    "
            >
              Enviar consulta
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
