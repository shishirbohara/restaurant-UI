import Image from "next/image";

export default function Discover() {
    return (
        <div className="relative mb-20">
            <div className="relative w-full h-[700px]">
                <Image
                    src='/images/discover.jpg'
                    alt="image"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/40"></div>
            </div>
            <div className="absolute text-white text-center px-52 py-24 bg-[#272F3C] top-[-50%] left-[8.5%] bounce-animation">
                <h1 className="text-6xl font-serif tracking-wider mb-10 text-[#BCAF87]">THE RESTAURANT</h1>
                <p className="mb-10 leading-8 text-lg">
                    We embrace sustainability, and it reflects in our practices. We strive to minimize our environmental
                    <br /> footprint by supporting local farmers, reducing waste,
                    and making responsible choices in sourcing our <br /> ingredients. We believe in giving back to the
                    community that nurtures us, and we are actively <br /> involved in local initiatives and charities.
                </p>
                <span className="border-y cursor-pointer font-serif border-[#BCAF87] py-2 text-2xl hover:text-[#BCAF87] transition-all">
                    Discover the Restaurant
                </span>
            </div>
        </div>
    );
}
