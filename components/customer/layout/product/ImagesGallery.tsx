import React from "react";
import MainImage from "./MainImage";
import ThumbnailsGalary from "./ThumbnailsGallery";

export default function ImagesGalary() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 md:gap-5 w-full h-[326px] md:h-full">
      <MainImage title="image" />
      <ThumbnailsGalary />
    </div>
  );
}
