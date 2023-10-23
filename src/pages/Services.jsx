import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/ServComp/Hero";
import MoreThan from "../components/ServComp/MoreThan";
import Features from "../components/ServComp/Features";
import Projects from "../components/HomeComp/Projects";
import CeoTalking from "../components/ServComp/CeoTalking";

const Services = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <Hero />
      <Features />

      <CeoTalking />
      <MoreThan />
      <Projects />
      <Footer />
    </section>
  );
};

export default Services;
