import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
const materials = ["leather", "cotton", "fabric"];
export default function Materials() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Material</AccordionTrigger>
        <AccordionContent>
          {materials.map((material) => (
            <div
              key={material}
              className="flex items-center justify-center gap-3"
            >
              <Checkbox id={material} />
              <label htmlFor={material}>{material}</label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
