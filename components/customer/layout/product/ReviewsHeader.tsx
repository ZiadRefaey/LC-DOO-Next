import React from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ReviewsHeader() {
  return (
    <div className="w-full items-end justify-between flex mb-5">
      <h2 className="text-preset-2 flex items-center justify-center gap-2">
        All Reviews{" "}
        <span className="text-preset-5 text-primary-text/60 mt-1">(451)</span>
      </h2>
      <div className="grid grid-cols-2 items-center justify-center gap-2 ">
        <Select>
          <SelectTrigger className="h-full bg-card-background rounded-xl border-transparent hover:border-border hover:bg-inherit transition-all">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">oldest</SelectItem>
              <SelectItem value="best">best</SelectItem>
              <SelectItem value="worst">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <PrimaryButton>Write a Review</PrimaryButton>
      </div>
    </div>
  );
}
