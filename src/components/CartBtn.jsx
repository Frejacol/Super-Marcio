import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const CartBtn = () => {
  return (
    <Link href="/basket" aria-label="Cart">
      <FaCartShopping className="h-6 w-6" />
    </Link>
  );
};

export default CartBtn;
