"use client";
import useStore from "@/store/cart";
import Image from "next/image";
import AddRemoveButton from "./AddRemoveButton";
import CheckoutBtn from "./CheckoutBtn";

const CartOverview = () => {
  const { cart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <div className=" grid grid-cols-6 font-bold text-xl">
        <p className="col-start-2">Products</p>
        <p className="col-start-5">Quantity</p>
        <p className="col-start-6">Total Price</p>
      </div>

      <div className="h-1 bg-[#939B93] rounded-2xl mt-1 mb-6"></div>
      {cart.length === 0 ? (
        <p className="text-center text-[#939B93]">Your cart is empty</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {cart.map((item) => (
            <li key={item.id} className="grid grid-cols-6 items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
              <h2 className="col-start-2 col-end-5 text-lg">{item.title}</h2>

              <div className="col-start-5 flex">
                <AddRemoveButton
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                />
              </div>
              <p className="col-start-6">
                {(item.price * item.quantity).toFixed(2)} $
              </p>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="flex justify-between items-center mt-8">
          <p className="text-2xl font-semibold">Total: ${total.toFixed(2)}</p>
          <CheckoutBtn />
        </div>
      )}
    </div>
  );
};

export default CartOverview;
