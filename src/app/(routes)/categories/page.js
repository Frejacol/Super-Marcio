import PageTitle from "@/components/PageTitle";
import SearchSection from "@/components/SearchSection";

export default function Listview() {
  return (
    <div className="grid grid-cols-3 items-center p-8">
      <div />
      <PageTitle ptitle="Categories" />
      <div className="justify-self-end">
        <SearchSection />
      </div>
    </div>
  );
}
