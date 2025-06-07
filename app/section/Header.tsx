import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full justify-center mt-5">
      <div className="flex w-full md:w-[40%] items-center p-2">
        <div className="relative w-[10%] aspect-square">
          <Image
            className="rounded-xl"
            src="/images/logo.png"
            alt="Logo"
            fill
          />
        </div>
        <ul className="flex justify-around w-full">
          <li className="cursor-pointer hover:text-green-400">
            <a href="#hero">Introduction</a>
          </li>
          <li className="cursor-pointer hover:text-green-400">
            <a href="#project">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-green-400">
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
