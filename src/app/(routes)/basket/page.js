
import PageTitle from "@/components/PageTitle";
import CartOverview from "@/components/CartOverview";

export default function ListBasket() {


  return (
    <div className="p-8">
      <PageTitle ptitle="Basket" />
      <CartOverview />
    </div>
  );
}
