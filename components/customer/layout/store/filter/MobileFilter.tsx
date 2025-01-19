"use client";

import PrimaryButton from "@/components/customer/ui/PrimaryButton";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Filter from "./Filter";
import { FaFilter } from "react-icons/fa6";

export function MobileFilter() {
  return (
    <div className="xl:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="fixed bottom-10 left-10 size-10 rounded-full bg-primary flex items-center justify-center shadow-xl">
            <FaFilter className="size-4 text-secondary-text" />
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Filters</DrawerTitle>
              <DrawerDescription>Filter the products.</DrawerDescription>
            </DrawerHeader>
            <Filter />
            <DrawerFooter>
              <PrimaryButton>Apply Filters</PrimaryButton>
              <DrawerClose asChild>
                <PrimaryButton>Cancel</PrimaryButton>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
<div className="mx-auto w-full max-w-sm">
  <DrawerHeader>
    <DrawerTitle>Filters</DrawerTitle>
    <DrawerDescription>Filter the products.</DrawerDescription>
  </DrawerHeader>

  <DrawerFooter>
    <PrimaryButton>Apply Filters</PrimaryButton>
    <DrawerClose asChild>
      <PrimaryButton>Cancel</PrimaryButton>
    </DrawerClose>
  </DrawerFooter>
</div>;
