import Link from "next/link";
import { ReactNode } from "react";

export default function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode;
  active?: string;
}) {
  return (
    <Link
      href={href}
      className={`${
        active ? "text-primary-text underline" : "text-lightGray font-regular"
      } text-preset-3 text-border hover:text-primary-text hover:underline`}
    >
      {children}
    </Link>
  );
}
