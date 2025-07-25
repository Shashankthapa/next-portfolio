import React from "react";
import Image from "next/image";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <Reveal
      id="hero"
      width="100%"
      cssPropertyMotion="flex flex-col lg:flex-row justify-center items-center px-5 w-full gap-3 sm:gap-5 md:gap-10"
      cssProperty="flex items-center h-fit py-5 lg:h-screen"
    >
      <div className="font-sans text-4xl md:text-5xl lg:text-6xl w-full sm:w-full lg:md:w-[40%]">
        <div className="mt-10 font-extrabold mb-4 lg:mb-10">
          <h1>HI SHASHANK HERE.</h1>
          <p className="text-sm sm:text-2xl">I MAKE PIXEL PERFECT WEBSITES</p>
        </div>
        <div className="text-xl font-bold w-full">
          FULL Stack Developer with 3 years of experience building performant,
          user-focused web apps.
        </div>
        <div>
          <TechStack />
        </div>
        <div className="">
          <Button />
        </div>
      </div>
      <div className="relative w-[50%] lg:w-[20%] aspect-square">
        <Image
          className="rounded-full sm:w-fit "
          src="/images/shashank.jpeg"
          alt="Shashank"
          fill
        />
      </div>
    </Reveal>
  );
};

export default Hero;
