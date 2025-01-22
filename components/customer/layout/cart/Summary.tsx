import React from "react";
import Divider from "../../ui/Divider";
import PrimaryButton from "../../ui/PrimaryButton";

export default function Summary() {
  return (
    <div className="w-full h-full py-4 px-6 md:py-6 md:px-10 xl:py-4 xl:px-6 rounded-xl bg-card-background border border-border flex flex-col items-center justify-center gap-4">
      <h3 className="text-preset-2 uppercase">Order Summary</h3>
      <Divider />
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <p className="w-full flex items-center justify-between text-preset-4">
          Sub Total:
          <span className="text-preset-4-bold">250 LE</span>
        </p>
        <p className="w-full flex items-center justify-between text-preset-4">
          Delivery Fee:
          <span className="text-preset-4-bold">20 LE</span>
        </p>
        <Divider />
        <p className="w-full flex items-center justify-between text-preset-4">
          Total:
          <span className="text-preset-4-bold">270 LE</span>
        </p>
      </div>
      <PrimaryButton className="w-full mt-4">Check Out</PrimaryButton>
    </div>
  );
}
