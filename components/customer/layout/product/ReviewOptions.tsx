import React from "react";
import { FaEllipsisH, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SecondaryButton from "../../ui/SecondaryButton";
export default function ReviewOptions() {
  return (
    <Popover>
      <PopoverTrigger className="absolute right-6 top-4 md:right-8 md:top-6 rounded-full p-3 cursor-pointer hover:bg-card-background transition-all text-primary-text hover:text-primary-text/60">
        <FaEllipsisH />
      </PopoverTrigger>
      <PopoverContent>
        <SecondaryButton className="w-full flex items-center justify-center gap-3">
          Edit <FaRegEdit />
        </SecondaryButton>
        <SecondaryButton className="w-full flex items-center justify-center gap-3">
          Delete <FaRegTrashAlt />
        </SecondaryButton>
      </PopoverContent>
    </Popover>
  );
}
