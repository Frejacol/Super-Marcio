import CategoryCard from "./CategoryCard";

const CategoryCards = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 bg-[#939B93] p-10 -mx-10 mt-5 mb-10">
        <CategoryCard categoryName="Fruits & Vegetables" categoryPicture="/fruitAndVegetables.png" tags="fruits,vegetables" />
        <CategoryCard categoryName="Meat & Seafood" categoryPicture="/meat.png" tags="meat,seafood" />
        <CategoryCard categoryName="Dairy" categoryPicture="/dairy.png" tags="dairy" />
        <CategoryCard categoryName="Cooking Essentials" categoryPicture="/cookingEssencials.png" tags="cooking essentials" />
      </div>
      <div className="grid grid-cols-4 gap-10 bg-[#939B93] p-10 -mx-10 mt-5 mb-10">
        <CategoryCard categoryName="Beverages" categoryPicture="/beverages.png" tags="beverages" />
        <CategoryCard categoryName="Pet Supplies" categoryPicture="/petSupplies.png" tags="pet supplies" />
        <CategoryCard categoryName="Condiments" categoryPicture="/condiments.png" tags="condiments" />
        <CategoryCard categoryName="Desserts" categoryPicture="/desserts.png" tags="desserts" />
      </div>
    </>
  );
};

export default CategoryCards;
