"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  direccion: "",
  pais: "",
  tipo: "Ser aliado comercial",
  empresa: "",
  contacto: "",
  area: "",
  region: "",
  mensaje: "",
  privacy: false,
};
export default function ContactFrom({ title }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;

    if (type === "tel") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const fields = [
    { label: "Nombre", name: "nombre", type: "text" },
    { label: "Apellido", name: "apellido", type: "text" },
    { label: "Correo electrónico", name: "email", type: "email" },
    {
      label: "Teléfono",
      placeholder: "0412 555 55 55",
      name: "telefono",
      type: "tel",
    },
  ];

  const companyFields = [
    {
      label: "Nombre de la empresa",
      name: "empresa",
    },
    {
      label: "Número de contacto",
      name: "contacto",
    },
  ];

  return (
    <section className="relative">
     

      <div
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
          {title}
        </h5>

        <form
          onSubmit={handleSubmit}
          className="mt-[20px] xl:mt-[28px] ff-satoshi"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px]">
            {fields.map(({ label, name, type, placeholder }) => (
              <label
                key={name}
                className="text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]"
              >
                {label}

                {type === "tel" ? (
                  <>
                    <div className="flex items-center gap-x-2 font-normal  h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[16px] text-[#747474]">
                      <span className="border-r border-[#1B20220F] pr-[13px]">
                        +34
                      </span>
                      <input
                        type={type}
                        name={name}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder || ""}
                        className="w-full h-full "
                      />
                    </div>
                  </>
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder || ""}
                    className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[16px]"
                  />
                )}
              </label>
            ))}
          </div>

          {/* Company & Country */}
          <div className="grid grid-cols-1 lg:flex  gap-[16px] md:gap-[20px] mt-[20px]">
            <label className="lg:w-full text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]">
              Dirección
              <input
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4"
              />
            </label>

            <label className="lg:w-[259px] text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]">
              País
              <div className="relative w-full">
                <select
                  name="pais"
                  value={form.pais}
                  onChange={handleChange}
                  className="
      w-full
      appearance-none
      border border-[#1B20220F]
      text-[#80807E]
      font-normal
      text-[16px]
      p-[20px]
      bg-white
      cursor-pointer
    "
                >
                  <option value="" disabled>
                    Spain
                  </option>
                  <option value="Spain">Spain</option>
                  <option value="France">France</option>
                </select>

                {/* Arrow */}
                <span className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 ">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.650391 0.649902L4.65039 4.6499L8.65039 0.649902"
                      stroke="#747474"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
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
                      value={type}
                      checked={form.tipo === type}
                      onChange={handleChange}
                      className="w-[16px] h-[16px] accent-[#1B2022] cursor-pointer"
                    />
                    {type}
                  </label>
                ),
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px] mt-[25px]">
            {companyFields.map(({ label, name }) => (
              <label
                key={name}
                className="text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]"
              >
                {label}
                <input
                  type="text"
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[16px]"
                />
              </label>
            ))}
          </div>

          <div className="mt-[20px]">
            <label className="text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]">
              Área de negocio
              <div className="relative w-full">
                <select
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  className="
          w-full
          appearance-none
          border border-[#1B20220F]
          text-[#80807E]
          font-normal
          text-[16px]
          p-[20px]
          bg-white
          cursor-pointer
        "
                >
                  <option value="" disabled>
                    Constructor
                  </option>
                  <option value="Constructor 1">Constructor 1</option>
                  <option value="Constructor 2">Constructor 2</option>
                  <option value="Constructor 3">Constructor 3</option>
                </select>

                {/* Arrow */}
                <span className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M0.650391 0.649902L4.65039 4.6499L8.65039 0.649902"
                      stroke="#747474"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </label>
          </div>

          <div className=" mt-[20px]">
            <label className="text-[16px] md:text-[18px] flex flex-col gap-[10px] text-[#1B2022]">
              Ubicación Región de coberta
              <input
                type="text"
                name="region"
                value={form.region}
                onChange={handleChange}
                className="w-full h-[56px] md:h-[60px] rounded-[6px] border border-[#1B20220F] px-4 text-[16px]"
              />
            </label>
          </div>

          {/* Message */}
          <div className="mt-[20px] flex flex-col gap-[10px]">
            <label className="text-[16px] md:text-[18px] text-[#1B2022]">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className="w-full h-[120px] md:h-[160px] rounded-[6px] border border-[#1B20220F] px-4 py-3 resize-none text-[#747474]"
            />

            <label className="flex items-center gap-x-[10px] text-[14px] md:text-[16px] text-[#747474]">
              <input
                type="checkbox"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
                className="mt-[4px]  w-[18px] h-[18px] border border-[#1B20220F] accent-[#1B2022] -mt-1"
              />
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
      text-center font-medium hover:bg-[#2b303254]
    "
          >
            Enviar consulta
          </button>
        </form>
      </div>
       {form.tipo && (
        <a
           key={form.tipo} 

          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="md:absolute bottom-0 left-0 md:bottom-12 2xl:bottom-[70px] md:left-[50%] 2xl:left-[150px] flex flex-col items-center gap-y-[7px] animate-pulse  xl:text-nowrap lg:max-w-[200px] text-center"
        >
          <p className="border border-[#1B20221A] rounded-[90px] px-[15px] py-[7px] select-none text-xs md:text-[14px] text-[#747474]">
            {form.tipo === "Ser aliado comercial" && ("Hola, me gustaría ser aliado comercial.")}
            {form.tipo === "Particular" && ("Hola, me gustaría comprar.")}
            {form.tipo === "Profesional" && ("Hola, me gustaría comprar para mi negocio.")}
          </p>

          <img
            src="/img/whatsap.png"
            alt="whatsapp"
            className="cursor-pointer w-[40px] xl:w-auto"
          />
        </a>
      )}
    </section>
  );
}
