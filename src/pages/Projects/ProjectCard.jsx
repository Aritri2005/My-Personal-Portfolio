import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({
  imgUrl,
  heading,
  content,
  techStack,
  githubLink,
  liveLink,
}) => {
  return (
    <div
      className="
        relative p-5 sm:p-6 rounded-xl shadow-xl group
        h-[380px] sm:h-[420px]   
        bg-gradient-to-br from-indigo-600/40 via-fuchsia-500/40 to-cyan-400/40
        backdrop-blur-xl border border-white/20
        transition-all duration-500
        hover:-translate-y-2 hover:rotate-[0.8deg] hover:scale-[1.03]
        hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
      "
    >
      {/* Image Container */}
      <div className="h-40 sm:h-48 overflow-hidden rounded-lg relative">
        <img
          src={imgUrl}
          alt={heading}
          className="
            w-full h-full object-cover 
            transition-all duration-500 
            group-hover:opacity-40 group-hover:scale-110
          "
        />

        {/* Icons */}
        <div
          className="
            absolute inset-0 flex justify-center items-center gap-6 sm:gap-8
            opacity-0 group-hover:opacity-100
            transition-all duration-500
            bg-gradient-to-t from-black/60 to-transparent
            z-10
            max-sm:opacity-100
          "
        >
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaGithub className="text-3xl sm:text-4xl text-white drop-shadow-lg" />
            </a>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaLink className="text-3xl sm:text-4xl text-white drop-shadow-lg" />
            </a>
          )}
        </div>
      </div>

      {/* Project Title */}
      <h3
        className="
          text-xl sm:text-2xl font-bold mt-4 
          bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent
        "
      >
        {heading}
      </h3>

      {/* Description */}
      <p className="text-gray-800 mt-2 text-sm sm:text-base">{content}</p>

      {/* Tech Stack */}
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="
              text-xs sm:text-sm px-3 py-1 rounded-full font-medium
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              text-white shadow-md
              animate-gradientMove bg-[length:200%_200%]
              animate-floatSlow
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
