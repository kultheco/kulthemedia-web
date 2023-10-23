import React from "react";
import Marquee from "react-fast-marquee";

const GetStartedFilling = () => {
  return (
    <section>
      <div className="bg-white">
        <Marquee autoFill={true} className="py-12">
          <h1 className="mx-3 lg:mx-8 font-semibold uppercase text-gray-500 hover:text-purple-600 text-4xl md:text-6xl lg:text-8xl transition-all duration-300 ease-in-out">
            Get Started by filling out the form below
          </h1>
        </Marquee>
      </div>
    </section>
  );
};

export default GetStartedFilling;
