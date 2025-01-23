import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sizes = ["s", "m", "l", "xl", "xxl"];
const colors = ["black", "red", "blue", "green"];
export default function ItemOptions() {
  return (
    <div className="flex items-start w-full justify-start flex-col gap-2 md:gap-3">
      <p className="flex items-center w-full justify-start gap-4">
        Size &nbsp; | <SelectOptions options={sizes} defaultValue="L" />
      </p>
      <p className="flex items-center w-full justify-start gap-4">
        Color | <SelectOptions options={colors} defaultValue="red" />
      </p>
    </div>
  );
}
function SelectOptions({
  defaultValue,
  options,
}: {
  defaultValue: string;
  options: string[];
}) {
  return (
    <Select>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent defaultValue={defaultValue}>
        {options.map((option) => (
          <SelectItem key={option} value={option} className="capitlize">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
