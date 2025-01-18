import Link from "next/link";
import { ReactNode } from "react";

export default function PrimaryButton({
  type = "button",
  children,
  className,
  onClick,
  padding,
  disabled,
  href,
  rounded = "rounded-lg md:rounded-xl",
  color = "bg-tertiary",
}: {
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  padding?: string;
  href?: string;
  rounded?: string;
  color?: string;
}) {
  if (href)
    return (
      <Link
        className={`${className} py-2 px-5 text-sm ${rounded} md:text-md lg:text-lg ${color} hover:bg-btn-hover text-white bg-primary transition-all duration-150 text-center`}
        style={{ padding: padding }}
        href={href}
      >
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={` py-2 px-5 text-sm ${rounded} md:text-md lg:text-lg ${className} ${color} hover:opacity-75 text-white transition-all duration-150`}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
}
