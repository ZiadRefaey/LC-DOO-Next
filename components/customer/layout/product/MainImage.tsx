import Image from "next/image";
import React from "react";
import image from "@/public/image.png";
export default function MainImage({ title }: { title: string }) {
  return (
    <div className="w-full h-full bg-card-background rounded-xl ">
      <div className="w-full h-[100%] relative m-auto flex items-center justify-center">
        <Image
          src={image}
          className="object-contain w-auto h-[80%]"
          alt={`${title}'s Image`}
        />
      </div>
    </div>
  );
}
