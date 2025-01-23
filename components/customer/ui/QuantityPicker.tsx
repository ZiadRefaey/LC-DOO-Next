import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function QuantityPicker({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "bg-card-background rounded-xl flex items-center justify-between w-full px-20 py-3 text-preset-5",
        className
      )}
    >
      <FaMinus />
      <span className="text-preset-3">2</span>
      <FaPlus />
    </div>
  );
}
