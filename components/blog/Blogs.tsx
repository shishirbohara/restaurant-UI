import { highlights } from "@/utils/blogData";
import Image from "next/image"

export default function Blogs() {

    return (
        <div className="container mx-auto px-6 py-20">
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
                        <div className="p-4">
                            <h3 className="text-2xl font-serif leading-8">{item.title}</h3>
                            <p className="text-gray-500 my-2">{item.category}</p>
                            <p className="text-gray-700 leading-8">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
