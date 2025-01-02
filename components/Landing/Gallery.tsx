import { images } from "@/utils/imageData";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 md:gap-10 md:mb-[480px] mb-10 px-2">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt="image"
          width={1000}
          height={1000}
          className="md:w-[520px] w-72 h-52 md:h-[580px] object-cover"
        />
      ))}
    </div>
  );
}
