import React from "react";
import Contact from "../contact";

const Header = () => {
  return (
    <div className="header text-[#eee] flex justify-between items-center absolute top-0 left-0 p-6 py-9 w-full">
      <div className="logo relative flex items-center gap-3">
        <a className="relative">
          Anthony Animba <span className="text-[80%] absolute top-0 right-[-12px]">™</span>{" "}
        </a>
      </div>
      <div className="txt pr-12">
        <span className="rise">Designer / Developer</span>
        <br />
        <span className="rise">Portfolio / 2023 — 2024</span>
      </div>
      <div></div>
      <Contact />
    </div>
  );
};

export default Header;
