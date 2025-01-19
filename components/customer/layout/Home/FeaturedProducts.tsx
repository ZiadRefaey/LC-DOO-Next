import React from "react";
import { product } from "./product.type";
import Section from "../../ui/Section";
import ProductsShowcase from "./ProductsShowcase";
const featuredProducts: product[] = [
  {
    discountPercentage: 20,
    href: "/",
    price: 200,
    rating: 3.5,
    title: "JACKET WITH STRIPED SLEEVES",
  },
  {
    discountPercentage: 30,
    href: "/",
    price: 400,
    rating: 4.5,
    title: "HOODIE WITH ZIP POCKETS",
  },
  {
    discountPercentage: 25,
    href: "/",
    price: 180,
    rating: 3,
    title: "T-SHIRT WITH TAPE DETAILS",
  },
  {
    discountPercentage: 15,
    href: "/",
    price: 150,
    rating: 4,
    title: "JEANS WITH DISTRESSED FINISH",
  },
];
export default function FeaturedProducts() {
  console.log("featured", featuredProducts);
  return (
    <Section>
      <h2 className="text-preset-1 uppercase mb-10">Featured</h2>
      <ProductsShowcase products={featuredProducts} />
    </Section>
  );
}
