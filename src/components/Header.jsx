import Link from "next/link";
import CartBtn from "./CartBtn";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#BAC4BA] p-6">
      <Link href="/" className="font-bold text-2xl hover:scale-105 transition-all duration-400 cursor-pointer">
        Super Marcio
      </Link>

      <nav>
        <ul className="flex items-center gap-25 font-bold">
          <li className="hover:text-[#2a312a] transition-colors duration-300">
            <Link href="/groceries">Groceries</Link>
          </li>
          <li className="hover:text-[#2a312a] transition-colors duration-300">
            <Link href="/categories">Categories</Link>
          </li>
          <li className="hover:text-[#2a312a] transition-colors duration-300">
            <Link href="/#">About</Link>
          </li>
          <li className="hover:text-[#2a312a] transition-colors duration-300">
            <Link href="/#">Contact</Link>
          </li>
        </ul>
      </nav>

      <CartBtn />
    </header>
  );
};

export default Header;
