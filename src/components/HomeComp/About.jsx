import React from "react";
import WorkStats from "./WorkStats";

const About = () => {
  return (
    <section className="bg-[#222] text-white">
      <div className="flex justify-center items-center space-x-6 pt-20">
        <h1 className="headings text-9xl font-bold uppercase">About</h1>
        <hr className="my-8 w-24 h-1 bg-gray-200 border-1" />
        <p className="max-w-xl text-xl">
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
