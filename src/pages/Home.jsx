import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/HomeComp/Hero";
import Marquee from "../components/HomeComp/Marquee";
import Footer from "../components/common/Footer";
import About from "../components/HomeComp/About";
import OurServices from "../components/HomeComp/OurServices";
import Projects from "../components/HomeComp/Projects";
import Testimonials from "../components/HomeComp/Testimonials";

const Home = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <div className="py-16"></div>
      <Hero />
      <Marquee />
      <About />
      <OurServices />
      <Projects />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default Home;
