import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <MoonLoader color="#016630"></MoonLoader>
    </div>
  );
};

export default Loading;
