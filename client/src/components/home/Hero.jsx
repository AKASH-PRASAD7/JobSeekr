import React, { useState } from "react";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    console.log(`Search Input: ${inputValue}`);
  };
  return (
    <section>
      <div className="w-full h-1/3 relative">
        <img
          src="/hero.jpg"
          className="h-96 w-full bg-cover bg-center opacity-95 "
          alt="hero"
        />
        <div className="absolute top-1/2 left-1/3">
          <input
            type="text"
            className="px-4 py-2 w-80 md:w-96 shadow-lg shadow-slate-950/100  text-gray-900 rounded-full focus:outline-none"
            placeholder="Web Developer..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button className="bg-black  shadow-lg shadow-slate-950/100 hover:bg-lime-600 font-semibold text-white py-2 px-4 ml-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
