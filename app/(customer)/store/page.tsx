import Filter from "@/components/customer/layout/store/filter/Filter";
import { MobileFilter } from "@/components/customer/layout/store/filter/MobileFilter";
import ProductsWrapper from "@/components/customer/layout/store/products/ProductsWrapper";
import React from "react";

export default function page() {
  return (
    <>
      <div className="hidden xl:block">
        <Filter />
      </div>
      <MobileFilter />
      <ProductsWrapper />
    </>
  );
}
