import Link from "next/link";
import { ReactNode } from "react";

export default function SecondaryButton({
  children,
  className,
  href,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  const sharedClassName =
    "text-preset-4-bold bg-card-background hover:bg-inherit hover:border hover:border-primary transition-all duration-200 rounded-xl py-4 px-6 border text-center";
  if (href)
    return (
      <Link className={`${className} ${sharedClassName}`} href={href}>
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${sharedClassName}`}
    >
      {children}
    </button>
  );
}
