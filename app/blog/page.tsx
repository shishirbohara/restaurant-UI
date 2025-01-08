import Blogs from "@/components/blog/Blogs";
import Image from "next/image";

export default function Blog() {
    return (
        <>
            <div className="relative w-full md:h-[700px] h-[400px]">
                <div
                    className="relative w-full h-full overflow-hidden"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
                    }}
                >
                    <Image
                        src="/images/blog.jpg"
                        width={2000}
                        height={500}
                        alt="landing-bg"
                        className="absolute w-full h-full object-cover scale-animation"
                    />
                    <div className="absolute w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/80"></div>
                    <h1 className="text-[#BCAF87] absolute top-[40%] md:left-[40%] left-[25%] leading-[55px] md:text-6xl text-3xl font-medium font-serif tracking-widest">
                        THE BLOG
                    </h1>
                </div>
            </div>
            <Blogs />
        </>
    );
}
