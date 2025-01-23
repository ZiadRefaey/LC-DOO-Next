import Image from "next/image";
import React from "react";
import hero from "@/public/contact-hero.png";
export default function page() {
  return (
    <main className="w-[100vw] flex flex-col gap-[50px] -mx-6 -d:-mx-10 xl:-mx-[100px] ">
      <section className="w-full h-[600px] xl:h-[500px] relative flex items-center justify-center">
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
    </main>
  );
}
