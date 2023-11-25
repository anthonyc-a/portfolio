"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hero from "./components/hero";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: "100%",
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="w-full  ">
      <div className="w-full bg-[#1a1a1a] text-[#f5f5f5]">
        <Hero />
      </div>
      <div className="h-[100vh] p-6 pt-16">
        <div className="grid gap-8 grid-rows-12 grid-cols-4">
          <div className="txt">about me</div>
          <h2 className="w-[200%]">
            I am passionate about everything that has to do with Digital Design
            and Art Direction. I enjoy working with agencies and enthusiastic
            people who want to solve problems through beautiful designs and
            experiences.
          </h2>
          <div></div>
          <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto"></div>
        </div>
        <div className="grid mt-20 gap-x-12 grid-rows-1 grid-cols-4">
          <div>
            <h4>Mobile and Web Design</h4>
            <p>
              I am passionate about everything that has to do with Digital
              Design and Art Direction. I enjoy working with agencies and
              enthusiastic people who want to solve problems through beautiful
              designs and experiences.
            </p>
          </div>
          <div>
            <h4>Art Direction</h4>
            <p>
              I am passionate about everything that has to do with Digital
              Design and Art Direction. I enjoy working with agencies and
              enthusiastic people who want to solve problems through beautiful
              designs and experiences.
            </p>
          </div>
          <div>
            <h4>Development</h4>
            <p>
              I am passionate about everything that has to do with Digital
              Design and Art Direction. I enjoy working with agencies and
              enthusiastic people who want to solve problems through beautiful
              designs and experiences.
            </p>
          </div>
          more
        </div>
      </div>
    </div>
  );
};

export default Home;
