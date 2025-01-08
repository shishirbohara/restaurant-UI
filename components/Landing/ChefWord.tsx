import Image from "next/image";

export default function ChefWord() {
  return (
    <div className="xl:mb-80 container mx-auto">
      <h1 className="md:text-6xl text-4xl font-serif text-center tracking-wider mt-5 md:mt-0 md:leading-[70px]">
        THE CHEF <br /> WORDS
      </h1>
      <p className="text-center md:my-8 my-3 md:text-xl px-2 md:px-4 md:leading-8 leading-7 text-gray-600">
        Our team of seasoned chefs, each a virtuoso in their domain, craft{" "}
        <br />
        culinary wonders that push the boundaries of creativity.
      </p>
      <p className="text-center leading-7 px-2 md:px-4 my-5 text-gray-600">
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
        className="hidden xl:block xl:relative xl:w-[760px] md:h-[600px] xl:ml-[518px] mt-16 object-cover"
      />
      <Image
        src="/images/cooking.jpg"
        alt="image"
        width={1000}
        height={1000}
        className="md:absolute hidden xl:block xl:w-[350px] px-2 md:px-0 xl:h-[400px] h-[300px] object-cover md:ml-[740px] md:-mt-52 mt-10 bounce-animation"
      />
      <p className="bg-white md:text-2xl text-center xl:max-w-[750px] xl:absolute md:leading-8 tracking-widest xl:ml-20 xl:-mt-[470px] xl:px-20 xl:py-16 py-5 md:my-10 xl:my-0 font-serif bounce-animation">
        I have had the privilege of <br /> working in some of the <br /> finest
        kitchens. These <br /> experiences have shaped my <br /> skills and
        allowed me to <br /> push the boundaries of <br /> flavor and
        presentation.
      </p>
    </div>
  );
}
