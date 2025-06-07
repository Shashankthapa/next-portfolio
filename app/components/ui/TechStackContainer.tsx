import React from "react";

interface techProps {
  stack: string;
}

const TechStackContainer: React.FC<techProps> = ({ stack }) => {
  return (
    <div className="flex items-center justify-center px-4 py-1 bg-slate-800 rounded-xl text-slate-200 font-semibold">
      {stack}
    </div>
  );
};

export default TechStackContainer;
