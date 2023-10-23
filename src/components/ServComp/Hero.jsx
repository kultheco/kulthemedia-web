import React from "react";

const Hero = () => {
  const servDetails = [
    {
      mainText: "Full stack",
      secondText:
        "Track and pay bills on time. And get a clear overview of accounts payable and cash flow.",
    },
    {
      mainText: "DevOps (Sec)",
      secondText:
        "People around the world trust serverless functionalities and edge co",
    },
    {
      mainText: "AI / ML",
      secondText:
        "Development at its core. Using serverless functionalities and edge computing",
    },
    {
      mainText: "AWS / Azure",
      secondText:
        "Track and pay bills on time. And get a clear overview of accounts payable and cash flow.",
    },
  ];
  return (
    <section>
      <div className="pt-24 pb-12 flex justify-center items-center">
        <div className="bg-black flex flex-col justify-center items-center mt-12 rounded-3xl mx-4 md:px-5 lg:px-12 text-white">
          <h1 className="headings text-4xl md:text-6xl lg:text-8xl font-bold max-w-7xl text-center pt-24 pb-12 px-4">
            Streamline Software Solutions in One Platform
          </h1>
          <p className="flex justify-center text-center text-xl lg:text-2xl max-w-2xl pb-24 px-4">
            Don't take the hassle to develop random solutions at random places,
            when you can get it all done in one house!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 px-3 gap-3 pb-6 lg:pb-24">
            {servDetails.map((serv, index) => (
              <div className="bg-[#222] p-10 rounded-3xl flex flex-col items-start justify-center hover:bg-white hover:text-black transition-all duration-300">
                <h1 className="text-3xl lg:text-5xl font-bold uppercase">
                  {serv.mainText}
                </h1>
                <h2 className="text-lg lg:text-xl pt-3">{serv.secondText}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;