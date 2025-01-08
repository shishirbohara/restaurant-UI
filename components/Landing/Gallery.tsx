import { images } from "@/utils/imageData";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 xl:gap-10 md:mb-[480px] mb-10 px-2">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt="image"
          width={1000}
          height={1000}
          className="xl:w-[520px] md:w-96 w-72 h-52 md:h-96 xl:h-[580px] object-cover"
        />
      ))}
    </div>
  );
}
