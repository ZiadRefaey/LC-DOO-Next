import React from "react";
import MainImage from "./MainImage";
import PositionImage from "./PositionImage";

export default function ImagesPanel() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 md:gap-5 w-full h-[326px] md:h-[680px] xl:h-[660px]">
      <MainImage title="image" />
      <div className="grid grid-cols-3 w-full h-[20%] gap-4 place-items-center ">
        <PositionImage />
        <PositionImage />
        <PositionImage />
      </div>
    </div>
  );
}
