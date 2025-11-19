import React from "react";
import Skills from "./Skills";
import image from "../../assets/main.jpg";

const Main = () => {
  const method = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "React Js",
    },
    {
      name: "Python",
    },
    {
      name: "Figma",
    },
    {
      name: "Git & Github",
    },

    {
      name: "DSA",
    },
    {
      name: "C++",
    },
    {
      name: "TailWind Css",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row p-8 gap-6 max-w-7xl mx-auto">
      <div className="lg:w-1/2 flex justify-center items-start flex-shrink-0">
        {/* Added custom class for image animation */}
        <div className="w-[1300px] h-[500px] rounded-xl overflow-hidden shadow-2xl image-pulsate-animation">
          <img
            src={image}
            alt="Development Illustration"
            className="w-full h-full object-cover" // Ensure image fills container
          />
        </div>
      </div>

      <div className="lg:w-1/2 space-y-6 ">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 ">
            Turning Vision into Reality
          </h1>
          <p className="text-gray-600 leading-relaxed">
            With a passion for web development and design, I am actively gaining
            experience in creating digital experiences that not only look great
            but also solve real problems. My approach combines technical
            learning with creative thinking to develop solutions. I am exploring
            and eager to stay current with the latest technologies and design
            trends.
          </p>
        </div>

        {/* Added custom class for skill card animation */}
        <div className="flex flex-wrap justify-start gap-4 pt-4 border-t border-gray-200 skills-bounce-in">
          {method.map((item, index) => (
            <Skills key={index} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
