import Link from "next/link";
import CartBtn from "./CartBtn";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#BAC4BA] p-6">
      <Link href="/" className="font-bold text-2xl">
        Super Marcio
      </Link>

      <nav>
        <ul className="flex items-center gap-25 font-bold">
          <li>
            <Link href="/groceries">Groceries</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/#">About</Link>
          </li>
          <li>
            <Link href="/#">Contact</Link>
          </li>
        </ul>
      </nav>

      <CartBtn />
    </header>
  );
};

export default Header;
