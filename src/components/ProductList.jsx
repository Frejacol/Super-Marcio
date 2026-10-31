import ProductCard from "./ProductCard";

const ProductList = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/groceries",
  );
  const data = await response.json();
  const products = data.products;

  return (
    <div className="mt-6 grid grid-cols-4 gap-10 px-8">
      {products.map((product) => (
        <div key={product.id} className="mb-4 break-inside-avoid">
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
