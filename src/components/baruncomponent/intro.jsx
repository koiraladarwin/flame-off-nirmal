import React from "react";

const IntroSection = () => {
  return (
    <>
      <div className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-0">
          <img
            src="/img/cctv.png"
            alt="CCTV Camera"
            className="h-full md:h-[80%] object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col gap-4 md:gap-6 justify-center py-8 md:py-0">
          <div className="flex items-center gap-2 text-lg md:text-xl font-bold">
            <span className="bg-lime-500 text-white px-2 py-1">CCTV</span>
            <span className="bg-black text-white px-3 py-1">SURVEILLANCE</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-md">
            WE OFFER<span className="text-lime-600">S</span> MORE THAN A SIMPLE
            SECURITY SYSTEM
          </h1>
          <button className="bg-black text-white px-6 py-3 w-fit font-medium hover:bg-gray-800 transition">
            View Details
          </button>
        </div>

        <div className="absolute right-0 top-1/3 hidden xl:flex flex-col gap-4">
          <div className="bg-lime-500 text-white rotate-[-90deg] px-4 py-2 font-semibold text-xs tracking-wide">
            BOOK A SERVICE CALL
          </div>
          <div className="bg-lime-600 text-white rotate-[-90deg] px-4 py-2 font-semibold text-xs tracking-wide">
            ENQUIRE NOW
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
