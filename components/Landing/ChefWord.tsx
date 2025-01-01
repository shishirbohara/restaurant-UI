import Image from "next/image";

export default function ChefWord() {
  return (
    <div className="mb-80">
      <h1 className="text-6xl font-serif text-center tracking-wider leading-[70px]">
        THE CHEF'S <br /> WORDS
      </h1>
      <p className="text-center my-8 text-xl leading-8">
        Our team of seasoned chefs, each a virtuoso in their domain, craft{" "}
        <br />
        culinary wonders that push the boundaries of creativity.
      </p>
      <p className="text-center leading-7">
        We embrace sustainability, and it reflects in our practices. We strive
        to minimize our environmental footprint by supporting <br /> local
        farmers, reducing waste, and making responsible choices in sourcing our
        ingredients. We believe in giving back to <br /> the community that
        nurtures us, and we are actively involved in local initiatives and
        charities.
      </p>
      <Image
        src="/images/chef.jpg"
        alt="image"
        width={1000}
        height={1000}
        className="relative w-[1000px] h-[600px] ml-[518px] mt-16 object-cover"
      />
      <Image
        src="/images/cooking.jpg"
        alt="image"
        width={1000}
        height={1000}
        className="absolute w-[350px] h-[500px] object-cover ml-[850px] -mt-80 bounce-animation"
      />
      <p className="bg-white text-2xl max-w-[750px] absolute leading-8 tracking-widest ml-20 -mt-[470px] px-20 py-16 font-serif bounce-animation">
        I have had the privilege of <br /> working in some of the <br /> finest
        kitchens. These <br /> experiences have shaped my <br /> skills and
        allowed me to <br /> push the boundaries of <br /> flavor and
        presentation.
      </p>
    </div>
  );
}
