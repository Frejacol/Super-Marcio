import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const CartBtn = () => {
  return (
    <Link href="/basket" aria-label="Cart">
      <FaCartShopping />;
    </Link>
  );
};

export default CartBtn;
