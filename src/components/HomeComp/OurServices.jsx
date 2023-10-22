import React from "react";

const OurServices = () => {
  const Services = [
    {
      name: "Full Stack",
      link: "/",
    },
    {
      name: "Amazon Web Services",
      link: "/",
    },
    {
      name: "Machine Learning",
      link: "/",
    },
    {
      name: "Serverless",
      link: "/",
    },
  ];
  return (
    <section className="px-4 pb-24">
      <div className="flex flex-col md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-10 items-center justify-center py-24">
        <h1 className="text-4xl md:text-6xl lg:text-9xl uppercase headings font-bold">
          Our Services
        </h1>
        <a
          href="/"
          className="focus:ring-4 focus:outline-none font-medium rounded-full text-base border-2 lg:text-lg px-5 py-2 lg:px-8 lg:py-3 text-center mr-3 md:mr-0 bg-transparent hover:bg-gray-900 text-white transition duration-300"
        >
          Discover More &rarr;
        </a>
      </div>

      <div className="flex flex-col space-y-8 items-center px-2">
        {Services.map((service, index) => (
          <a href={service.link} className="w-full md:w-4/5">
            <div className="flex justify-between space-x-12 text-xl md:text-3xl lg:text-7xl text-white opacity-80 hover:opacity-100 hover:bg-white hover:text-gray-900 transition-all duration-300 border-2 rounded-full items-center px-4 md:px-7 lg:px-12 py-3 md:py-5 lg:py-6">
              <h1 className="mr-10 lg:mr-28 font-semibold" key={index}>
                {service.name}
              </h1>
              <p className="md:border-2 rounded-full px-1 lg:px-3">&rarr;</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
