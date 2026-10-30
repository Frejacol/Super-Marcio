import HeroText from "./HeroText";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-[2fr_3fr] gap-4 items-center">
      <HeroText />
      <Image src="/Hero.jpg" alt="picture of lady at the grocery store" width={850} height={550} className="rounded-2xl" />
    </div>
  );
};

export default Hero;
