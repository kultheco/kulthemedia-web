import React, { useState } from "react";

const MoreThan = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sectionStyles = {
    backgroundColor: isHovered ? "white" : "#111",
    transition: "background-color 0.3s",
  };

  const anchorStyles = {
    backgroundColor: isHovered ? "#111" : "white",
    color: isHovered ? "white" : "#111",
    transition: "background-color 0.3s, color 0.3s",
  };
  const h1styles = {
    color: isHovered ? "#111" : "white",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <section
      className="transition-all duration-300"
      style={sectionStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center py-12">
        <div className="flex justify-center items-center space-x-5 max-w-6xl px-4 md:px-6 lg:px-3">
          <h1
            className="text-left text-4xl md:text-6xl lg:text-8xl font-bold uppercase"
            style={h1styles}
          >
            enterprise grade at it's core
          </h1>
          <a
            href="/"
            className="focus:ring-4 focus:outline-none border-2 font-medium rounded-full text-7xl px-6 py-3 text-center mr-3 md:mr-0"
            style={anchorStyles}
          >
            &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreThan;
