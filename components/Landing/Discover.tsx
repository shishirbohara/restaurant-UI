import Image from "next/image";

export default function Discover() {
    return (
        <div className="md:relative md:mb-20 mb-5">
            <div className="md:relative w-full md:h-[700px]">
                <Image
                    src='/images/discover.jpg'
                    alt="image"
                    fill
                    className="hidden md:block object-cover"
                />
                <div className="md:absolute inset-0 bg-gradient-to-t from-black/20 to-black/40"></div>
            </div>
            <div className="md:absolute text-white text-center xl:px-52 px-2 md:px-20 py-5 mx-2 md:mx-0 lg:mx-28 xl:mx-0 xl:py-24 md:py-10 bg-[#272F3C] md:top-[-50%] xl:left-[8.5%] bounce-animation">
                <h1 className="md:text-6xl text-lg font-serif tracking-wider md:mb-10 mb-5 text-[#BCAF87]">THE RESTAURANT</h1>
                <p className="md:mb-10 mb-5 md:leading-8 leading-6 md:text-lg text-sm">
                    We embrace sustainability, and it reflects in our practices. We strive to minimize our environmental
                    <br /> footprint by supporting local farmers, reducing waste,
                    and making responsible choices in sourcing our <br /> ingredients. We believe in giving back to the
                    community that nurtures us, and we are actively <br /> involved in local initiatives and charities.
                </p>
                <span className="border-y cursor-pointer font-serif border-[#BCAF87] py-2 md:text-2xl hover:text-[#BCAF87] transition-all">
                    Discover the Restaurant
                </span>
            </div>
        </div>
    );
}
