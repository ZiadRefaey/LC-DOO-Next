import Filter from "@/components/customer/layout/store/filter/Filter";
import { MobileFilter } from "@/components/customer/layout/store/filter/MobileFilter";
import ProductsWrapper from "@/components/customer/layout/store/products/ProductsWrapper";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-rows-[1fr,68px] xl:grid-rows-1 xl:grid-cols-[295px,1fr] gap-y-10 gap-x-8 max-w-[1240px] m-auto py-10">
      <div className="hidden xl:block ">
        <Filter />
      </div>
      <MobileFilter />
      <ProductsWrapper />
    </div>
  );
}
