import React from "react";
import CartItem from "./CartItem";
import CartPagination from "./CartPagination";

export default function CartItemsList() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartPagination />
    </section>
  );
}
