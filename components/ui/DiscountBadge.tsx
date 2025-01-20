import React from "react";

export default function DiscountBadge({
  discountPercentage,
  className,
}: {
  className?: string;
  discountPercentage: number;
}) {
  return (
    <span
      className={`${className} bg-error/10 rounded-2xl px-4 py-2 text-center text-preset-5 text-error`}
    >
      <p className="">{discountPercentage}%</p>
    </span>
  );
}
