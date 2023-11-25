import React from "react";
import Button from "../button";
import Location from "../location";
import Socials from "../socials";

const Hero = () => {
  return (
    <div className="hero h-[100vh] flex items-center ml-auto mr-[20%] w-fit">
      <div className="inner pt-4">
        <h1>
          <span className="rise">Digital Designer</span>
          <br />
          <span className="rise">and Full-Stack</span>
          <br />
          <span className="rise">Developer currently</span>
          <br />

          <span className="rise">based in London.</span>
        </h1>
        <div className="relative mt-4 z-20">
          <p className="relative z-10 text-white  w-fit whitespace-nowrap">
            <span className="rise">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </span>
            <br />
            <span className="rise">
              voluptas totam explicabo blanditiis rem debitis
            </span>
            <br />
            <span className="rise">laborum possimus enim.</span>
          </p>
        </div>
        <div className="mt-10">
          <Button />
        </div>
      </div>

      <Location />
      <div className="txt absolute top-8 h-[42px] flex flex-col justify-center">
        <span className="rise">Available for freelance</span>
        <span className="rise">projects in January 2024</span>
      </div>

      <div className="bottom absolute bottom-0 left-0 w-full p-6 flex justify-between items-center">
        <Socials />
        <span className="txt rise">© 2024</span>
      </div>
    </div>
  );
};

export default Hero;
