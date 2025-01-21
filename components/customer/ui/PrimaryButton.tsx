import { cn } from "@/lib/utils";
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
}: {
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  padding?: string;
  href?: string;
  rounded?: string;
}) {
  if (href)
    return (
      <Link
        className={`${className} bg-primary py-3 px-5 text-preset-3-bold ${rounded} text-secondary-text  transition-all duration-150 text-center hover:bg-btn-hover`}
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
      className={cn(
        `bg-primary py-3 px-5 text-preset-3-bold ${rounded} text-secondary-text transition-all duration-150 text-center hover:bg-btn-hover`,
        className
      )}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
}
