import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ categoryName, categoryPicture, tags }) => {
  return (
    <Link href={`/groceries?tag=${encodeURIComponent(tags)}`} className="bg-[#FFF3E9] rounded-lg p-4 flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-10">{categoryName}</h2>
      <Image src={categoryPicture} alt={categoryName} width={300} height={200} className="w-[60%] place-self-center" />
    </Link>
  );
};

export default CategoryCard;
