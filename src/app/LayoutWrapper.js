import React from 'react'
import "@/styles/custom.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slick-custom.css";

import Header from '@/components/layout/Header'

export default function LayoutWrapper({children}) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
