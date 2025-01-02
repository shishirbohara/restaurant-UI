import Image from "next/image";

export default function MeetChef() {
    return (
        <div className="md:mb-[500px]">
            <h1 className="md:text-6xl text-4xl mt-10 md:mt-0 font-serif tracking-wider md:mb-16 mb-5 text-center">MEET OUR CHEF</h1>
            <div className="md:flex gap-10">
                <div className="md:max-w-[600px] md:ml-20">
                    <p className="md:text-2xl text-sm font-serif md:mt-36 md:leading-10 leading-7 px-2 md:px-0 text-gray-600">My strong attachment to French cuisine comes from my mother. I grew up in Japan, on a land located at the same latitude as France, rich in legumes and other roots. When I decided to make it my profession, I started in a 5 star hotel to learn the basics. I then developed an immoderate respect for small producers and their products.</p>
                    <p className="md:text-lg md:mt-8 text-sm px-2 md:px-0 mt-2 text-gray-600">Abish Dahal </p>
                    <p className="md:text-lg px-2 md:px-0 text-base mb-6 md:mb-0 text-[#BCAF87]">Executive Chef</p>
                </div>
                <div className="relative">
                    <Image src='/images/cooking.jpg' alt="chef" width={1000} height={1000} className="object-cover md:w-[800px] h-[300px] md:h-[800px]" />
                    <Image src='/images/aboutImg2.jpg' alt="image" width={1000} height={1000} className="md:absolute top-[90%] right-[60%] md:w-[550px] md:h-[500px] h-[300px] object-cover bounce-animation" />
                </div>
            </div>
        </div>
    )
}
