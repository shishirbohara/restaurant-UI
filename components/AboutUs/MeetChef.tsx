import Image from "next/image";

export default function MeetChef() {
    return (
        <div className="md:mb-[500px]">
            <h1 className="xl:text-6xl md:text-5xl text-4xl mt-10 font-serif tracking-wider md:mb-16 mb-5 text-center">MEET OUR CHEF</h1>
            <div className="xl:flex gap-10">
                <div className="md:max-w-[600px] md:ml-20">
                    <p className="xl:text-2xl md:text-lg text-sm font-serif xl:mt-36 md:leading-10 leading-7 px-2 md:px-0 text-gray-600">My strong attachment to French cuisine comes from my mother. I grew up in Japan, on a land located at the same latitude as France, rich in legumes and other roots. When I decided to make it my profession, I started in a 5 star hotel to learn the basics. I then developed an immoderate respect for small producers and their products.</p>
                    <p className="md:text-lg md:mt-8 text-sm px-2 md:px-0 mt-2 text-gray-600">Abish Dahal </p>
                    <p className="md:text-lg px-2 md:px-0 text-base mb-6 text-[#BCAF87]">Executive Chef</p>
                </div>
                <div className="relative">
                    <Image src='/images/cooking.jpg' alt="chef" width={1000} height={1000} className="object-cover xl:w-[800px] h-[300px] md:h-[500px] xl:h-[800px] md:px-4 xl:px-0" />
                    <Image src='/images/aboutImg2.jpg' alt="image" width={1000} height={1000} className="xl:absolute hidden xl:block top-[90%] right-[60%] md:w-[550px] md:h-[500px] h-[300px] object-cover bounce-animation" />
                </div>
            </div>
        </div>
    )
}
