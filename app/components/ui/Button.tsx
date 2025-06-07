"use client";

import React from "react";

const Button = () => {
  const sendMail = () => {
    const gmailURL = `mailto:shashankthapa022@gmail.com?cc=cc@example.com&subject=Hello&body=Hi%20there!`;
    window.location.href = gmailURL;
  };

  return (
    <div className="flex mt-5 overflow-hidden">
      <button
        onClick={sendMail}
        className="text-sm border p-5 cursor-pointer hover:text-green-400 text-slate-200 bg-slate-900 font-bold rounded-2xl"
      >
        Contact Me
      </button>
    </div>
  );
};

export default Button;
