import CartItemsList from "@/components/customer/layout/cart/CartItemsList";
import Summary from "@/components/customer/layout/cart/Summary";
import Section from "@/components/customer/ui/Section";
import React from "react";

export default function page() {
  return (
    // <main className="max-w-[1240px] py-[30px] m-auto md:py-10">
    <>
      <h2 className="w-full text-center text-preset-1">SHOPPING CART</h2>
      <Section className="grid grid-cols-1 lg:grid-cols-[0.7fr,0.3fr] items-start gap-[32px] md:gap-[52px] xl:gap-[100px]">
        <CartItemsList />
        <Summary />
      </Section>
    </>
    // </main>
  );
}
