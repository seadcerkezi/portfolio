import React from "react";
import Elegant from "../assets/elegant.JPG";
import Crypto from "../assets/crypto.JPG";
import Massimo from "../assets/massimo.JPG";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${Massimo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Aplication
              </span>
              <div className="pt-8 text-center">
                <a href="https://seadcerkezi.github.io/Massimo/">
                  <button className="text-center rounded-lg- px-4 py-3 m-2 bg-white text-gray-700  hover:bg-[#3b4c69] hover:text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/seadcerkezi/Massimo">
                  <button className="text-center rounded-lg- px-4 py-3 m-2 bg-white text-gray-700  hover:bg-[#3b4c69] hover:text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Elegant})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Aplication
              </span>
              <div className="pt-8 text-center">
                <a href="https://seadcerkezi.github.io/Elegant-Store/">
                  <button className="text-center rounded-lg- px-4 py-3 m-2 bg-white hover:bg-[#3b4c69] hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/seadcerkezi/Elegant-Store">
                  <button className="text-center rounded-lg- px-4 py-3 m-2 bg-white text-gray-700  hover:bg-[#3b4c69] hover:text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Crypto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Aplication
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/seadcerkezi/CryptoTracker">
                  <button className="text-center rounded-lg- px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#3b4c69] hover:text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
