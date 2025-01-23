import Image from "next/image";
import React from "react";
import image from "@/public/image.png";

export default function ItemImage() {
  return (
    <div className="relative w-[150] h-[120px] md:h-[200px] md:w-[250px] xl:h-[224px] xl:w-[280px] rounded-xl bg-card-background ">
      <Image
        src={image}
        fill
        className="object-contain max-h-[85%] self-center"
        alt="%product%'s image"
      />
    </div>
  );
}
