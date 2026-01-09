import HeroSection from '@/components/homePage/HeroSection'
import ImageGallery from '@/components/homePage/ImageGallery'
import Products from '@/components/homePage/Products'
import TextReveal from '@/components/homePage/TextReveil'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroSection/>
      <Products/>
      <TextReveal/>
      <ImageGallery/>
    </>
  )
}
