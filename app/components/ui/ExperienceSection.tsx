import React from "react";

interface ExperienceProps {
  companyName: string;
  companyPosition: string;
  companyAccomplishments: string[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({
  companyName,
  companyPosition,
  companyAccomplishments,
}) => {
  return (
    <div className="mt-3 px-5 w-full sm:w-[55%] space-y-2">
      <div>
        <h1 className="text-sm sm:text-2xl font-bold">
          {/* DXP Systems, Pune (2023-2024) */}
          {companyName}
        </h1>
        <p className="italic">{companyPosition}</p>
      </div>

      <ul className="space-y-2">
        {companyAccomplishments.map((accomplishments) => (
          <li>{accomplishments}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
