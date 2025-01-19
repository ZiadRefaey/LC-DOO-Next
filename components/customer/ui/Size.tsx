import React, { ReactNode } from "react";

export default function Size({
  selected,
  children,
}: {
  selected?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`${
        selected
          ? "size-[36px] rounded-full bg-primary text-secondary-text mx-2"
          : "w-[42px] h-[35px] rounded-lg bg-card-background text-primary-text hover:size-[36px] hover:rounded-full hover:bg-primary hover:text-secondary-text transition-all hover:mx-[3px]"
      }  text-center flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
