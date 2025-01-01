import { images } from "@/utils/imageData";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-10 mb-[480px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt="image"
          width={1000}
          height={1000}
          className="w-[520px] h-[580px] object-cover"
        />
      ))}
    </div>
  );
}
