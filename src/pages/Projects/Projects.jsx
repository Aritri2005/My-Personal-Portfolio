import React from "react";
import ProjectCard from "./ProjectCard";
import cal from "../../assets/cal.jpg";
import escape from "../../assets/escape  room.jpg";
import weather from "../../assets/weather.jpg";

const projects = [
  {
    imgUrl: weather,
    heading: "Weather App",
    content:
      "A real-time weather forecasting application that shows temperature, humidity, wind speed, and more using live API data.",
    techStack: ["React Js", "Tailwind Css", "JavaScript"],
    githubLink: "https://github.com/Aritri2005/Weather-App",
    liveLink: "https://weather-app-2025.vercel.app/",
  },
  {
    imgUrl: escape,
    heading: "Escape Room Game",
    content:
      "A fun and interactive puzzle-based escape room game built with HTML, CSS, and JavaScript. Solve clues and progress through levels!",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Aritri2005/Escape-Room",
    liveLink: "https://escape-room-black.vercel.app/",
  },
  {
    imgUrl: cal,
    heading: "Exchange-Calculator",
    content:
      "A simple and user-friendly currency exchange calculator that converts amounts in real time using current exchange rates. Built with clean UI and smooth interactions for quick and accurate conversions.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    githubLink: "https://github.com/Aritri2005/Exchange-Calculator",
    liveLink: "https://exchange-calcu.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-17 sm:py-20 lg:py-28">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-12 sm:mb-16">
          Featured Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgUrl={project.imgUrl}
              heading={project.heading}
              content={project.content}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
