export default function AboutUs() {
    return (
        <>
            <div className="container mx-auto px-4 py-8 mt-[10rem]">

                <nav className="flex items-center space-x-2 text-gray-600 text-sm">
                    <span>✖</span>
                    <span>About us</span>
                </nav>

                <h1
                    className="mt-8 max-w-4xl mx-auto text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight text-center lg:text-left"
                >
                    Our modern interiors reflect your lifestyle—creating beautiful, uniquely yours
                    spaces. We design with heart and precision.
                </h1>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 items-center">
                    <div className="flex flex-col items-end">
                        <div className="w-[303px] h-[257px] max-w-md aspect-video bg-gray-300 mr-[5rem]"></div>
                        <span className="mt-2 text-xs text-gray-500 self-end mr-[5rem]">[Minimal]</span>
                    </div>

                    <div
                        className="flex text-center justify-center lg:text-left text-xl md:text-2xl lg:text-3xl font-light text-gray-900"
                    >
                        Designing <br/>
                        Simplicity <br/>
                        with Soul
                    </div>

                    <div className="flex flex-col items-center lg:items-end">
                        <div className="w-[145px] h-[116px] bg-gray-300 mr-[4rem]"></div>
                        <div className="w-[196px] h-[162px] bg-gray-300 mr-[15rem] mt-[3rem]"></div>
                        <span className="text-xs text-gray-500 self-end mr-[15rem]">[Smart Spaces]</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-[10rem]">
                    <div>
                        <p className="text-sm text-gray-600 uppercase">Project</p>
                        <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">126+</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 uppercase">Client</p>
                        <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">926+</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 uppercase">Materials</p>
                        <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">364+</p>
                    </div>
                </div>
            </div>

        </>
    );
}