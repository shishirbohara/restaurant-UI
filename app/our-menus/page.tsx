import Menu from "@/components/menus/Menu";
import Image from "next/image";

export default function Menus() {
    return (
        <>
            <div className="relative w-full md:h-[700px] h-[400px]">
                <div
                    className="relative w-full h-full overflow-hidden container mx-auto"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
                    }}
                >
                    <Image
                        src="/images/menus.jpg"
                        width={2000}
                        height={500}
                        alt="landing-bg"
                        className="absolute w-full h-full object-cover scale-animation"
                    />
                    <div className="absolute w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/80"></div>
                    <h1 className="text-[#BCAF87] absolute top-[40%] md:left-[38%] left-[18%] leading-[55px] md:text-6xl text-3xl font-medium font-serif tracking-widest">
                        OUR MENUS
                    </h1>
                </div>
            </div>
            <Menu />
        </>
    );
}
