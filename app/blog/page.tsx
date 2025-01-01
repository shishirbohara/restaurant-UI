import Blogs from "@/components/blog/Blogs";
import Image from "next/image";

export default function Blog() {
    return (
        <>
            <div className="relative w-full h-[700px]">
                <div
                    className="relative w-full h-full overflow-hidden container mx-auto"
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
                    <h1 className="text-[#BCAF87] absolute top-[40%] left-[40%] leading-[55px] text-6xl font-medium font-serif tracking-widest">
                        THE BLOG
                    </h1>
                </div>
            </div>
            <Blogs />
        </>
    );
}
