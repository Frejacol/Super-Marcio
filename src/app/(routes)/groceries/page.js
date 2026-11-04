import { Suspense } from "react";
import SearchSection from "@/components/SearchSection";
import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";
import Loading from "@/components/Loading";

export default async function Groceries({ searchParams }) {
  const { tag, query } = await searchParams;
  return (
    <>
      <div className="grid grid-cols-3 items-center p-8">
        <div />
        <PageTitle className="text-center" ptitle="Groceries" />
        <div className="justify-self-end">
          <SearchSection />
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <ProductList tag={tag} query={query} />
      </Suspense>
    </>
  );
}
