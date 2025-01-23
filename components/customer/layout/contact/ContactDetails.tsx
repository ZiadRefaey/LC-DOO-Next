import React from "react";
import ContactDetailsHeader from "./ContactDetailsHeader";
import ContactOptionsList from "./ContactOptionsList";

export default function ContactDetails() {
  return (
    <div className="w-full py-5 md:py-10 px-8 flex flex-col gap-3 items-center justify-center xl:items-start border border-border rounded-xl">
      <ContactDetailsHeader />
      <ContactOptionsList />
    </div>
  );
}
