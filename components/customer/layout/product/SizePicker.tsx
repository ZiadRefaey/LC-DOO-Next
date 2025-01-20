import React from "react";
import Size from "../../ui/Size";

export default function SizePicker() {
  return (
    <div className="flex items-start justify-center gap-1">
      <Size>S</Size>
      <Size>M</Size>
      <Size selected={true}>L</Size>
      <Size>XL</Size>
    </div>
  );
}
