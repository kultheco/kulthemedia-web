import React from "react";

const Features = () => {
  const whatYouGet = [
    {
      heading: "Effortless financial management",
      para: "Zoho Books simplifies your finances by helping you create and send invoices, and track your business's financial health.",
    },
    {
      heading: "Streamlined payment processing",
      para: "With Zoho Books, you can securely process payments online, ensuring you get paid faster and more conveniently.",
    },
    {
      heading: "Insightful business analytics",
      para: "Gain valuable insights into your business with Zoho Books' robust reporting and analytics tools, helping you make informed decisions.",
    },
    {
      heading: "Seamless expense tracking",
      para: "Easily keep track of your business expenses, from receipts to mileage, all in one place with Zoho Books.",
    },
    {
      heading: "Mobile access on the go",
      para: "Manage your finances from anywhere with Zoho Books' mobile app, ensuring you're always in control of your business.",
    },
    {
      heading: "Efficient client communication",
      para: "Improve client relationships with Zoho Books by sending professional invoices and estimates, creating a positive impression.",
    },
  ];

  return (
    <section className="pt-12 pb-12">
      <div className="text-white">
        <div className="flex flex-col lg:flex-row justify-center items-center uppercase space-y-4 px-4 lg:space-y-0 lg:space-x-12">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-9xl headings font-bold text-left max-w-2xl">
              you deserve the best
            </h1>
          </div>

          <hr className="my-8 w-24 h-1 bg-gray-200 border-1 hidden md:inline" />
          <p className="max-w-lg text-xl text-center lg:text-left">
            Keep the money coming with Zoho Books. Send estimates, convert them
            to invoices, and get paid online on time.
          </p>
        </div>
        <div className="flex justify-center items-center py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 max-w-7xl mx-3">
            {whatYouGet.map((feature, index) => (
              <div className="border-2 rounded-3xl">
                <div className="p-6">
                  <h1
                    className="text-2xl md:text-4xl capitalize font-semibold"
                    key={index}
                  >
                    {feature.heading}
                  </h1>
                  <p className="pt-0.5 text-base max-w-lg">{feature.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
