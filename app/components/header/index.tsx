import React from "react";
import Contact from "../contact";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header text-[#f8f8f8] flex justify-between items-start md:items-center absolute top-0 left-0 p-6 py-9 w-full z-[9999]">
      <div className="logo relative flex items-center gap-3">
        <Link href="#" className="relative">
          Anthony Animba{" "}
          <span className="text-[80%] absolute top-0 right-[-10px]">™</span>{" "}
        </Link>
      </div>
      <div className="txt pr-12 hidden lg:block">
        <span className="rise load-delay">Designer / Developer</span>
        <br />
        <span className="rise load-delay">Portfolio / 2023 — 2024</span>
      </div>
      <div></div>
      <div className="">
        <div className="txt md:hidden mb-4">
          <span className="rise block font-[400]  text-[90%] load-delay">
            Designer / Developer
          </span>
          <span className="rise block font-[400]  text-[90%] load-delay">
            Old Portfolio / 2023 — 2024
          </span>
        </div>
        <div className="txt md:hidden mb-4">
          <span className="rise block font-[400]  text-[90%]">Available for freelance</span>
          <span className="rise block font-[400]  text-[90%]">
            {" "}
            projects in September 2023
          </span>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Header;
