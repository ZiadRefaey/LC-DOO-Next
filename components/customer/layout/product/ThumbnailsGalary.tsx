import React from "react";
import PositionImage from "./PositionImage";

export default function ThumbnailsGalary() {
  return (
    <div className="grid grid-cols-3 w-full h-[20%] gap-4 place-items-center ">
      <PositionImage />
      <PositionImage />
      <PositionImage />
    </div>
  );
}
