import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export default function PrimaryButton({
  type = "button",
  children,
  className,
  onClick,
  disabled,
  href,
}: {
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}) {
  const unifiedClassName =
    "bg-primary py-3 px-5 text-preset-3-bold text-secondary-text rounded-xl transition-all duration-150 text-center hover:bg-btn-hover";
  if (href)
    return (
      <Link className={cn(unifiedClassName, className)} href={href}>
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(unifiedClassName, className)}
    >
      {children}
    </button>
  );
}
