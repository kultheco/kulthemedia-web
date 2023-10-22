import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Kulthe Media's machine learning and AWS solutions have been instrumental in our success. Their full-stack expertise is exceptional.",
      author: "Sophia Martinez",
      designation: "Head of IT, Tech Ventures Unlimited",
    },
    {
      text: "We trust Kulthe Media for all our machine learning and AWS needs. Their full-stack team is a valuable partner.",
      author: "David Roberts",
      designation: "Director of Engineering, InnovateTech Solutions",
    },
    {
      text: "Kulthe Media consistently delivers top-notch machine learning and AWS services. Their full-stack support is unmatched.",
      author: "Emily Lewis",
      designation: "CTO, DataTech Innovations",
    },
    {
      text: "Impressed by Kulthe Media's machine learning and AWS capabilities. Their full-stack solutions have elevated our business.",
      author: "Richard Baker",
      designation: "CEO, Digital Innovations Inc.",
    },
    {
      text: "Kulthe Media's machine learning and AWS expertise sets them apart. Their full-stack solutions are a game-changer for us.",
      author: "Olivia Foster",
      designation: "Head of Data Science, CloudTech Group",
    },
  ];
  const additionalTestimonials = [
    {
      text: "Kulthe Media's machine learning expertise is truly impressive. Their AWS solutions are top-notch. Their full-stack development is a game-changer.",
      author: "John Anderson",
      designation: "Head of Engineering, Tech Innovators Inc.",
    },
    {
      text: "We've had great results with Kulthe Media's machine learning and AWS services. Their full-stack team is a valuable asset to our company.",
      author: "Sarah Johnson",
      designation: "CEO, DataTech Innovations",
    },
    {
      text: "Kulthe Media's machine learning and AWS solutions have exceeded our expectations. Their full-stack development is exceptional.",
      author: "Robert Williams",
      designation: "CTO, InnovateTech Solutions",
    },
    {
      text: "We've benefited greatly from Kulthe Media's machine learning and AWS expertise. Their full-stack solutions are essential to our growth.",
      author: "Anna Davis",
      designation: "Head of Data Science, Cloud Innovations Group",
    },
  ];

  const additionalTestimonials2 = [
    {
      text: "Kulthe Media's machine learning and AWS services have been crucial for our business. Their full-stack team is top-notch.",
      author: "Michael Smith",
      designation: "CEO, Global Systems Corp.",
    },
    {
      text: "We have found Kulthe Media's machine learning and AWS solutions to be outstanding. Their full-stack expertise is truly remarkable.",
      author: "Grace Adams",
      designation: "Director of Engineering, Innovate Corp.",
    },
    {
      text: "Kulthe Media's machine learning, AWS, and full-stack development services are exceptional. They have been a reliable partner for our business.",
      author: "Linda Foster",
      designation: "CTO, CloudTech Innovations",
    },
    {
      text: "Kulthe Media's machine learning and AWS services have been crucial for our growth. Their full-stack team is exceptional.",
      author: "Tom Johnson",
      designation: "CEO, Tech Solutions Pro",
    },
    {
      text: "Kulthe Media's expertise in machine learning, AWS, and full-stack development is outstanding. They are a reliable partner.",
      author: "Rachel Turner",
      designation: "CTO, InnovateTech Innovations",
    },
  ];

  return (
    <section className="bg-[#111] text-white pt-12 pb-24">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
        <h1 className="text-4xl md:text-6xl lg:text-9xl headings font-bold uppercase">
          Testimonials
        </h1>
        <a
          href="/"
          className="focus:ring-4 focus:outline-none font-medium rounded-full text-base lg:text-lg px-5 py-2 lg:px-8 lg:py-3 text-center mr-3 md:mr-0 border-2 hover:bg-gray-100 hover:text-black transition duration-300"
        >
          Get Started &rarr;
        </a>
      </div>
      <div className="py-6 flex flex-col space-y-6">
        <Marquee
          pauseOnHover={true}
          speed={20}
          autoFill={true}
          className="overflow-hidden"
        >
          {testimonials.map((testimony, index) => (
            <div className="bg-[#222] rounded-3xl shadow-xl max-w-md p-7 mx-2">
              <h1 className="text-gray-50">{testimony.text}</h1>
              <p className="pt-8 font-medium text-lg text-gray-300">
                {testimony.author}
              </p>
              <p className="font-medium text-gray-300">
                {testimony.designation}
              </p>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          speed={20}
          autoFill={true}
          className="overflow-hidden"
          direction="right"
        >
          {additionalTestimonials.map((testimony, index) => (
            <div className="bg-[#222] rounded-3xl shadow-xl max-w-md p-7 mx-2">
              <h1 className="text-gray-50">{testimony.text}</h1>
              <p className="pt-8 font-medium text-lg text-gray-300">
                {testimony.author}
              </p>
              <p className="font-medium text-gray-300">
                {testimony.designation}
              </p>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          speed={20}
          autoFill={true}
          className="overflow-hidden"
        >
          {additionalTestimonials2.map((testimony, index) => (
            <div className="bg-[#222] rounded-3xl shadow-xl max-w-md p-7 mx-2">
              <h1 className="text-gray-50">{testimony.text}</h1>
              <p className="pt-8 font-medium text-lg text-gray-300">
                {testimony.author}
              </p>
              <p className="font-medium text-gray-300">
                {testimony.designation}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
