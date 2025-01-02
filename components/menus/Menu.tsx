import { menuData } from "@/utils/menuData";

export default function Menu() {
    return (
        <>
            <div className="flex justify-center gap-10 mt-5 md:mt-0 md:text-2xl font-serif">
                <p className="border-y py-2 border-[#BCAF87]">Starters</p>
                <p className="border-y py-2 border-[#BCAF87]">Main Dishes</p>
                <p className="border-y py-2 border-[#BCAF87]">Cocktails</p>
            </div>

            <div className="text-center md:my-10 my-4 md:px-4 px-2 md:text-2xl text-sm leading-10">
                <p className=" text-gray-800">
                    Our team of seasoned chefs, each a virtuoso in their domain, craft <br />
                    culinary wonders that push{" "}
                    <span className="text-[#BCAF87]">
                        the boundaries of creativity.
                    </span>
                </p>
            </div>

            <div className="grid md:grid-cols-2 md:py-10 py-5 px-2 md:gap-20 gap-8 md:px-40">
                {
                    menuData.map((menu, index) => (
                        <div key={index}>
                            <div className="flex justify-between">
                                <h1 className="md:text-2xl font-serif">{menu.name}</h1>
                                <p className="text-[#BCAF87] italic md:text-xl text-sm">Rs {menu.price}</p>
                            </div>
                            <p className="border-b-2 text-gray-600 md:text-sm text-xs py-3">{menu.description}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}
