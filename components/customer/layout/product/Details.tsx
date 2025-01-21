import React from "react";
import Rating from "./Rating";
import Header from "./Header";
import Price from "./Price";
import FormControlGroup from "./FormControlGroup";
import Colors from "./Colors";
import QuantityPicker from "./QuantityPicker";
import Description from "./Description";
import SizePicker from "./SizePicker";
import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";
import { FaRegHeart } from "react-icons/fa";
import Divider from "../../ui/Divider";

export default function Details() {
  return (
    <div className="flex items-start justify-start flex-col gap-5 w-full h-full ">
      <Rating />
      <Header />
      <Price />
      <Description />
      <Divider />
      <FormControlGroup label="Select Colors">
        <Colors />
      </FormControlGroup>
      <Divider />
      <FormControlGroup label="Pick Size">
        <SizePicker />
      </FormControlGroup>
      <Divider />
      <FormControlGroup label="Choose Quantity">
        <QuantityPicker />
      </FormControlGroup>
      <Divider />
      <div className="flex items-center justify-center gap-4 w-full">
        <PrimaryButton className="w-[80%] py-4">Add to Cart</PrimaryButton>
        <SecondaryButton className="w-[20%] flex items-center justify-center py-4">
          <FaRegHeart className="text-preset-2" />
        </SecondaryButton>
      </div>
    </div>
  );
}
