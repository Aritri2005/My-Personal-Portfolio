import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/hero.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div
      className=" min-h-screen w-full bg-[linear-gradient(140deg,#000428,#004e92)]
      flex flex-col md:flex-row items-center justify-center 
      gap-10 md:gap-20 px-4 py-20 md:px-10 md:py-0 
      mx-auto"
    >
      <img
        src={img}
        alt="my-image"
        className="rounded-[20px] object-cover 
          w-full max-w-md h-96 md:w-[550px] md:h-[600px] 
          shadow-xl animate-slide-in"
      />

      {/* TEXT BLOCK */}
      <div className="flex flex-col gap-6 max-w-[500px] text-white z-10 p-4">
        {/* Available for Freelance Work (Centered on mobile, left on desktop) */}
        <div className="flex justify-center md:justify-start">
          <h1
            className="text-center md:text-left px-6 py-3 text-purple-100 
            bg-white/20 backdrop-blur-sm rounded-xl font-medium shadow-md hover:opacity-50 transition duration-300"
          >
            Available for Freelance Work
          </h1>
        </div>

        {/* Introduction Text */}
        <p className="text-lg md:text-xl text-gray-400 font-semibold">
          Hello, I'm
        </p>
        <p className="text-3xl md:text-4xl font-bold text-purple-400">
          Aritri Saha
        </p>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light tracking-wide">
          A passionate creative developer & designer who loves turning ideas
          into meaningful digital experiences. I craft elegant, functional, and
          user-centered solutions that feel intuitive and inspiring. I believe
          in building designs that connect, products that matter, and
          experiences that leave an impact.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 md:gap-6 mt-2 flex-wrap">
          <Link to="/projects">
            <button
              className="px-6 py-3 rounded-lg text-white font-semibold
              bg-[linear-gradient(140deg,#3a7bd5,#00d2ff)]
              hover:opacity-50 transition duration-300"
            >
              View My Work
            </button>
          </Link>

          <Link to="/contact">
            <button
              className="px-6 py-3 rounded-lg font-semibold bg-gray-300 
              text-black border border-purple-400 
              hover:bg-[linear-gradient(140deg,#3a7bd5,#00d2ff)] 
              hover:text-white transition duration-300"
            >
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 md:gap-10 mt-2 flex-wrap">
          <a
            href="https://github.com/Aritri2005"
            target="_blank"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/aritri-saha-73925130a/"
            target="_blank"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            <FaLinkedin size={32} />
          </a>

          <a
            href="mailto:aritrisaha2908@gmail.com"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            <MdEmail size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
