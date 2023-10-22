import React from "react";
import WorkStats from "./WorkStats";

const About = () => {
  return (
    <section className="bg-[#222] text-white px-4">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-6 pt-20">
        <h1 className="headings text-4xl md:text-6xl lg:text-9xl font-bold uppercase">
          About
        </h1>
        <hr className="my-8 w-24 h-1 bg-gray-200 border-1 hidden md:inline" />
        <p className="max-w-xl text-xl mt-5 md:mt-0 text-center md:text-left">
          We work closely with our clients to understand their goals and
          objectives and use our expertise to craft unique solutions that align
          their vision
        </p>
      </div>
      <WorkStats />
    </section>
  );
};

export default About;
