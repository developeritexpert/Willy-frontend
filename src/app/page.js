import CompanyLogos from '@/components/homePage/CompanyLogos'
import Fundamental from '@/components/homePage/Fundamental'
import GridProduct from '@/components/homePage/GridProduct'
import HeroSection from '@/components/homePage/HeroSection'
import ImageGallery from '@/components/homePage/ImageGallery'
import ProductReveal from '@/components/homePage/ProductReveal'
import Products from '@/components/homePage/Products'
import ProductsSlide from '@/components/homePage/ProductsSlide'
import TextReveal from '@/components/homePage/TextReveil'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroSection/>
      <Products/>
       <TextReveal desc="  Obra Stone es un material innovador que combina minerales naturales
            con tecnología avanzada para crear una superficie resistente y
            elegante."/>
     <ImageGallery/>
       <ProductsSlide/>
      <GridProduct/>

      <CompanyLogos/>
     <ProductReveal/>
      <Fundamental/> 
    </>
  )
}
