import Image from "next/image";
import { images } from "@/utils/imageData";

export default function AboutGallery() {
    return (
        <>
            <div className="text-center px-2 text-sm md:text-base md:leading-7 leading-6 text-gray-600">
                <p>For those seeking an exclusive experience,
                    we offer private dining options <br />
                    that are perfect for special occasions, business meetings,
                    or gatherings with <br /> loved ones.
                    Enjoy the personalized service in a luxurious setting.</p>

                <p className="md:my-10 my-5">Let us be the host for your special events. Grand Restaurant offers catering
                    <br /> services for a wide range of occasions, from weddings and corporate <br /> gatherings to birthdays and anniversaries.
                    We tailor our offerings to your <br />
                    specific needs, ensuring a memorable culinary experience.</p>
            </div>

            <div className="grid grid-cols-3 md:gap-10 mb-10">
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
        </>

    )
}
