import React from "react";
import Image from "next/image";
import Reveal from "../components/ui/Reveal";

const Hero = () => {
  return (
    <Reveal
      width="100%"
      cssPropertyMotion="flex flex-col lg:flex-row justify-center items-center w-full p-2 gap-3 sm:gap-5 md:gap-10"
      height="100vh"
      cssProperty="flex items-center"
    >
      <div className="font-sans text-6xl md:text-2xl lg:text-6xl">
        <div className="font-extrabold">
          <h1 className="mb-2">HI SHASHANK HERE.</h1>
          <h1 className="text-2xl mb-5">I CREATE PIXEL PERFECT WEBSITES</h1>
        </div>
        <div className="text-sm font-bold">
          MERN stack developer with 2 years of experience building fast,
          scalable, and user-friendly web apps. Passionate about crafting clean
          code and seamless user experiences from front end to back end.
        </div>
      </div>
      <div className="relative w-[75%] md:w-[50%] aspect-square">
        <Image
          className="rounded-full w-[70%] sm:w-fit "
          src="/images/shashank.jpeg"
          alt="Shashank"
          fill
        />
      </div>
    </Reveal>
  );
};

export default Hero;
