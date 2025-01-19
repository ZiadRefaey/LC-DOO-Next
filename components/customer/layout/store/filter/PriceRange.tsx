import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function PriceRange() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Price</AccordionTrigger>
        <AccordionContent className="flex items-center justify-center flex-wrap flex-row gap-7">
          <div className="flex items-center justify-center gap-5">
            <input
              //   value={200}
              type="number"
              className="w-[64px] h-[25px] rounded-lg border border-border text-primary-text"
            ></input>
            <div className="w-4 h-[2px] bg-primary"></div>
            <input
              //   value={200}
              type="number"
              className="w-[64px] h-[25px] rounded-lg border border-border text-primary-text"
            ></input>
          </div>
          <div className="w-full h-[8px] bg-card-background overflow-hidden">
            <div className="w-[75%] bg-primary rounded-full h-full"></div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
