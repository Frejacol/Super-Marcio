import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ id, title, price, image }) => {
  return (
    <article className="rounded-2xl bg-[#d7dbc9]">
      <Link href={`/product/${id}`}>
        <div className="rounded-t-2xl bg-[#BAC4BA] p-5">
          <h3 className="font-bold text-center text-xl">{title}</h3>
        </div>
        <Image
          loading="eager"
          src={image}
          width={400}
          height={400}
          alt={title}
          className="aspect-[4/3] w-full  object-cover"
        />
      </Link>
      <div className="flex rounded-b-2xl bg-[#BAC4BA] p-5 justify-between">
        <p className="font-bold">{price} $</p>
        <p>+</p>
      </div>
    </article>
  );
};

export default ProductCard;
