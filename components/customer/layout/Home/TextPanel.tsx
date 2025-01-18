import PrimaryButton from "@/components/customer/ui/PrimaryButton";

export default function TextPanel() {
  return (
    <div className="flex items-center justify-center xl:items-start flex-col gap-4 gap">
      <h1 className="font-bold text-4xl max-w-[240px] md:text-5xl md:max-w-[350px] xl:max-w-[500px] xl:text-start text-primary-text m-auto xl:text-7xl text-center xl:mx-0">
        <span className="text-primary">Discover</span> Home Crafted Elegance.
      </h1>
      <p className="text-lg text-center">
        Explore a Wolrd of Magnificent Leather Goods.
      </p>
      <PrimaryButton href={"/products"} className={"w-[230px]"}>
        Shop Now
      </PrimaryButton>
    </div>
  );
}
