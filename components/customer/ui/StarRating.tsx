import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  return (
    <div className="flex items-center justify-center gap-1 ">
      <FaStar className="size-5" />
      <FaStar className="size-5" />
      <FaStar className="size-5" />
      <FaStar className="size-5" />
      <FaStar className="size-5" />
    </div>
  );
}
