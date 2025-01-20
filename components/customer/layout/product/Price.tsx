import DiscountBadge from "@/components/ui/DiscountBadge";
import React from "react";

export default function Price() {
  return (
    <div className="flex items-center justify-start gap-[56px]">
      <p className="text-preset-1 flex items-center justify-center gap-2">
        260$
        <span className="text-preset-2 line-through text-primary-text/40">
          300$
        </span>
      </p>
      <DiscountBadge discountPercentage={20} />
    </div>
  );
}
