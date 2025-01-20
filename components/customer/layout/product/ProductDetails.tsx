import React from "react";
import ImagesPanel from "./ImagesPanel";
import DescriptionPanel from "./DescriptionPanel";

export default function ProductDetails() {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 place-items-center items-center justify-center flex-col xl:flex-row gap-10">
      <ImagesPanel />
      <DescriptionPanel />
    </div>
  );
}
