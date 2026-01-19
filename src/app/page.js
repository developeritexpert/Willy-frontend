import CompanyLogos from '@/components/homePage/CompanyLogos'
import Fundamental from '@/components/homePage/Fundamental'
import GridProduct from '@/components/homePage/GridProduct'
import HeroSection from '@/components/homePage/HeroSection'
import ImageGallery from '@/components/homePage/ImageGallery'
import PopUpForm from '@/components/homePage/PopUpForm'
import ProductReveal from '@/components/homePage/ProductReveal'
import Products from '@/components/homePage/Products'
import ProductsSlide from '@/components/homePage/ProductsSlide'
import TextReveal from '@/components/homePage/TextReveil'
import React from 'react'

export default function page() {
  return (
    <>
    <PopUpForm/>
      <HeroSection/>
      <Products/>
       <TextReveal desc="El Pu Stone es un material innovador que combina lo mejor de la estética natural con las ventajas de la tecnología moderna"/>
     <ImageGallery/>
       <ProductsSlide/>
      <GridProduct/>

      <CompanyLogos/>
     <ProductReveal/>
      <Fundamental/> 
    </>
  )
}
