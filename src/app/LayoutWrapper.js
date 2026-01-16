import React from 'react'

import "@/styles/custom.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slick-custom.css";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer';

import 'aos/dist/aos.css';
import AOSProvider from '@/components/AOSProvider';


export default function LayoutWrapper({children}) {
  return (
    <>
    <AOSProvider>
      <Header/>
      {children}
      <Footer/>
      </AOSProvider>
    </>
  )
}
