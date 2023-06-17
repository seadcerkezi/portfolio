import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Sead, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            As a new web developer, I'm ready to contribute my skills in
            creating engaging and functional websites. Proficient in HTML, CSS,
            React, I excel at developing intuitive web experiences. With strong
            problem-solving abilities and a collaborative mindset, I'm eager to
            deliver innovative solutions and make a meaningful impact in the
            field of web development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
