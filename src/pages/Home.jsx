import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/HomeComp/Hero";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
};

export default Home;
