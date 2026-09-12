import React from "react";
import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto md:h-[90vh] px-5 sm:px-8 lg:px-6 py-10 sm:py-14 lg:py-20 flex flex-col lg:flex-row items-center justify-between  lg:gap-16">
      {/* Left Side */}
      <div className="flex flex-col gap-5 max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold ">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden md:block" />
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        {/* Buttons */}
        <div className="flex  gap-4 mt-3 justify-center lg:justify-start">
          <button
            className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]
            text-white px-6 py-3 rounded-lg
            hover:from-[#7C3AED] hover:via-[#D81B7E] hover:to-[#FF5722]
            transition duration-300 cursor-pointer
            w-full sm:w-auto"
          >
            Explore Technologies
          </button>

          <button
            className="border border-[#FF5722]
            px-6 py-3 rounded-lg
            hover:bg-gradient-to-r hover:from-[#FF5722]
            hover:via-[#D81B7E] hover:to-[#7C3AED]
            hover:text-white
            transition duration-300 cursor-pointer
            w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={banner}
          alt="Developer Banner"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
