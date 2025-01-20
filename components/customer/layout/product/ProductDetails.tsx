import React from "react";

import ImagesGalary from "./ImagesGallery";
import Details from "./Details";

export default function ProductDetails() {
  return (
    <div className="w-full flex items-center justify-center flex-col xl:grid xl:grid-cols-2 place-items-center xl:flex-row gap-10 ">
      <ImagesGalary />
      <Details />
    </div>
  );
}
