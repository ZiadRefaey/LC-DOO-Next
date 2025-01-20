import React from "react";
import StarRating from "../../ui/StarRating";

export default function Rating() {
  return (
    <div className="flex items-center justify-center gap-4">
      <StarRating />
      <p className="text-primary text-preset-4-bold mt-[2px]">
        4.7 stars <span className="text-preset-5">(42 reviews)</span>
      </p>
    </div>
  );
}
