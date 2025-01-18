import Link from "next/link";
import { ReactNode } from "react";

export default function SecondaryButton({
  children,
  className,
  href,
  onClick,
  type,
}: {
  children: ReactNode;
  className: string;
  href: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
}) {
  if (href)
    return (
      <Link
        className={`${className} text-body-sm xl:text-body-lg md:text-body-md hover:text-tertiary transition-all duration-200`}
        href={href}
      >
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ]text-body-sm xl:text-body-lg md:text-body-md hover:text-tertiary transition-all duration-200`}
    >
      {children}
    </button>
  );
}
