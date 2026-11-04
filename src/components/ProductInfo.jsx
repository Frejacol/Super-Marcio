import AddRemoveButton from "./AddRemoveButton";

const ProductInfo = ({ id, image, producttitle, description, price, instock }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">{producttitle}</h1>
      <p className="font-medium mb-5">{description}</p>
      <p className="font-normal mb-5">{instock} in stock</p>
      <p className="font-bold text-2xl mb-5">{price} $</p>
      <AddRemoveButton id={id} title={producttitle} price={price} image={image} />
    </div>
  );
};

export default ProductInfo;
