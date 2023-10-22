import React from "react";
import enterprise from "../../assets/enterprise.jpg";
import developers from "../../assets/developers.jpg";
import aws from "../../assets/aws.jpg";
import serverless from "../../assets/serverless.jpg";

const Projects = () => {
  const projs = [
    {
      link: "/",
      soruce: enterprise,
    },
    {
      link: "/",
      soruce: serverless,
    },
    {
      link: "/",
      soruce: developers,
    },
    {
      link: "/",
      soruce: aws,
    },
  ];
  return (
    <section className="bg-[#111] text-white">
      <div className="flex flex-col justify-center items-center py-24">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl space-y-4 md:space-y-0 md:space-x-12">
          <h1 className="headings text-4xl md:text-6xl lg:text-8xl font-bold uppercase">
            Our Projects
          </h1>
          <p className="max-w-sm text-lg text-center lg:text-left">
            Our clients are companies, branches, and startups that keep the
            world going around. We make their visions come to life.
          </p>
        </div>
        <div className="hidden md:flex space-x-5 py-12">
          <a
            href="/"
            className="focus:ring-4 focus:outline-none font-medium rounded-full text-base lg:text-lg px-5 py-2 lg:px-8 lg:py-3 text-center mr-3 md:mr-0 bg-transparent hover:bg-gray-100 hover:text-black border-2 transition duration-300"
          >
            Enterprise Grade
          </a>
          <a
            href="/"
            className="focus:ring-4 focus:outline-none font-medium rounded-full text-base lg:text-lg px-5 py-2 lg:px-8 lg:py-3 text-center mr-3 md:mr-0 bg-transparent hover:bg-gray-100 hover:text-black border-2 transition duration-300"
          >
            AWS
          </a>
          <a
            href="/"
            className="focus:ring-4 focus:outline-none font-medium rounded-full text-base lg:text-lg px-5 py-2 lg:px-8 lg:py-3 text-center mr-3 md:mr-0 bg-transparent hover:bg-gray-100 hover:text-black border-2 transition duration-300"
          >
            Machine Learning
          </a>
        </div>
        <div className="mx-4 md:mx-6 lg:mx-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 py-12 md:py-0">
            {projs.map((proj, index) => (
              <div className="">
                <a href={proj.link}>
                  <img
                    class="h-auto w-full md:max-w-xl rounded-3xl shadow-xl transition-transform transform hover:scale-95 hover:brightness-75"
                    src={proj.soruce}
                    key={index}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
