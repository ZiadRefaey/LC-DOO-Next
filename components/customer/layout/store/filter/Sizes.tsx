import Size from "@/components/customer/ui/Size";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Sizes() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Sizes</AccordionTrigger>
        <AccordionContent className="flex items-center justify-start flex-wrap flex-row">
          <Size>S</Size>
          <Size selected={true}>M</Size>
          <Size>L</Size>
          <Size>XL</Size>
          <Size>XXL</Size>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
