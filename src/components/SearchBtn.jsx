import { FaSearch } from "react-icons/fa";

const SearchBtn = () => {
  return (
    <button type="submit" aria-label="Search" className="h-12 w-12 ">
      <FaSearch className="h-6 w-6" />
    </button>
  );
};

export default SearchBtn;
