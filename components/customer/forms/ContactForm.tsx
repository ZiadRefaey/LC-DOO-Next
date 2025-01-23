import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export default function ContactForm() {
  const inputStyles =
    "w-full bg-card-background py-3 px-4 md:px-6 outline-primary border hover:border-primary rounded-xl";
  return (
    <form className="w-full flex flex-col items-center justify-center gap-4 h-full">
      <input
        placeholder="Your Name"
        name="fullName"
        type="text"
        className={inputStyles}
      />
      <input
        placeholder="Email"
        name="email"
        type="email "
        className={inputStyles}
      />
      <input
        placeholder="Phone Number (whatsapp)"
        name="phone"
        type="text"
        className={inputStyles}
      />
      <textarea
        placeholder="Your Message..."
        className={`${inputStyles} h-full`}
      />
      <PrimaryButton className="py-5 w-full">Send Message</PrimaryButton>
    </form>
  );
}
