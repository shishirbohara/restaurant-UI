import { menuData } from "@/utils/menuData";

export default function Menu() {
    return (
        <>
            <div className="flex justify-center gap-10 text-2xl font-serif">
                <p className="border-y py-2 border-[#BCAF87]">Starters</p>
                <p className="border-y py-2 border-[#BCAF87]">Main Dishes</p>
                <p className="border-y py-2 border-[#BCAF87]">Cocktails</p>
            </div>

            <div className="text-center my-10 px-4 text-2xl leading-10">
                <p className=" text-gray-800">
                    Our team of seasoned chefs, each a virtuoso in their domain, craft <br />
                    culinary wonders that push{" "}
                    <span className="text-[#BCAF87]">
                        the boundaries of creativity.
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-2 py-10 gap-20 px-40">
                {
                    menuData.map((menu, index) => (
                        <div key={index}>
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-serif">{menu.name}</h1>
                                <p className="text-[#BCAF87] italic text-xl">Rs {menu.price}</p>
                            </div>
                            <p className="border-b-2 text-gray-600 text-sm pb-2">{menu.description}</p>


                        </div>
                    ))
                }
            </div>

        </>
    )
}
