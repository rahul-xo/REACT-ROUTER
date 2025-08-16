import React from "react";

const Card = ({currEle}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Image Placeholder */}
      <img
        className="w-full h-48 object-cover"
        src={`${currEle.images[0]}`}
        alt="Placeholder"
      />

      {/* Centered Text */}
      <div className="p-5">
        <p className="text-center text-white font-semibold text-lg">
          {currEle.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
