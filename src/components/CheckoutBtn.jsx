"use client";
import Link from "next/link";
import useStore from "@/store/cart";
import { FaArrowRight } from "react-icons/fa";

const CheckoutBtn = () => {
  const { cart, clearCart } = useStore();
  if (cart.length === 0) return null;
  return (
    <Link href="/basket/confirmation" onClick={clearCart} className="bg-[#5F6B5F] hover:bg-[#3f483f] text-white px-6 py-3 rounded-lg transition-colors duration-300">
      <div className="flex items-center gap-2">
        Go to payment <FaArrowRight />
      </div>
    </Link>
  );
};

export default CheckoutBtn;
