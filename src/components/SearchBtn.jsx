import { FaSearch } from "react-icons/fa";

const SearchBtn = () => {
  return (
    <button type="submit" aria-label="Search" className="h-13 w-13 ">
      <FaSearch className="h-6 w-6" />
    </button>
  );
};

export default SearchBtn;
