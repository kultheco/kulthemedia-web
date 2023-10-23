import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/ServComp/Hero";
import MoreThan from "../components/ServComp/MoreThan";
import Features from "../components/ServComp/Features";

const Services = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <Hero />
      <Features />
      <MoreThan />
      <Footer />
    </section>
  );
};

export default Services;
