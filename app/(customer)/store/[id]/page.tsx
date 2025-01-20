import ProductDetails from "@/components/customer/layout/product/ProductDetails";
import Section from "@/components/customer/ui/Section";

export default async function Page() {
  // {  params,}: {  params: Promise<{ id: string }>;}
  // const Params = await params;
  // const id = Params.id;
  return (
    <Section>
      <ProductDetails />
    </Section>
  );
}
