// Card.jsx (This is the file you need to make sure is correct)
import React from "react";
import { Crown } from "lucide-react";
function Card({ name, id, img, children }) {
  return (
    <div
      className="
        w-[300px] h-[350px] 
        bg-white rounded-xl shadow-lg p-6 
        flex flex-col items-center justify-start text-center 
        transition duration-300 ease-in-out
        hover:opacity-90 hover:shadow-2xl hover:scale-[1.02] 
        cursor-pointer border-t-4 border-blue-600
      "
    >
      <div className="text-blue-600 mb-6 mt-4">{img} </div>

      <h1 className="text-xl font-extrabold text-gray-800 mb-2">{name}</h1>

      <p className="text-base text-gray-700 font-medium">{id}</p>

      <hr className="w-1/3 border-gray-200 my-4" />

      <div className="text-sm text-gray-500">{children}</div>
    </div>
  );
}

export default Card;
