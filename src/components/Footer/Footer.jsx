import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(145deg,#000428,#004e92)] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center mb-8">
          <div className="md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
              Aritri <span className="text-purple-300">Saha</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Creating Digital Experiences with Passion
            </p>
          </div>

          <div className="flex gap-6 sm:gap-8">
            <a
              href="https://github.com/Aritri2005"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-400 hover:text-purple-300 transition duration-300 transform hover:scale-110"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/aritri-saha-73925130a/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-gray-400 hover:text-purple-300 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:aritrisaha2908@gmail.com"
              title="Email"
              className="text-gray-400 hover:text-purple-300 transition duration-300 transform hover:scale-110"
            >
              <MdEmail size={32} />
            </a>
          </div>
        </div>

        <hr className="w-full border-gray-600 my-8" />
        <p className="text-center text-gray-400 text-sm sm:text-base pt-4">
          <span className="text-purple-300">&copy;</span>{" "}
          {new Date().getFullYear()} Aritri Saha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
