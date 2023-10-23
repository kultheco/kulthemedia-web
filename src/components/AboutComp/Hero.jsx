import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12">
      <div>
        <div className="flex flex-col lg:flex-row text-white lg:space-x-12 justify-center items-start lg:ml-32 pt-24 px-5">
          <div className="w-full h-24 lg:h-96 mt-12 lg:mt-24 flex flex-col justify-start items-start">
            <p className="text-5xl lg:text-9xl font-bold uppercase headings">
              About
            </p>
          </div>
          <div className="flex flex-col justify-center items-start max-w-4xl pr-8">
            <h1 className="font-medium text-4xl">
              Memory of the Peace is a documentary portrait of Fort St. John,
              British Columbia. A young male, oil worker. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis diam sapien, eleifend et
              ex tincidunt, fringilla ullamcorper metus. Curabitur non nisl
              molestie, tristique mauris sit amet, egestas velit.
            </h1>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between w-full py-12">
              <p className="max-w-sm text-lg">
                Nunc tempor, risus id laoreet fermentum, lectus sapien pretium
                dui, in mattis dui eros ac felis. Sed in quam sed purus rhoncus
                facilisis sed in justo.
              </p>
              <div className="flex flex-col space-y-1 items-start pr-12">
                <p className="font-medium">Address</p>
                <p>London, England</p>
                <p>WC2H 9JQ</p>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
