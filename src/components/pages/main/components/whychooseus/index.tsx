export default function WhyChooseUs() {
    return (
        <>
            <section className="flex items-center bg-[#212121] h-[1072px] text-gray-100 py-16 mt-[10rem]">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl mb-12">
                        Why Choose us
                    </h2>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-16">
                        <span className="text-sm text-gray-400 md:mr-4">[01]</span>

                        <div className="w-full md:w-1/2 h-48 md:h-64 bg-[#C4C4C4]"></div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl md:text-3xl font-light mb-4">
                                Tailored To Your Lifestyle.
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed">
                                We design based on you—your habits, routines, and dreams—so your space feels
                                effortlessly functional and beautifully personal.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-[#353535]"></div>

                    <div
                        className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6 md:gap-12 mt-16">

                        <span className="text-sm text-gray-400 md:ml-4 order-1 md:order-none">[02]</span>

                        <div className="w-full md:w-1/2 h-48 md:h-64 bg-[#C4C4C4]"></div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl md:text-3xl font-light mb-4">
                                Timeless Modern Aesthetic.
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed">
                                Our style is clean, refined, and never goes out of trend. We focus on timeless
                                elements that age gracefully with your home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
