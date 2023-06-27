import Image from "next/image";
import React, { FunctionComponent, useEffect, useState } from "react";

const Navbar: FunctionComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgColor = scrollPosition < 0 ? "#ffffff" : "transparent";

  return (
    <div className={`fixed w-full z-50 bg-[${bgColor}]`}>
      <div className="flex items-center justify-between py-6 px-10">
        <Image src="/assets/logo.svg" alt="Logo" width={150} height={150} />
        <div>
          <ul className="flex space-x-20">
            <li className="cursor-pointer hover:underline underline-offset-8 duration-200  decoration-purple-200 text-purple-200">
              Home
            </li>
            <li className="cursor-pointer hover:underline underline-offset-8 duration-200  decoration-purple-200 text-purple-200">
              Events
            </li>
            <li className="cursor-pointer hover:underline underline-offset-8 duration-200 decoration-purple-200 text-purple-200">
              Hackathon
            </li>
          </ul>
        </div>
        <button className="border px-6 py-2 rounded-full bg-[#14094fe6] font-semibold hover:bg-purple-600 duration-300">
          login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
