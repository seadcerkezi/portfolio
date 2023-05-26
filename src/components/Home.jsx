import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl- sm:text-7xl font-bold text-[#ccd6f6]">
          Sead Çerkezi
        </h1>
        <h2 className="text-4xl- sm:text-7xl font-bold text-[#8892b0]">
          I'm a web developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste
          alias harum officiis earum est quas repellendus tempore deserunt eum
          molestias, molestiae nobis architecto ab sint repellat fugiat corporis
          fugit!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <Link to="work" smooth={true} duration={500}>
                <HiArrowNarrowRight className="ml-3" />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
