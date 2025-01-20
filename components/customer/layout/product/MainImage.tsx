import Image from "next/image";
import React from "react";
import image from "@/public/image.png";
export default function MainImage({ title }: { title: string }) {
  return (
    <div className="w-full h-[80%] bg-card-background rounded-xl">
      <div className="w-[70%] h-full relative m-auto place-items-center">
        <Image
          src={image}
          fill
          className="object-contain"
          alt={`${title}'s Image`}
        />
      </div>
    </div>
  );
}
