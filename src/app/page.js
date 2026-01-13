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
       <TextReveal/>
     <ImageGallery/>
       <ProductsSlide/>
      <GridProduct/>

      {/* pending to repsonive below sections */}
     <CompanyLogos/>
      <ProductReveal/>
      <Fundamental/> 
    </>
  )
}
