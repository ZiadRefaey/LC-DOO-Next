import React from "react";
import ContactOption from "./ContactOption";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactOptionsList() {
  return (
    <div className="flex items-center justify-between gap-3 mt-3 md:mt-8 xl:mt-3 flex-col md:flex-row md:justify-between xl:flex-col xl:justify-center xl:gap-10 w-full  max-w-[300px]">
      <ContactOption
        header="Whatsapp"
        value="01010101101"
        icon={<FaWhatsapp className="size-7 text-green-700" />}
      />
      <ContactOption
        header="Facebook"
        value="www.facebook.com"
        icon={<FaFacebook className="size-7 text-blue-700" />}
      />
      <ContactOption
        header="Address"
        value="Tanta"
        icon={<IoLocationSharp className="size-7 text-primary" />}
      />
    </div>
  );
}
