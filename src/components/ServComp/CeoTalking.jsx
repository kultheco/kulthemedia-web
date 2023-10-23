import React from "react";
import ceoimg from "../../assets/ceotalking.jpg";

const CeoTalking = () => {
  return (
    <section className="bg-[#111] text-white">
      <div className="flex flex-col justify-center items-center pb-24 px-4 lg:px-12">
        <h1 className="headings font-bold text-9xl py-12 text-center uppercase">
          KM. in the Press
        </h1>
        <div className="flex justify-center items-center space-x-5">
          <div className="relative transition-all duration-300 hover:scale-95">
            <img
              src={ceoimg}
              alt="Kulthe Media CEO in a press conference"
              className="rounded-3xl shadow-xl max-w-3xl brightness-75 hover:brightness-90 "
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-start p-6">
              <p className="text-white text-4xl font-medium max-w-lg">
                Check out the latest talk given by the CEO &rarr;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoTalking;
