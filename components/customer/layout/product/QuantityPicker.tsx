import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuantityPicker() {
  return (
    <div className="bg-card-background rounded-xl flex items-center justify-between w-full px-20 py-3 text-preset-5">
      <FaMinus />
      <span className="text-preset-3">2</span>
      <FaPlus />
    </div>
  );
}
