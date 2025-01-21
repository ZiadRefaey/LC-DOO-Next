import React from "react";
import StarRating from "../../ui/StarRating";

export default function ReviewCard() {
  return (
    <div className="w-full rounded-xl border border-border px-6 py-4 md:px-8 md:py-6 relative flex items-start justify-center flex-col gap-3">
      <div className="flex items-center justify-center gap-2 mb-2">
        <StarRating />
        <span className="text-primary text-preset-3-bold mt-1">
          4.5<span className="text-preset-5-bold text-primary-text">/5</span>
        </span>
      </div>
      <p className="text-preset-5 text-primary-text/60">
        Posted on August 14, 2023
      </p>
      <strong className="text-preset-2">Yuwi Bad Kitty D.</strong>
      <p className="text-preset-4 text-primary-text/60">
        I absolutely love this t-shirt! The design is unique and the fabric
        feels so comfortable.
      </p>
    </div>
  );
}
