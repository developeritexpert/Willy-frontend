import Banner from "@/components/contactPage/Banner";
import TextReveal from "@/components/homePage/TextReveil";
import Link from "next/link";
import React from "react";

export default function NosotrosUi() {
  return (
    <>
      <Banner
        title="Cada espacio, una OBRA de arte."
        desc="Diseño atemporal, resistencia técnica, innovación responsable."
        img="/img/banner/3.png"
      />
      <section
        data-aos="fade-up"
        className="max-w-[600px] lg:max-w-[781px] mx-auto px-[15px] lg:px-0 flex flex-col items-center text-center mt-[60px] mb-[80px] xl:mt-[100px]  xl:mb-[130px]"
      >
        <h5 className=" text-2xl md:text-3xl  lg:text-[42px] font-medium text-[#1B2022] ">
          ¿Quiénes somos?
        </h5>
        <span className="mt-[14px] mb-[19px]">
          <svg
            width="55"
            height="1"
            viewBox="0 0 55 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="55" y2="0.5" stroke="#1B2022" />
          </svg>
        </span>
        <div className="text-[#80807E] text-[18px] leading-[28px] tracking-[0%] space-y-[16px] ff-inter ">
          <p> En OBRA creamos experiencias a través del diseño.</p>
          <p>
            Somos una marca venezolana dedicada a ofrecer soluciones estéticas y
            funcionales para transformar espacios con personalidad, estilo y
            carácter. Nuestra propuesta combina variedad, calidad, asesoría
            especializada y pasión por el detalle.
          </p>
          <p>
            Desde revestimientos hasta composiciones decorativas, somos un
            espacio creativo donde la arquitectura, el diseño interior y los
            materiales se encuentran para dar vida a ideas únicas.
          </p>
        </div>
      </section>
      {/* <section data-aos="fade-up" className="max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 xl:px-[120px] 2xl:px-[240px] mb-[60px] ">
        <h5 className="text-center text-2xl md:text-3xl  lg:text-[32px] font-medium text-[#1B2022] ">
          Nos esforzamos por
        </h5>
        <div className="mt-[30px] xl:mb-[50px] flex flex-col lg:flex-row gap-[40] xl:gap-[92px]">
          <div className="max-w-[382px]">
            <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[42px] font-bold">
              01.
            </h5>
            <p className="text-[#80807E] text-sm lg:text-[18px] mt-[8px] xl:mt-[15px] lg:min-w-[382px] ff-inter">
              Inspirar y crear continuamente espacios luminosos y atrevidos para
              disfrutarlos al máximo.
            </p>
          </div>
          <div className="max-w-[433px]">
            <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[42px] font-bold">
              02.
            </h5>
            <p className="text-[#80807E] text-sm lg:text-[18px] mt-[8px] xl:mt-[15px] ff-inter">
              Convertir los entornos sostenibles en una realidad tangible,
              creando espacios que sean respetuosos con el medio ambiente y
              duraderos..
            </p>
          </div>
          <div className="max-w-[440px]">
            <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[42px] font-bold">
              03.
            </h5>
            <p className="text-[#80807E] text-sm lg:text-[18px] mt-[8px] xl:mt-[15px] ff-inter">
              Comprometidos con actuar de manera responsable y construir un
              futuro que todos podamos esperar con ilusión.
            </p>
          </div>
        </div>
      </section> */}
      <div
        data-aos="fade-up"
        className="max-w-[1920px] mx-auto mb-[70px] xl:mb-[120px]"
      >
        <img src="/img/banner/4.png" alt="banner" />
      </div>
      <section
        data-aos="fade-up"
        className="max-w-[1920px] mx-auto mb-[60px] xl:mb-[120px] px-[15px] md:px-8 lg:px-12 2xl:px-[335px]"
      >
        <h5 className="text-center text-2xl md:text-3xl  lg:text-[32px] font-medium text-[#1B2022] ">
          Nuestro trabajo refleja quiénes somos{" "}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[25px] mt-[30px] 2xl:mt-[50px]">
          <div className="flex flex-col items-center text-center border border-[#1B202214] text-center px-[12px] md:px-[18px] xl:px-[54px] py-[10px] md:py-[15px] xl:pt-[35px] xl:pb-[32px]">
            <span>
              <svg
                width="38"
                height="42"
                viewBox="0 0 38 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.3612 17.6005C34.7396 17.6005 34.1179 17.2896 33.6517 16.8234C33.6517 16.8234 33.6517 16.8234 33.4963 16.668L20.4416 5.47829C19.5092 4.54582 17.955 4.54582 17.0226 5.47829L3.9679 16.668C3.03542 17.4451 1.4813 17.4451 0.548823 16.3572C-0.22824 15.4247 -0.228239 13.8706 0.859649 12.9381L13.9143 1.74839C16.7117 -0.582797 20.7525 -0.582797 23.5499 1.74839L36.6045 12.9381C36.7599 12.9381 36.9154 13.2489 37.0708 13.4043C38.0032 14.3368 38.0032 15.8909 37.0708 16.8234C36.6045 17.2896 35.9829 17.4451 35.3612 17.4451"
                  fill="#1B2022"
                  fill-opacity="0.1"
                />
                <path
                  d="M18.8878 20.553C14.2254 20.553 10.4955 24.2829 10.4955 28.9453C10.4955 33.6077 14.2254 37.3376 18.8878 37.3376C23.5502 37.3376 27.2801 33.6077 27.2801 28.9453C27.2801 24.2829 23.5502 20.553 18.8878 20.553ZM18.8878 42C11.5834 42 5.67773 36.0943 5.67773 28.7899C5.67773 21.4855 11.5834 15.5798 18.8878 15.5798C26.1922 15.5798 32.0979 21.4855 32.0979 28.7899C32.0979 36.0943 26.1922 42 18.8878 42Z"
                  fill="#1B2022"
                  fill-opacity="0.1"
                />
              </svg>
            </span>
            <h6 className="text-[18px] md:text-[25px] xl:text-[32px] mt-[12px] mb-[17px]">
              Visión
            </h6>
            <p className="text-[#80807E] text-sm lg:text-[18px] max-w-[308px]">
              Ser la marca referente en Venezuela en soluciones para el diseño
              de espacios, reconocida por su excelencia, vanguardia, variedad,
              atención cercana y capacidad de interpretar las ideas de cada
              cliente y convertirlas en realidad.
            </p>
          </div>
          <div className="flex flex-col items-center text-center border border-[#1B202214] text-center px-[12px] md:px-[18px] xl:px-[46px] py-[10px] md:py-[15px] xl:pt-[35px] xl:pb-[32px]">
            <span>
              <svg
                width="38"
                height="42"
                viewBox="0 0 38 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.3612 17.6005C34.7396 17.6005 34.1179 17.2896 33.6517 16.8234C33.6517 16.8234 33.6517 16.8234 33.4963 16.668L20.4416 5.47829C19.5092 4.54582 17.955 4.54582 17.0226 5.47829L3.9679 16.668C3.03542 17.4451 1.4813 17.4451 0.548823 16.3572C-0.22824 15.4247 -0.228239 13.8706 0.859649 12.9381L13.9143 1.74839C16.7117 -0.582797 20.7525 -0.582797 23.5499 1.74839L36.6045 12.9381C36.7599 12.9381 36.9154 13.2489 37.0708 13.4043C38.0032 14.3368 38.0032 15.8909 37.0708 16.8234C36.6045 17.2896 35.9829 17.4451 35.3612 17.4451"
                  fill="#1B2022"
                  fill-opacity="0.1"
                />
                <path
                  d="M18.8878 20.553C14.2254 20.553 10.4955 24.2829 10.4955 28.9453C10.4955 33.6077 14.2254 37.3376 18.8878 37.3376C23.5502 37.3376 27.2801 33.6077 27.2801 28.9453C27.2801 24.2829 23.5502 20.553 18.8878 20.553ZM18.8878 42C11.5834 42 5.67773 36.0943 5.67773 28.7899C5.67773 21.4855 11.5834 15.5798 18.8878 15.5798C26.1922 15.5798 32.0979 21.4855 32.0979 28.7899C32.0979 36.0943 26.1922 42 18.8878 42Z"
                  fill="#1B2022"
                  fill-opacity="0.1"
                />
              </svg>
            </span>
            <h6 className="text-[18px] md:text-[25px] xl:text-[32px] mt-[12px] mb-[17px]">
              Misión
            </h6>
            <p className="text-[#80807E] text-sm lg:text-[18px] max-w-[308px]">
              Ofrecer soluciones integrales de diseño que inspiren a nuestros
              clientes a transformar sus espacios, mediante una experiencia
              personalizada, una amplia gama de productos de alta calidad y un
              enfoque estético que valora la autenticidad, el detalle y la
              innovación.
            </p>
          </div>
          <div className="flex flex-col items-center text-center border border-[#1B202214] text-center px-[12px] md:px-[18px] xl:px-[54px] py-[10px] md:py-[15px] xl:pt-[35px] xl:pb-[32px]">
            <span>
              <svg
                width="38"
                height="42"
                viewBox="0 0 38 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.3612 17.6005C34.7396 17.6005 34.1179 17.2896 33.6517 16.8234C33.6517 16.8234 33.6517 16.8234 33.4963 16.668L20.4416 5.47829C19.5092 4.54582 17.955 4.54582 17.0226 5.47829L3.9679 16.668C3.03542 17.4451 1.4813 17.4451 0.548823 16.3572C-0.22824 15.4247 -0.228239 13.8706 0.859649 12.9381L13.9143 1.74839C16.7117 -0.582797 20.7525 -0.582797 23.5499 1.74839L36.6045 12.9381C36.7599 12.9381 36.9154 13.2489 37.0708 13.4043C38.0032 14.3368 38.0032 15.8909 37.0708 16.8234C36.6045 17.2896 35.9829 17.4451 35.3612 17.4451"
                  fill="#1B2022"
                  fill-opacity="0.1"
                />
                <path
                  d="M18.8878 20.553C14.2254 20.553 10.4955 24.2829 10.4955 28.9453C10.4955 33.6077 14.2254 37.3376 18.8878 37.3376C23.5502 37.3376 27.2801 33.6077 27.2801 28.9453C27.2801 24.2829 23.5502 20.553 18.8878 20.553ZM18.8878 42C11.5834 42 5.67773 36.0943 5.67773 28.7899C5.67773 21.4855 11.5834 15.5798 18.8878 15.5798C26.1922 15.5798 32.0979 21.4855 32.0979 28.7899C32.0979 36.0943 26.1922 42 18.8878 42Z"
                  fill="#1B2022"
                  fill-opacity="0.1"
                />
              </svg>
            </span>
            <h6 className="text-[18px] md:text-[25px] xl:text-[32px] mt-[12px] mb-[17px]">
              Valores
            </h6>
            <p className="text-[#80807E] text-sm lg:text-[18px] max-w-[308px]">
              Calidad, Diversidad, Propósito, Atención personalizada,
              Innovación, Pasión por los detalles, Compromiso
            </p>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="bg-[#1B2022] flex items-center px-[15px] xl:px-0 text-[#FFFFFF]  mb-[60px] pb-[40px] xl:pb-[120px] pt-[24px]  lg:pt-[50px] xl:pt-[108px] xl:pb-[130px] min-h-[450px] md:h-[400px] xl:h-[543px]"
      >
        <div className="max-w-[500px] lg:max-w-[765px] mx-auto text-center">
          <h5 className=" text-2xl md:text-3xl xl:text-[42px] font-bold mb-[35px] leading-[35px] lg:leading-[54px] ">
            OBRA desarrolla soluciones integrales para la remodelación,
            construcción y diseño, ofreciendo materiales de vanguardia que dan
            vida a espacios funcionales, sostenibles y con una estética
            excepcional.
          </h5>
          <Link
            href="#"
            className="bg-[#2B3032] px-[48px] py-[17px] rounded-[70px] uppercase text-[14px]"
          >
            Eleva tu pared
          </Link>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="max-w-[1920px] mx-auto mb-[60px] xl:pb-[120px] px-[15px] md:px-8 lg:px-12 2xl:ps-[273px] 2xl:pe-[299px] "
      >
        <div className="flex flex-wrap lg:flex-nowrap gap-[54px] xl:gap-[138px]">
          <div className="max-w-[493px] pt-[20px] 2xl:pt-[40px]">
            <h5 className="text-2xl  md:text-3xl xl:text-[42px] font-medium">
              Para nuestros aliados, somos el mejor proveedor
            </h5>
            <div className="mt-[33px] space-y-[30px]">
              <div>
                <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[38px] font-medium">
                  01.
                </h5>
                <p className="text-[#80807E] ff-inter text-sm xl:text-[16px] max-w-[454px]">
                  Atención y asesoría personalizada en cada proyecto
                </p>
              </div>
              <div>
                <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[38px] font-medium">
                  02.
                </h5>
                <p className="text-[#80807E] ff-inter text-sm xl:text-[16px] max-w-[460px]">
                  Materiales de vanguardia con calidad insuperable.
                </p>
              </div>
              <div>
                <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[38px] font-medium">
                  03.
                </h5>
                <p className="text-[#80807E] ff-inter text-sm xl:text-[16px] max-w-[460px]">
                  Paquete competitivo.
                </p>
              </div>
              <div>
                <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[38px] font-medium">
                  04.
                </h5>
                <p className="text-[#80807E] ff-inter text-sm xl:text-[16px] max-w-[460px]">
Disponibilidad inmediata y constante de stock.                </p>
              </div>
              <div>
                <h5 className="text-[18px] md:text-[26px] lg:text-[32px] xl:text-[38px] font-medium">
                  05.
                </h5>
                <p className="text-[#80807E] ff-inter text-sm xl:text-[16px] max-w-[460px]">
Más de 200 modelos exclusivos por cada tipo de producto.                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[717px]">
            <img
              src="/img/visonMission/1.png"
              alt="banner"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
      <TextReveal desc="Transformamos materiales de remodelación y construcción en experiencias" />{" "}
    </>
  );
}
