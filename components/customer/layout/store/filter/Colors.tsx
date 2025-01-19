import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Color from "@/components/ui/Color";
export default function Colors() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Colors</AccordionTrigger>
        <AccordionContent className="flex items-center justify-start flex-wrap flex-row">
          <Color color="primary" />
          <Color color="success" />
          <Color color="error" />
          <Color color="secondary" />
          <Color color="primary-text" />
          <Color color="divider" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
