import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const CartBtn = () => {
  return (
    <Link href="/basket" aria-label="Cart" className="hover:scale-110 transition-all duration-400 cursor-pointer">
      <FaCartShopping className="h-6 w-6" />
    </Link>
  );
};

export default CartBtn;
