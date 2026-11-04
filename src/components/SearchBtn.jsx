import { FaSearch } from "react-icons/fa";

const SearchBtn = () => {
  return (
    <button type="submit" aria-label="Search" className="h-12 w-12  items-center justify-center hover:scale-115 transition-all duration-400 cursor-pointer">
      <FaSearch className="h-6 w-6" />
    </button>
  );
};

export default SearchBtn;
