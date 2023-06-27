import React from "react";
import Image from "next/image";
import gif from "../../public/assets/hey.gif";

const Prizes: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-radial">
      <div className="flex items-center justify-center flex-1">
        <img src={gif} alt="GIF" />
      </div>
      <div className="flex items-center justify-center flex-1">
        <p className="text-3xl animate-pulse font-extrabold mt-10">
          COMING SOON
        </p>
      </div>
    </div>
  );
};

export default Prizes;
