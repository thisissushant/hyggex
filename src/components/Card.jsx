import { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-64 h-48 perspective-1000 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 transform-style-preserve-3d bg-blue-500 text-white flex items-center justify-center shadow-lg rounded-lg">
          <span className="transform rotate-y-180">Sushant</span>
        </div>
        <div className="absolute inset-0 transform-style-preserve-3d bg-red-500 text-white flex items-center justify-center shadow-lg rounded-lg rotate-y-180">
          <span>Hello</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
