import React from "react";
import Link from "next/link";

const websiteLinks = [
  { page: "home", href: "/home" },
  { page: "store", href: "/store" },
  { page: "contact us", href: "/company" },
];
export default function NavLinks() {
  return (
    <ul className="text-center flex flex-col items-center justify-center gap-8 md:flex-row md:gap-[42px]">
      {websiteLinks.map((link) => (
        <li
          key={link.page}
          className="text-preset-3 text-primary-text-soft hover:text-primary-text transition-all uppercase"
        >
          <Link href={link.href}>{link.page}</Link>
        </li>
      ))}
    </ul>
  );
}
