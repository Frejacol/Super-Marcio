import Link from "next/link";

const HeroText = () => {
  return (
    <div className="mr-[3em]">
      <p className="text-[#5F6B5F] mb-3 font-medium">Your local supermarket</p>
      <h1 className="text-[#1e1003] font-bold text-6xl mb-5 text-balance">Welcome to Super Marcio</h1>
      <p className="text-[#7B807B] font-thin text-lg text-balance">Fresh, locally sourced produce and everyday essentials, with a little extra magic.</p>
      <div className="mt-10">
        <Link href="/groceries" className="bg-[#5F6B5F] hover:bg-[#3f483f] transition-colors duration-300 ease-in-out text-white px-6 py-3 rounded-lg mr-[1em]">
          Shop now
        </Link>
        <Link href="/categories" className="border border-[#5F6B5F] hover:bg-[#5F6B5F] transition-colors duration-300 ease-in-out hover:text-white text-[#5F6B5F] px-6 py-3 rounded-lg">
          Browse categories
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
