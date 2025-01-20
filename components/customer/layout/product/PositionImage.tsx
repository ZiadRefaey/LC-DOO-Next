import Image from "next/image";
import React from "react";
import image from "@/public/image.png";
export default function PositionImage() {
  return (
    <div className="w-full h-full place-items-center bg-card-background flex items-center justify-center rounded-xl cursor-pointer border hover:border-border transition-all duration-150 border-transparent">
      <Image
        src={image}
        className="w-[60%] md:w-[75%] object-fit"
        alt="image"
      />
    </div>
  );
}
