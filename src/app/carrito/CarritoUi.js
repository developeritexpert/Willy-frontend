import React from "react";

export default function CarritoUi() {
  const products = [
    {
      id: 1,
      name1: "Calacatta",
      name2: "Reale",
      price: 750,
      quantity: 12,
      color: "Memphis",
      image: "/img/productos/1.png",
    },
    {
      id: 2,
      name1: "Carrara",
      name2: "White",
      price: 680,
      quantity: 8,
      color: "Ivory",
      image: "/img/productos/2.png",
    },
    {
      id: 3,
      name1: "Statuario",
      name2: "Lux",
      price: 820,
      quantity: 6,
      color: "Pearl",
      image: "/img/productos/3.png",
    },
    {
      id: 4,
      name1: "Nero",
      name2: "Marquina",
      price: 900,
      quantity: 4,
      color: "Black",
      image: "/img/productos/4.png",
    },
    {
      id: 5,
      name1: "Onyx",
      name2: "Gold",
      price: 1100,
      quantity: 3,
      color: "Gold",
      image: "/img/productos/5.png",
    },
    {
      id: 6,
      name1: "Travertino",
      name2: "Classic",
      price: 650,
      quantity: 10,
      color: "Beige",
      image: "/img/productos/6.png",
    },
    {
      id: 7,
      name1: "Basalt",
      name2: "Dark",
      price: 720,
      quantity: 7,
      color: "Dark Grey",
      image: "/img/productos/7.png",
    },
    {
      id: 8,
      name1: "Quartz",
      name2: "Snow",
      price: 590,
      quantity: 14,
      color: "White",
      image: "/img/productos/8.png",
    },
    {
      id: 9,
      name1: "Granite",
      name2: "Steel",
      price: 880,
      quantity: 5,
      color: "Steel",
      image: "/img/productos/9.png",
    },
    {
      id: 10,
      name1: "Marble",
      name2: "Grey",
      price: 770,
      quantity: 9,
      color: "Grey",
      image: "/img/productos/10.png",
    },
  ];

  return (
    <section className="max-w-[1920px] mx-auto px-[15px] md:px-8 lg:px-12 2xl:px-[240px] mt-[60px] md:mt-[80px] xl:mt-[117px] mb-[65px] md:mb-[70px] xl:mb-[120px]">
      <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-[53px] font-medium text-center">
        Carrito de la compra
      </h4>
      <div className="lg:flex items-start  mt-[35px] lg:mt-[65px] gap-[70px] lg:gap-[50px] xl:gap-[70px]">
        <div className="flex-1">
  {/* Desktop header */}
  <div className="hidden lg:grid grid-cols-10 text-sm md:text-[20px] font-medium text-[#1B2022]">
    <div className="col-span-4">Producto</div>
    <div className="col-span-2">Precio</div>
    <div className="col-span-2">Cantidad</div>
    <div className="col-span-2">Color</div>
  </div>

  {products.map((product) => (
    <div
      key={product.id}
      className="
        mt-4 p-4 rounded-lg border border-[#1B202214]
        flex flex-col gap-4
        md:p-5
        lg:mt-[21px] lg:p-0 lg:rounded-none lg:border-0
        lg:grid lg:grid-cols-10 lg:items-center
        lg:py-[30px] lg:border-y
      "
    >
      {/* Product */}
      <div className="lg:col-span-4">
        <span className="block lg:hidden text-sm font-medium text-[#1B2022] mb-2 ">
          Producto
        </span>

        <div className="flex items-center gap-4 lg:gap-[23px]">
          <img
            src={product.image}
            alt={`${product.name1} ${product.name2}`}
            className="w-[88px] h-[72px] md:w-[96px] md:h-[80px] lg:w-[112px] lg:h-[93px] object-cover"
          />
          <div className="text-[#1B2022] font-medium text-base md:text-[18px] lg:text-[20px] lg:line-clamp-1 xl:line-clamp-none">
            <p>{product.name1}</p>
            <p>{product.name2}</p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="lg:col-span-2 flex justify-between items-center">
        <span className="lg:hidden text-sm font-medium text-[#1B2022]">
          Precio
        </span>
        <span className="text-[#747474]">€{product.price}</span>
      </div>

      {/* Quantity */}
      <div className="lg:col-span-2 flex justify-between items-center">
        <span className="lg:hidden text-sm font-medium text-[#1B2022]">
          Cantidad
        </span>

        <div className="flex items-center gap-3 text-[#747474]">
          <button className="px-2 border rounded">−</button>
          <span>{product.quantity}</span>
          <button className="px-2 border rounded">+</button>
        </div>
      </div>

      {/* Color + Remove */}
      <div className="lg:col-span-2 flex justify-between items-center">
        <div className="flex justify-between w-full lg:w-auto">
          <span className="lg:hidden text-sm font-medium text-[#1B2022]">
            Color
          </span>
          <span className="text-[#747474]">{product.color}</span>
        </div>

        <button className="ml-4">
          {/* icon unchanged */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.330466 0.331578C-0.110155 0.772211 -0.110155 1.48986 0.330466 1.93197L5.39988 7L0.330466 12.068C-0.110155 12.5101 -0.110155 13.2278 0.330466 13.6684C0.772559 14.1105 1.49019 14.1105 1.93228 13.6684L7.00018 8.60039L12.0681 13.6684C12.5102 14.1105 13.2263 14.1105 13.6684 13.6684C14.1105 13.2278 14.1105 12.5101 13.6684 12.068L8.60053 7L13.6684 1.93197C14.1105 1.48986 14.1105 0.772211 13.6684 0.331578C13.2263 -0.110526 12.5102 -0.110526 12.0681 0.331578L7.00018 5.39961L1.93228 0.331578C1.49019 -0.110526 0.772559 -0.110526 0.330466 0.331578Z"
              fill="#1B2022"
            />
          </svg>
        </button>
      </div>
    </div>
  ))}
</div>


        <div className="flex justify-end  sticky top-10  ">
          <div className="w-full  xl:w-[471px] border rounded-xl p-6 lg:px-[40px] lg:py-[34px] border border-[#1B202214] rounded-[10px]">
            <h4 className="font-medium mb-1 lg:mb-[9px] text-[24px] lg:text-[26px]">
              Resumen del pedido
            </h4>
            <p className="text-sm lg:text-[16px] text-[#747474] mb-6 lg:mb-[30px]">
              Calcular gastos de envío e impuestos
            </p>

            <div className="space-y-4 lg:space-y-[px20] text-sm ">
              <div className="flex justify-between text-[18px] py-[12px] border-t border-b border-[#1B202214] lg:py-[20px]">
                <span className=" font-medium">Subtotal</span>
                <span className="text-[#747474] text-[]">€9,000</span>
              </div>
              <div className="flex justify-between text-[18px] py-[12px] border-t border-b border-[#1B202214] lg:py-[20px]">
                <span className=" font-medium">Envío </span>
                <span className="text-[#747474] text-[]">€10</span>
              </div>
              <div className="flex justify-between text-[18px] py-[12px] border-t border-b border-[#1B202214] lg:py-[20px]">
                <span className=" font-medium">Impuesto </span>
                <span className="text-[#747474] text-[]">€15</span>
              </div>

              <div className="flex justify-between font-semibold text-[18px] mt-[20px] ">
                <span>Total del pedido</span>
                <span>€9,025</span>
              </div>
            </div>

            <button className="mt-6 lg:mt-[31px] w-full bg-[#1B2022] text-white py-3 lg:py-[13px] rounded-full text-[12px]">
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
