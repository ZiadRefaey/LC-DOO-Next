import React from "react";
import { product } from "./product.type";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }: { products: product[] }) {
  console.log("productsList", products);
  return products.map((product: product, index: number) => (
    <ProductCard
      key={index}
      href={product.href}
      discountPercentage={product.discountPercentage}
      price={product.price}
      rating={product.rating}
      title={product.title}
    />
  ));
}
