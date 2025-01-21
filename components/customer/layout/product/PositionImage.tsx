import Image from "next/image";
import React from "react";
import image from "@/public/image.png";
export default function PositionImage() {
  return (
    <div className="w-full h-full place-items-center bg-card-background  flex items-center justify-center rounded-xl cursor-pointer border-2 hover:border-border transition-all duration-150 border-transparent">
      <Image src={image} className="h-[80%] w-auto object-fit" alt="image" />
    </div>
  );
}
