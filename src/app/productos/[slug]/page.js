import React from "react";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return [
    { slug: "calacatta-reale" },
  ];
}

export default async function Page({params}) {
  let {slug}=await params;
  console.log(slug)
  return (
    <div>
      <ProductDetail />
    </div>
  );
}
