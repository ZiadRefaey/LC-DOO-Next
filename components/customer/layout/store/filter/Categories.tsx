import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
const categories = ["clothes", "bags", "wallets", "jackets", "belts"];
export default function Categories() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-center gap-3"
            >
              <Checkbox id={category} />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
