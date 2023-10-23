import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/FooterMin";
import Hero from "../components/GetComp/Hero";
import GetStartedFilling from "../components/GetComp/GetStartedFilling";
import GSForm from "../components/GetComp/GSForm";
import Await from "../components/GetComp/Await";

const GetStarted = () => {
  return (
    <section className="bg-[#8D3AEE]">
      <Navbar />
      <Hero />
      <GetStartedFilling />
      <GSForm />
      <Await />
      <Footer />
    </section>
  );
};

export default GetStarted;
