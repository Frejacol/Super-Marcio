import Image from "next/image";
import { Suspense } from "react";
import ProductInfo from "@/components/ProductInfo";

const ProductPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <Suspense fallback="Loading...">
      <div className="grid grid-cols-2 items-center">
        <Image src={product.images[0]} alt={product.title} width={500} height={500} className="width-[100%]" />
        <ProductInfo producttitle={product.title} description={product.description} instock={product.stock} price={product.price} />
      </div>
    </Suspense>
  );
};

export default ProductPage;
