import React from "react";
import { twMerge } from "tailwind-merge";

export default function Divider({ className }: { className?: string }) {
  return (
    <div className={twMerge(`w-full h-[1px] bg-divider`, className)}></div>
  );
}
