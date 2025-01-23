import Divider from "../../ui/Divider";

import ItemActions from "./ItemActions";
import ItemHeader from "./ItemHeader";
import ItemImage from "./ItemImage";
import ItemOptions from "./ItemOptions";

export default function CartItem() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3 md:gap-4 w-full">
      <Divider />
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex flex-col items-start justify-center gap-5 md:gap-10 w-full">
          <ItemHeader />
          <ItemOptions />
          <ItemActions />
        </div>
        <ItemImage />
      </div>
      <Divider />
    </div>
  );
}
