import Image from "next/image";
import Link from "next/link";

export default function Discover() {
    return (
        <>
            <div className="md:flex gap-20">
                <div className="md:mb-60 -mt-5 md:px-24 md:max-w-[800px]">
                    <div className="text-center md:text-6xl text-4xl font-serif mb-8 md:leading-[60px] tracking-widest">
                        <h1>WHERE</h1>
                        <p className="text-[#BCAF87]">TASTE</p>
                        <p>KNOWS</p>
                    </div>
                    <p className="md:my-8 my-4 leading-8 md:text-lg px-8 text-gray-600">
                        Welcome to Willow & Thyme Restaurant, where gastronomy meets
                        artistry and every meal is a symphony of flavors. Nestled in the
                        heart of New Lalitpur , our restaurant is a sanctuary for food
                        enthusiasts and culinary adventurers alike.
                    </p>

                    <p className="leading-8 md:text-lg mb-10 px-8 text-gray-600">
                        At Willow & Thyme Restaurant, we believe in crafting exceptional
                        dining experiences that tantalize the taste buds and ignite the
                        senses. Our chefs, true culinary maestros, meticulously curate each
                        dish, blending traditional techniques with innovative twists to
                        present a menu that celebrates the essence of fine dining.
                    </p>
                    <span className="border-y border-[#BCAF87] ml-28 md:text-2xl py-2 font-serif font-medium cursor-pointer hover:text-[#BCAF87] md:ml-44 transition-span">
                        Discover the Kitchen
                    </span>
                </div>
                <div>
                    <Image
                        src="/images/ambiance.jpg"
                        alt="image"
                        width={2000}
                        height={1000}
                        className="-mt-20 hidden md:block absolute top-[100%] right-0 object-cover h-[700px] w-[750px]"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start md:px-20 px-2 items-center md:gap-60 md:-mt-60 -mt-72">
                <Image
                    src="/images/aboutImg2.jpg"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="md:my-20 my-16 object-cover w-[600px] h-[400px]"
                />
                <div className="md:text-lg text-base flex flex-col items-center">
                    <h1 className="mb-5 text-xl">Ekantakuna-Lalitpur, Nepal</h1>
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
