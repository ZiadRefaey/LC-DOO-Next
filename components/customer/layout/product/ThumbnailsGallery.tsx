import React from "react";
import PositionImage from "./PositionImage";

export default function ThumbnailsGallery() {
  return (
    <div className="grid grid-cols-3 w-full h-auto gap-4 place-items-center ">
      <PositionImage />
      <PositionImage />
      <PositionImage />
    </div>
  );
}
