import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="flex xl:gap-20">
        <div className="mb-60 -mt-5 w-full xl:px-24 xl:max-w-[800px] md:max-w-[390px] md:px-4">
          <div className="xl:text-center xl:text-6xl text-center md:text-5xl text-4xl font-serif mb-8 md:leading-[60px] tracking-widest">
            <h1>CRAFTING</h1>
            <p className="text-[#BCAF87]">CULINARY</p>
            <p>MAGIC</p>
          </div>
          <p className="xl:my-8 my-4 px-2 leading-8 xl:text-lg md:text-base text-gray-600">
            Welcome to Willow & Thyme Restaurant, where gastronomy meets
            artistry and every meal is a symphony of flavors. Nestled in the
            heart of New Lalitpur , our restaurant is a sanctuary for food
            enthusiasts and culinary adventurers alike.
          </p>

          <p className="leading-8 px-2 xl:text-lg mb-10 md:text-base text-gray-600">
            At Willow & Thyme Restaurant, we believe in crafting exceptional
            dining experiences that tantalize the taste buds and ignite the
            senses. Our chefs, true culinary maestros, meticulously curate each
            dish, blending traditional techniques with innovative twists to
            present a menu that celebrates the essence of fine dining.
          </p>
          <Link href={"/"} className="border-y border-[#BCAF87] ml-28 md:text-2xl py-2 font-serif font-medium cursor-pointer hover:text-[#BCAF87] xl:ml-44 md:ml-5 transition-span">
            Discover the Kitchen
          </Link>
        </div>
        <div>
          <Image
            src="/images/aboutImg.jpg"
            alt="image"
            width={2000}
            height={1000}
            className="hidden md:block -mt-32 absolute xl:top-[100%] right-0 object-cover xl:h-[800px] h-[695px] xl:w-[750px] w-[380px]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start xl:px-20 px-2 md:pl-4 items-center xl:gap-60 gap-10 md:-mt-60 -mt-72">
        <Image
          src="/images/aboutImg2.jpg"
          alt="image"
          width={1000}
          height={1000}
          className="xl:my-20 mt-20 object-cover xl:w-[600px] w-[400px] xl:h-[400px] h-[300px]"
        />
        <div className="xl:text-lg text-base flex flex-col items-center">
          <h1 className="my-8 text-xl ">Ekantakuna-Lalitpur, Nepal</h1>
          <p>Monday-Friday: 11am - 9pm</p>
          <p className="my-1">Happy Hour: 2pm - 9pm</p>
          <p className="mb-10">Saturday-Sunday: Closed</p>
          <Link href='/reservation'>
            <span className="border-y py-2 border-[#BCAF87] font-serif cursor-pointer md:text-2xl hover:text-[#BCAF87] transition-span">
              Reserve a Table
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
