import React, { ReactNode } from "react";

export default function FormControlGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start justify-center gap-2 flex-col w-full">
      <label className="text-preset-3 text-primary-text/60 capitalize">
        {label}
      </label>
      {children}
    </div>
  );
}
