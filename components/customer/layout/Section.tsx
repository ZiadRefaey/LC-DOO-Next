import { ReactNode } from "react";

export default function Section({
  children,
  className,
  maxWidth = "max-w-[1280px]",
}: {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div className={`my-8 ${maxWidth} m-auto ${className} px-4 xl:px-0`}>
      {children}
    </div>
  );
}
