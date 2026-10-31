import CategoryCard from "./CategoryCard";

const FrontPageCategories = () => {
  return (
    <div className="grid grid-cols-4 gap-10 bg-[#939B93] p-10 -mx-10 mt-5 mb-10">
      <CategoryCard categoryName="Fruits & Vegetables" categoryPicture="/fruitAndVegetables.png" tags="fruits,vegetables" />
      <CategoryCard categoryName="Meat & Seafood" categoryPicture="/meat.png" tags="meat,seafood" />
      <CategoryCard categoryName="Dairy" categoryPicture="/dairy.png" tags="dairy" />
      <CategoryCard categoryName="Cooking Essentials" categoryPicture="/cookingEssencials.png" tags="cooking essentials" />
    </div>
  );
};

export default FrontPageCategories;
