import Hero from "@/components/Hero";
import { FaSearch, FaTruck } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import InfoCard from "@/components/InfoCard";
import TitleSections from "@/components/TitleSections";
import FrontPageCategories from "@/components/FrontPageCategories";

export default function Home() {
  return (
    <>
      <Hero />

      <TitleSections title="Our Categories" />
      <FrontPageCategories />

      <TitleSections title="How it works" />
      <section className="grid grid-cols-3 gap-20 mt-10">
        <InfoCard icon={<FaSearch />} title="Browse Products" text="Get a view of all of out products." />
        <InfoCard icon={<FaCartShopping />} title="Add to cart" text="Take a look of your groceries in your cart." />
        <InfoCard icon={<FaTruck />} title="Delivery right to your door" text="Our Delievery services." />
      </section>
    </>
  );
}
