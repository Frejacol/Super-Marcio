import { FaCartShopping } from "react-icons/fa6";

const AddToCartBtn = () => {
  return (
    <button className="flex items-center justify-center p-3 bg-[#BAC4BA] text-white rounded-2xl gap-2 font-bold">
      <p>Add to cart</p>
      <FaCartShopping className="h-5 w-5" />
    </button>
  );
};

export default AddToCartBtn;
