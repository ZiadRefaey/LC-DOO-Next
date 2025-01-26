"use client";

import NavWrapper from "./NavWrapper";
import NavLinksWrapper from "./NavLinksWrapper";
import NavLogo from "./NavLogo";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import AuthMenu from "./AuthMenu";
import { usePathname } from "next/navigation";
export default function DesktopNavbar() {
  const pathname = usePathname();
  const noNavbarRoutes = ["/login", "/register"]; // Add routes where the navbar should not appear
  if (noNavbarRoutes.includes(pathname)) return;
  return (
    <NavWrapper>
      <div className="flex items-center justify-start transition-all duration-500 static">
        <NavLogo />
      </div>
      <NavLinksWrapper />
      <div
        className={`flex items-center justify-end gap-4 transition-all duration-500`}
      >
        <SearchBar />
        <ThemeSwitcher />
        <ShoppingCart />
        <AuthMenu />
      </div>
    </NavWrapper>
  );
}
