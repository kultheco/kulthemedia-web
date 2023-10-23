import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/GetComp/Hero";
import GetStartedFilling from "../components/GetComp/GetStartedFilling";

const GetStarted = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <Hero />
      <GetStartedFilling />
      <Footer />
    </section>
  );
};

export default GetStarted;
