import Image from "next/image";
import { Suspense } from "react";
import ProductInfo from "@/components/ProductInfo";
import ReviewCard from "@/components/ReviewCard";
import TitleSections from "@/components/TitleSections";

const ProductPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <Suspense fallback="Loading...">
      <div className="grid grid-cols-2 items-center">
        <Image src={product.images[0]} alt={product.title} width={500} height={500} className="width-[100%]" />
        <ProductInfo id={product.id} image={product.images[0]} producttitle={product.title} description={product.description} instock={product.stock} price={product.price} />
      </div>
      <TitleSections title="Product Reviews" />

      <ul className="mt-4 grid grid-cols-3 gap-4">
        {product.reviews.map((review, index) => (
          <ReviewCard key={index} rating={review.rating} comment={review.comment} reviewerName={review.reviewerName} />
        ))}
      </ul>
    </Suspense>
  );
};

export default ProductPage;
