import AuthMenu from "@/components/customer/layout/navbar/AuthMenu";
import NavLogo from "@/components/customer/layout/navbar/NavLogo";
import ThemeSwitcher from "@/components/customer/layout/navbar/ThemeSwitcher";
import React from "react";

export default function Header() {
  return (
    <header className="w-full col-span-2">
      <div className="w-full max-w-[calc(100vw-40px)] py-10 flex items-center justify-between mx-auto px-6">
        <NavLogo />
        <div className="flex items-center justify-center gap-5">
          <ThemeSwitcher />
          <AuthMenu />
        </div>
      </div>
    </header>
  );
}
