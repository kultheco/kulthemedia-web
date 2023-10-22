import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navPaddingClass = isScrolled ? "py-0.5" : "py-3";

  return (
    <nav className="fixed w-full top-0 left-0 backdrop-blur-md bg-opacity-50 bg-[#8D3AEE] p-3">
      <div
        className={`flex  items-center justify-between mx-3 lg:mx-10 md:mx-6 xl:mx-12 px-4 ${navPaddingClass} transition-all duration-300 ease-in-out`}
      >
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl lg:text-4xl font-semibold whitespace-nowrap text-gray-100">
            Kulthe Media.
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="focus:ring-4 focus:outline-none font-medium rounded-full text-base lg:text-lg px- py-2 lg:px-8 lg:py-3 text-center mr-3 md:mr-0 bg-gray-100 hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Contact &rarr;
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className=" items-center hidden p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-xl md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="/services"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-100 hover:text-gray-300 transition duration-300"
                aria-current="page"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/case-study"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-100 hover:text-gray-300 transition duration-300"
              >
                Case Study
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-100 hover:text-gray-300 transition duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
