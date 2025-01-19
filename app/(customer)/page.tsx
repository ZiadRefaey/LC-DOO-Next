import FeaturedProducts from "@/components/customer/layout/Home/FeaturedProducts";
import Hero from "@/components/customer/layout/Home/Hero";
import NewArrivalsProducts from "@/components/customer/layout/Home/NewArrivalsProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <NewArrivalsProducts />
    </>
  );
}
