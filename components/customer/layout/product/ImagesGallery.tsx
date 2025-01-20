import React from "react";
import MainImage from "./MainImage";
import ThumbnailsGalary from "./ThumbnailsGalary";

export default function ImagesGalary() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 md:gap-5 w-full h-[326px] md:h-[680px] xl:h-[660px]">
      <MainImage title="image" />
      <ThumbnailsGalary />
    </div>
  );
}
