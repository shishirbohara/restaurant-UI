import Image from "next/image";

export default function MeetChef() {
    return (
        <div className="mb-[500px]">
            <h1 className="text-6xl font-serif tracking-wider mb-16 text-center">MEET OUR CHEF</h1>
            <div className="flex gap-10">
                <div className="max-w-[600px] ml-20">
                    <p className="text-2xl font-serif mt-36 leading-10">My strong attachment to French cuisine comes from my mother. I grew up in Japan, on a land located at the same latitude as France, rich in legumes and other roots. When I decided to make it my profession, I started in a 5 star hotel to learn the basics. I then developed an immoderate respect for small producers and their products.</p>
                    <p className="text-lg mt-8">Abish Dahal </p>
                    <p className="text-lg text-[#BCAF87]">Executive Chef</p>
                </div>
                <div className="relative">
                    <Image src='/images/cooking.jpg' alt="chef" width={1000} height={1000} className="object-cover w-[800px] h-[800px]" />
                    <Image src='/images/aboutImg2.jpg' alt="image" width={1000} height={1000} className="absolute top-[90%] right-[60%] w-[550px] h-[500px] object-cover bounce-animation" />
                </div>
            </div>
        </div>
    )
}
