import React, { ReactNode } from "react";

export default function ContactOption({
  icon,
  header,
  value,
}: {
  icon: ReactNode;
  header: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[auto,1fr] place-items-center md:flex md:items-center md:justify-center xl:grid xl:grid-cols-[auto,1fr] gap-5 md:flex-col xl:flex-row w-full self-center">
      <div className="rounded-full size-[60px] bg-card-background text-preset-2 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex items-center justify-center flex-col gap-2 text-center   ">
        <p className="text-preset-5 text-primary-text-soft">{header}</p>
        <p className="text-preset-5-bold">{value}</p>
      </div>
    </div>
  );
}
