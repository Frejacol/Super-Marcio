import ReviewCard from "@/components/ReviewCard";
import TitleSections from "@/components/TitleSections";

const ProductPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <main>
      <h1>{product.title}</h1>

      <TitleSections title="Product Reviews" />

      <ul className="mt-4 flex grid grid-cols-3 gap-4">
        {product.reviews.map((review, index) => (
          <ReviewCard
            key={index}
            rating={review.rating}
            comment={review.comment}
            reviewerName={review.reviewerName}
          />
        ))}
      </ul>
    </main>
  );
};

export default ProductPage;
