import React from "react";
import NavLogo from "../navbar/NavLogo";
import Divider from "../../ui/Divider";
import ContactInfo from "./ContactInfo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-card-background text-primary-text py-20 md:py-[120px] xl:py-40 relative rounded-3xl md:px-3 mb-6 md:mb-10 max-w-[1240px] mx-6 md:mx-10 xl:mx-auto">
      <div className=" px-6 md:px-10 xl:p-0 xl:max-w-[1111px] m-auto flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-8 items-center justify-center w-full md:flex-row md:justify-between">
          <NavLogo />
          <Divider className="block md:hidden" />
          <NavLinks />
        </div>

        <Divider className="hidden md:block" />

        <div className="flex flex-col items-center justify-center gap-10 md:gap-0 md:flex-row md:justify-between w-full md:items-end">
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
