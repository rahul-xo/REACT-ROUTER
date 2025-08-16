import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center p-4">
      
      {/* The Stylish Spinner */}
      <div className="relative h-16 w-16">
        {/* Background Circle */}
        <div className="absolute h-full w-full rounded-full border-4 border-gray-700"></div>
        
        {/* Rotating Arc */}
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-t-blue-500 border-r-blue-500 border-transparent"></div>
      </div>
      
    </div>
  );
};

export default Loader;
