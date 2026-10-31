import SearchBtn from "./SearchBtn";
import SearchBar from "./SearchBar";
import Form from "next/form";

const SearchSection = () => {
  return (
    <Form className="mb-6 grid grid-cols-[auto_1fr] max-w-xs gap-2">
      <SearchBtn />
      <SearchBar />
    </Form>
  );
};

export default SearchSection;
