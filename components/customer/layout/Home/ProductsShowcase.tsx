import { product } from "../product.type";
import ProductsList from "../ProductsList";
export default function ProductsShowcase({
  products,
}: {
  products: product[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-5 items-center justify-between w-full place-items-center">
      <ProductsList products={products} />
    </div>
  );
}
