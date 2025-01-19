import Hero from "@/components/customer/layout/Home/Hero";
import ProductShowcase from "@/components/customer/layout/Home/ProductShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase HeaderTag={"h2"} title="FEATURED" />
      <ProductShowcase HeaderTag={"h3"} title="FEATURED" />
    </>
  );
}
