import Image from "next/image";
import AddRemoveButton from "./AddRemoveButton";

const CartOverview = ({ image, price, title }) => {
  return (
    <div className=" grid grid-cols-6 font-bold text-xl">
      <p className="col-start-2">Products</p>
      <p className="col-start-5">Quantity</p>
      <p className="col-start-6">Total Price</p>

      <section className="h-1 bg-[#939B93] col-start-1 col-end-7 rounded-2xl mt-1"></section>

      <ul>
        <li>
          <Image
            src={image}
            alt="Product Image"
            width={100}
            height={100}
            className="col-start-2 col-end-6"
          />
          <h1>{title}</h1>

          <AddRemoveButton className="col-start-4 col-end-5" />
          <p className="col-start-6 col-end-7">{price}</p>
        </li>
      </ul>
    </div>
  );
};

export default CartOverview;
