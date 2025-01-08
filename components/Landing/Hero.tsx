import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[700px]">
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
        }}
      >
        <Image
          src="/images/landingBg.jpg"
          width={2000}
          height={500}
          alt="landing-bg"
          className="absolute w-full h-full object-cover scale-animation"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/80"></div>
        <h1 className="text-white absolute top-[30%] md:left-[23%] xl:left-[26%] left-3 leading-10 md:leading-[55px] xl:text-6xl md:text-4xl text-3xl font-medium font-serif text-center tracking-widest">
          A CULINARY JOURNEY <br /> OF DELIGHTFUL <br /> DISCOVERIES
        </h1>
        <p className="text-white absolute top-[60%] left-[40%] md:left-[47%] xl:left-[48%] bg-red-800 rounded-full px-6 py-4 font-medium">
          ESTD <br /> 2023
        </p>
      </div>
    </div>
  );
}
