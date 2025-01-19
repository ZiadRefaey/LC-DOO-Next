import Section from "../../ui/Section";
export default function ProductShowcase({
  title,
  HeaderTag,
}: //   products,
{
  title: string;
  HeaderTag: React.ElementType;
}) {
  return (
    <Section>
      <HeaderTag className={"text-preset-1 uppercase mb-10"}>{title}</HeaderTag>
    </Section>
  );
}
