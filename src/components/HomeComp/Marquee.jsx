import React from "react";
import Marquee from "react-fast-marquee";

const ServiceMarquee = () => {
  const texts = [
    "Web Development",
    "Serverless",
    "Machine Learning",
    "Figma Design",
    "AWS Deployment",
    "Shopify Theme",
  ];

  return (
    <div className="bg-white font-medium py-6 -mt-12 ">
      <Marquee
        pauseOnHover={true}
        speed={20}
        autoFill={true}
        className="overflow-hidden"
      >
        {texts.map((text, index) => (
          <p
            key={index}
            className="mx-3 lg:mx-8 font-semibold uppercase text-gray-500 text-4xl md:text-6xl lg:text-9xl"
          >
            {text}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default ServiceMarquee;
