import React from "react";

const Spinner = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
