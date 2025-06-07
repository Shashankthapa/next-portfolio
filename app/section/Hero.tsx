import React from "react";
import Image from "next/image";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

const Hero = () => {
  return (
    <Reveal
      width="100vw"
      cssPropertyMotion="flex flex-col lg:flex-row justify-center items-center px-5 w-full gap-3 sm:gap-5 md:gap-10"
      cssProperty="flex items-center h-fit lg:h-[90vh]"
    >
      <div className="font-sans text-4xl md:text-5xl lg:text-6xl w-full sm:w-full lg:md:w-[60%]">
        <div className="py-5 font-extrabold">
          <h1>HI SHASHANK HERE.</h1>
          <h1 className="text-sm sm:text-2xl mb-5">
            I MAKE PIXEL PERFECT WEBSITES
          </h1>
        </div>
        <div className="text-sm font-bold w-full">
          MERN Stack Developer with 2 years of experience building performant,
          user-focused web apps, and 1 year as a Lecturer teaching JavaScript
          and databases. Combines hands-on development expertise with a talent
          for clear technical communication and mentorship.
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="relative w-[75%] lg:w-[20%] aspect-square">
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
