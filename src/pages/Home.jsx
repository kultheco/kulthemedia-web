import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/HomeComp/Hero";
import Marquee from "../components/HomeComp/Marquee";
import Footer from "../components/common/Footer";
import About from "../components/HomeComp/About";
import OurServices from "../components/HomeComp/OurServices";

const Home = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <div className="py-16"></div>
      <Hero />
      <Marquee />
      <About />
      <OurServices />
      <Footer />
    </section>
  );
};

export default Home;
