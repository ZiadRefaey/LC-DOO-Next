import React, { ReactNode } from "react";

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`py-[30px] m-auto md:py-10 flex flex-col items-center justify-center max-w-[1240px] ${className}`}
    >
      {children}
    </section>
  );
}
