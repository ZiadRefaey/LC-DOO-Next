import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/public/image.png";
import StarRating from "../../ui/StarRating";
import { product } from "./product.type";
export default function ProductCard({
  href,
  title,
  discountPercentage,
  price,
  rating,
}: product) {
  return (
    <Link
      href={`${href}`}
      className="self-center group w-[292px] flex flex-col gap-5 cursor-pointer group  transition-all duration-200"
    >
      <div className="w-full h-[295px] bg-card-background border-[1px] rounded-2xl p-9 relative">
        <div className=" absolute top-3 right-3 bg-error/10 rounded-2xl px-4 py-2">
          <p className="text-preset-5 text-error">{discountPercentage}%</p>
        </div>
        <div className="relative size-[225px] aspect-square">
          <Image
            fill
            src={image}
            alt={`${title}'s image`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-start justify-center flex-col gap-2">
        <p className="text-preset-3-bold uppercase group-hover:underline">
          {title}
        </p>
        <div className="flex items-center justify-center gap-3">
          <StarRating />
          <p className="text-preset-4-bold mt-1">
            {rating}
            <span className="text-preset-5">/5</span>
          </p>
        </div>
        <div className="text-preset-2 flex items-center justify-center gap-3">
          <p className="">{price - (price * discountPercentage) / 100}$</p>
          <p className="text-preset-3 line-through text-gray-400">{price}$</p>
        </div>
      </div>
    </Link>
  );
}
