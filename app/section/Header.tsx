import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full justify-between items-center p-2">
        <div className="relative w-[10%] aspect-square">
          <Image
            className="rounded-xl"
            src="/images/logo.png"
            alt="Logo"
            fill
          />
        </div>
        <ul className="flex justify-around w-full">
          <li>Introduction</li>
          <li>Projects</li>
          <li>Experience</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
