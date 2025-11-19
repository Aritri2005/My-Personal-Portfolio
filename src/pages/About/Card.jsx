import React from "react";

const Card = ({ img, text, content }) => {
  return (
    <div
      className="
        h-[300px] w-[400px] max-w-full 
        bg-white rounded-[20px] p-4 
shadow-[0_8px_25px_rgba(0,0,0,0.18)]
hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
transition-all duration-300

        cursor-pointer flex flex-col items-center justify-center text-center
        
        hover:scale-[1.05]  hover:-translate-y-2
        

        animate-cardEntrance
      "
    >
      <div className="flex flex-col items-center">
        <div
          className="
            w-14 h-14 mb-2 p-2 rounded-lg flex items-center justify-center
            bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg
            animate-iconPulse
          "
        >
          {img}
        </div>

        <h1 className="text-black text-lg font-semibold mb-1">{text}</h1>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default Card;
