import React from "react";

const Skills = ({ name }) => {
  return (
    <div className="inline-block p-1">
      <div
        className="
          h-auto w-auto min-w-[120px] px-8 py-4
          rounded-full 
          shadow-sm hover:shadow-md transition duration-300 
          bg-gradient-to-r from-red-50 to-blue-50
          text-purple-700 font-medium text-sm text-center
        "
      >
        {name}
      </div>
    </div>
  );
};

export default Skills;
