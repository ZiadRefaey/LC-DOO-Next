import React from "react";
import { product } from "../../product.type";
import ProductsList from "../../ProductsList";
import ProductsPagination from "./ProductsPagination";
const products: product[] = [
  {
    discountPercentage: 20,
    href: "/",
    price: 200,
    rating: 3.5,
    title: "JACKET WITH STRIPED SLEEVES",
  },
  {
    discountPercentage: 20,
    href: "/",
    price: 200,
    rating: 3.5,
    title: "JACKET WITH STRIPED SLEEVES",
  },
  {
    discountPercentage: 20,
    href: "/",
    price: 200,
    rating: 3.5,
    title: "JACKET WITH STRIPED SLEEVES",
  },
  {
    discountPercentage: 20,
    href: "/",
    price: 200,
    rating: 3.5,
    title: "JACKET WITH STRIPED SLEEVES",
  },
  {
    discountPercentage: 20,
    href: "/",
    price: 200,
    rating: 3.5,
    title: "JACKET WITH STRIPED SLEEVES",
  },
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
export default function ProductsWrapper() {
  return (
    <section className="flex items-center justify-center flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 items-center justify-between place-items-center w-full ">
        <ProductsList products={products} />
      </div>
      <ProductsPagination />
    </section>
  );
}
