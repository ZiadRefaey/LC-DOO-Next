import React, { ReactNode } from "react";

export default function Input({
  children,
  name,
  type,
  placeholder,
}: {
  children: ReactNode;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="w-full flex items-start justify-center gap-[6px] flex-col">
      <label
        htmlFor={name}
        className="text-primary-text-soft text-preset-3 capitalize"
      >
        {children}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="px-6 md:px-8 py-3 md:py-4 rounded-xl border border-border w-full outline-primary hover:border-primary transition-all bg-inherit"
      />
    </div>
  );
}
