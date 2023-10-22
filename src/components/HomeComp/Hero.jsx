import React from "react";

const Hero = () => {
  return (
    <section className="mx-4 md:mx-8">
      <div className="text-white items-center justify-center bg-black rounded-t-3xl py-32">
        <div className="flex items-center justify-center">
          <h1 className="uppercase text-5xl md:text-6xl lg:text-8xl px-12  text-center font-bold headings">
            we build software that lasts a decade
          </h1>
        </div>
        <div className="flex flex-col space-x-0 md:flex-row justify-center px-10 items-start space-y-6 md:space-y-0 md:space-x-10 mt-12 lg:mt-8">
          <div className="flex flex-col max-w-sm">
            <hr class="h-px my-2 bg-gray-200 border-0 max-w-[64px]" />
            <p className="text-xl">
              Our approach is rooted into understanding your needs, and we use
              our expertise to craft solutions that empower innovation.
            </p>
          </div>
          <div className="">
            <h1 className="font-medium text-4xl">87+</h1>
            <p className="text-xl">Statisfied Clients</p>
          </div>
          <div className="">
            <h1 className="font-medium text-4xl">116</h1>
            <p className="text-xl w-52">
              Enterprise grade solutions built to date
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12 my-5">
          <a
            href="/contact"
            className="focus:ring-4 focus:outline-none  font-medium rounded-full text-lg px-8 py-3 text-center mr-3 md:mr-0 text-black bg-gray-100 hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Get Started &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
