import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/AboutComp/Hero";
import CeoTalking from "../components/ServComp/CeoTalking";
import MoreThan from "../components/ServComp/MoreThan";

const About = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <Hero />
      <MoreThan />
      <CeoTalking />

      <Footer />
    </section>
  );
};

export default About;
