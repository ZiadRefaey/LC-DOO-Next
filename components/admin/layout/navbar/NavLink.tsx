import Link from "next/link";
import { ReactNode } from "react";

export default function NavLink({
  icon,
  href,
  linkTitle,
}: {
  icon: ReactNode;
  href: string;
  linkTitle: string;
}) {
  return (
    <Link
      href={href}
      className="group w-[250px] text-preset-3 transition-all duration-200 flex items-center justify-start text-end p-3 gap-4 hover:bg-primary hover:text-secondary-text rounded-xl"
    >
      <div className="text-xl">{icon}</div>
      {linkTitle}
    </Link>
  );
}
