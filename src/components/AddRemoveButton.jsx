"use client";
import useStore from "@/store/cart";

const AddRemoveButton = ({ id, title, price, image }) => {
  const { cart, addToCart, removeFromCart } = useStore();

  const quantity = cart.find((item) => item.id === Number(id))?.quantity ?? 0;
  return (
    <div className="flex items-center justify-center text-xl">
      <button onClick={() => removeFromCart(id)} className="bg-[#83957d] hover:bg-[#687763] rounded-xl p-2 font-bold pr-4 pl-4 cursor-pointer">
        -
      </button>
      <input value={quantity} readOnly className="w-12 font-bold justify-center text-center" />
      <button onClick={() => addToCart({ id, title, price, image })} className="bg-[#83957d] hover:bg-[#687763] rounded-xl p-2 font-bold pr-4 pl-4 cursor-pointer">
        +
      </button>
    </div>
  );
};

export default AddRemoveButton;
