import React from "react";
import ExperienceSection from "../components/ui/ExperienceSection";
import {
  companyAccomplishments_1,
  companyAccomplishments_2,
} from "../utils/company-accomplishments";
import Reveal from "../components/ui/Reveal";

const Experience = () => {
  return (
    <Reveal>
      <div className="mt-10">
        <div className="text-center text-2xl sm:text-4xl font-extrabold">
          EXPERIENCE
        </div>
        <div className="flex flex-col items-end mt-10">
          <ExperienceSection
            companyName="DXP Systems, Pune (2023-2024)"
            companyPosition="Software Developer"
            companyAccomplishments={companyAccomplishments_1}
          />
          <ExperienceSection
            companyName="Siddhant College of Engineering, Sudumbare Pune(2022-2023)"
            companyPosition="Lecturer"
            companyAccomplishments={companyAccomplishments_2}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
