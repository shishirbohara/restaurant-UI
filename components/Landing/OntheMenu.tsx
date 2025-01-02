import Image from "next/image";
import Link from "next/link";

export default function OntheMenu() {
  return (
    <>
      <div className="bg-white md:max-w-[1020px] text-center md:ml-[400px] md:py-20 py-10 my-10 mx-2 shadow-lg md:px-20 relative bounce-animation">
        <h1 className="md:text-6xl text-4xl font-serif tracking-wider mb-10">
          On the Menu
        </h1>
        <p className="md:mb-7 mb-4 md:leading-8 leading-7 md:text-lg text-gray-600">
          Our attentive and dedicated staff are the epitome of hospitality. They
          are committed to ensuring that your dining experience is seamless,
          personalized, and truly unforgettable. From recommendations tailored
          to your tastes to the finest details attended to, your satisfaction is
          our utmost priority.
        </p>
        <p className="md:leading-8 leading-7 md:mb-10 mb-5 md:text-lg text-gray-600">
          Let us redefine the way you perceive dining—where every meal is a
          celebration, and every moment is savored. Welcome to a world of
          culinary excellence.
        </p>
        <Link href='/our-menus'>
          <span className="border-y cursor-pointer font-serif border-[#BCAF87] py-2 md:text-2xl hover:text-[#BCAF87] transition-span">
            View Our Menus
          </span>
        </Link>
      </div>
      <Image
        src="/images/menuImg.jpg"
        width={1000}
        height={1000}
        alt="image"
        className="md:w-[1200px] px-2 md:h-[700px] object-cover -mt-32 md:mb-20"
      />
    </>
  );
}
