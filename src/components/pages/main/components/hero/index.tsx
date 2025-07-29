export default function Hero() {
    return (
        <>
             <div className="bg-[#c4c4c4] w-full flex justify-center items-center lg:min-h-[580px] md:items-end">
                <h1 className="xl:text-[400px] lg:text-[300px] md:text-[200px] text-[#e5e5e5]  text-[100px] font-extralight  font-[--font-family-antic]">
                    INTERIOR
                </h1>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-3 mt-6">
                <div className="text-md"><span>[Minimal]</span></div>
                <div className="text-md"><span>[Modern]</span></div>
                <div className="text-md"><span>[Smart Spaces]</span></div>
            </div>
            <div className="container flex mt-16">
                <div className="flex flex-3">
                    <span className="font-normal text-[64px]">Beautifully Arranged Smart Spaces.</span>
                </div>
                <div className="flex flex-col flex-2 h-48 justify-center">
                    <div className="flex flex-2 justify-center items-center">
                        <span>Combining aesthetics and innovation, we design interiors that are both beautiful and brilliantly functional—ideal for modern living.</span>
                    </div>
                    <button className="hover:cursor-pointer flex flex-1 bg-black text-slate-50 w-[142px] h-[39px] justify-center items-center rounded-[30px]">
                        <span className="font-normal text-[14px]">Explore Design</span>
                    </button>
                </div>
            </div>
        </>
    );
}
