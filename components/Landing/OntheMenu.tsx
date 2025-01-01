import Image from "next/image";
import Link from "next/link";

export default function OntheMenu() {
  return (
    <>
      <div className="bg-white max-w-[1020px] text-center ml-[400px] py-20 px-20 relative bounce-animation">
        <h1 className="text-6xl font-serif tracking-wider mb-10">
          On the Menu
        </h1>
        <p className="mb-7 leading-8 text-lg">
          Our attentive and dedicated staff are the epitome of hospitality. They
          are committed to ensuring that your dining experience is seamless,
          personalized, and truly unforgettable. From recommendations tailored
          to your tastes to the finest details attended to, your satisfaction is
          our utmost priority.
        </p>
        <p className="leading-8 mb-10 text-lg">
          Let us redefine the way you perceive dining—where every meal is a
          celebration, and every moment is savored. Welcome to a world of
          culinary excellence.
        </p>
        <Link href='/our-menus'>
        <span className="border-y cursor-pointer font-serif border-[#BCAF87] py-2 text-2xl hover:text-[#BCAF87] transition-span">
          View Our Menus
        </span>
        </Link>
      </div>
      <Image
        src="/images/menuImg.jpg"
        width={1000}
        height={1000}
        alt="image"
        className="w-[1200px] h-[700px] object-cover -mt-32 mb-20"
      />
    </>
  );
}
