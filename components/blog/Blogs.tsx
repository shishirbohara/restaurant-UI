import { highlights } from "@/utils/blogData";
import Image from "next/image"

export default function Blogs() {
    return (
        <div className="md:px-6 px-2 md:py-20 py-10">
            <div className="grid gap-8 md:grid-cols-3">
                {highlights.map((item, index) => (
                    <div key={index} className="shadow-lg">
                        <div className="relative h-72 w-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="md:p-4 p-2">
                            <h3 className="md:text-2xl text-lg font-serif md:leading-8">{item.title}</h3>
                            <p className="text-gray-500 my-2">{item.category}</p>
                            <p className="text-gray-700 md:leading-8 leading-7">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
