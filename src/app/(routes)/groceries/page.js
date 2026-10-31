import { Suspense } from "react";
import SearchSection from "@/components/SearchSection";
import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";

export default function Listview() {
  return (
    <>
      <div className="grid grid-cols-3 items-center p-8">
        <div />
        <PageTitle className="text-center" ptitle="Groceries" />
        <div className="justify-self-end">
          <SearchSection />
        </div>
      </div>
      <Suspense fallback={<div className="mt-6">Loading...</div>}>
        <ProductList />
      </Suspense>
    </>
  );
}
