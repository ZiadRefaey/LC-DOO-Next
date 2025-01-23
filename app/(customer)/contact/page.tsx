import Image from "next/image";
import React from "react";
import hero from "@/public/contact-hero.png";
import ContactDetails from "@/components/customer/layout/contact/ContactDetails";
import Section from "@/components/customer/ui/Section";
export default function page() {
  return (
    <main className="w-full flex flex-col gap-[50px]  ">
      <section className="w-[100vw] h-[600px] xl:h-[500px] relative flex items-center justify-center -mx-6 md:-mx-10 xl:-mx-[100px]">
        <p className="text-5xl font-bold z-10 text-white uppercase">
          contact us
        </p>
        <Image
          src={hero}
          alt="hero section's background"
          className="object-cover w-full h-full"
          fill
        />
      </section>
      <Section className="grid grid-cols-1 xl:grid-cols-[0.35fr,0.65fr]">
        <ContactDetails />
      </Section>
    </main>
  );
}
