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
    </>
  );
}
