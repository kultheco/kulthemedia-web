import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import bgimg from "../../assets/enterprise-building.jpg";

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["needs", "problems", "requirements", "expectations"],
      typeSpeed: 110,
      backSpeed: 40,
      loop: true,
      showCursor: false,
      cursorStyle: "solid",
      cursorSpeed: 1000,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="">
      <div className="pt-24">
        <div
          className="bg-black bg-cover bg-center flex flex-col justify-center items-center mt-12 rounded-t-3xl mx-4 md:px-5 lg:px-12 text-white py-24"
          style={{
            backgroundImage: `url(${bgimg})`,
          }}
        >
          <h1 className="headings text-lg md:text-4xl lg:text-8xl font-bold text-center pt-24 pb-8 px-4 uppercase">
            different <span ref={typingRef}></span>
          </h1>
          <p className="md:text-4xl pb-16 capitalize text-center text-4xl px-5">
            Every client is <strong>unique</strong>. And we value{" "}
            <strong className="capitalize">Uniqueness</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
