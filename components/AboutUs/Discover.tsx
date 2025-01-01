import Image from "next/image";

export default function Discover() {
    return (
        <>
            <div className="flex gap-20">
                <div className="mb-60 -mt-5 px-24 max-w-[800px]">
                    <div className="text-center text-6xl font-serif mb-8 leading-[60px] tracking-widest">
                        <h1>WHERE</h1>
                        <p className="text-[#BCAF87]">TASTE</p>
                        <p>KNOWS</p>
                    </div>
                    <p className="my-8 leading-8 text-lg">
                        Welcome to Willow & Thyme Restaurant, where gastronomy meets
                        artistry and every meal is a symphony of flavors. Nestled in the
                        heart of New Lalitpur , our restaurant is a sanctuary for food
                        enthusiasts and culinary adventurers alike.
                    </p>

                    <p className="leading-8 text-lg mb-10">
                        At Willow & Thyme Restaurant, we believe in crafting exceptional
                        dining experiences that tantalize the taste buds and ignite the
                        senses. Our chefs, true culinary maestros, meticulously curate each
                        dish, blending traditional techniques with innovative twists to
                        present a menu that celebrates the essence of fine dining.
                    </p>
                    <span className="border-y border-[#BCAF87] text-2xl py-2 font-serif font-medium cursor-pointer hover:text-[#BCAF87] ml-44 transition-span">
                        Discover the Kitchen
                    </span>
                </div>
                <div>
                    <Image
                        src="/images/ambiance.jpg"
                        alt="image"
                        width={2000}
                        height={1000}
                        className="-mt-20 absolute top-[100%] right-0 object-cover h-[700px] w-[750px]"
                    />
                </div>
            </div>

            <div className="flex justify-start px-20 items-center gap-60 -mt-60">
                <Image
                    src="/images/aboutImg2.jpg"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="my-20 object-cover w-[600px] h-[400px]"
                />
                <div className="text-lg flex flex-col items-center">
                    <h1 className="mb-5 text-xl">Ekantakuna-Lalitpur, Nepal</h1>
                    <p>Monday-Friday: 11am - 9pm</p>
                    <p className="my-1">Happy Hour: 2pm - 9pm</p>
                    <p className="mb-10">Saturday-Sunday: Closed</p>
                    <span className="border-y py-2 border-[#BCAF87] font-serif cursor-pointer text-2xl hover:text-[#BCAF87] transition-span">
                        Reserve a Table
                    </span>
                </div>
            </div>
        </>
    );
}
