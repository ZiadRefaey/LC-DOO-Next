import React from "react";
import QuantityPicker from "../../ui/QuantityPicker";
import SecondaryButton from "../../ui/SecondaryButton";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ItemActions() {
  return (
    <div className="grid grid-cols-[0.8fr,0.2fr] gap-2 md:gap-3 w-full">
      <QuantityPicker className="px-10" />
      <SecondaryButton className="flex items-center justify-center hover:border-error">
        <FaRegTrashAlt className="text-preset-2 text-error" />
      </SecondaryButton>
    </div>
  );
}
