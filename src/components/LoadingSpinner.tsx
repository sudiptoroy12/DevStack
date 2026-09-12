import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-orange-500 border-r-pink-500 border-b-violet-500"></div>
        </div>
        {/* Loading Text */}
        <p className="text-sm font-medium text-gray-500"> Loading... </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
