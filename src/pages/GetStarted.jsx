import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/GetComp/Hero";
import GetStartedFilling from "../components/GetComp/GetStartedFilling";
import GSForm from "../components/GetComp/GSForm";

const GetStarted = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <Hero />
      <GetStartedFilling />
      <GSForm />
      <Footer />
    </section>
  );
};

export default GetStarted;
