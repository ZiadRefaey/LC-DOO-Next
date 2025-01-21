import ProductDetails from "@/components/customer/layout/product/ProductDetails";
import Reviews from "@/components/customer/layout/product/Reviews";

export default async function Page() {
  // {  params,}: {  params: Promise<{ id: string }>;}
  // const Params = await params;
  // const id = Params.id;
  return (
    <>
      <ProductDetails />
      <Reviews />
    </>
  );
}
