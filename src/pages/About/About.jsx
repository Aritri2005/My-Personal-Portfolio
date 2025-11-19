import React from "react";
import Card from "./Card";
import Main from "./Main";
import { Code, Users, Monitor, Zap } from "lucide-react";
const About = () => {
  const method = [
    {
      img: <Code size={30}></Code>,
      text: "Clean Code",
      content: "Writing maintainable, scalable and efficient code",
    },
    {
      img: <Monitor size={30}></Monitor>,
      text: "Responsive Design",
      content:
        "Building web layouts that look great and function seamlessly on all devices.",
    },
    {
      img: <Zap size={30}></Zap>,
      text: "Performance Focus",
      content:
        "Optimizing application speed and user experience through efficient rendering.",
    },
    {
      img: <Users size={30} />,
      text: "Team Collaboration",
      content:
        "Working effectively with designers, back-end teams, and product managers.",
    },
  ];
  return (
    <>
      <div>
        <Main></Main>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 ">
        {method.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            text={item.text}
            content={item.content}
          />
        ))}
      </div>
    </>
  );
};

export default About;
