import React from "react";
import Categories from "./Categories";
import { FaFilter } from "react-icons/fa6";
import Materials from "./Materials";
import Colors from "./Colors";
import Sizes from "./Sizes";
import PriceRange from "./PriceRange";
import PrimaryButton from "@/components/customer/ui/PrimaryButton";

export default function Filter() {
  return (
    <div className="border bg-card-background border-border rounded-xl flex items-start justify-center flex-col px-6 py-5 gap-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-preset-2">Filters</h1>
        <FaFilter className="size-6 text-border" />
      </div>
      <Categories />
      <Materials />
      <Colors />
      <Sizes />
      <PriceRange />
      <PrimaryButton className="w-full py-3">Apply Filters</PrimaryButton>
    </div>
  );
}
