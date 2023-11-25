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
      <div className="about h-[100vh] p-6 pt-12 grid grid-rows-1 grid-cols-3">
        <div className="txt">about me</div>
        <h2>
          I am passionate about everything that has to do with Digital Design
          and Art Direction. I enjoy working with agencies and enthusiastic
          people who want to solve problems through beautiful designs and
          experiences.
        </h2>
        pic
      </div>
    </div>
  );
};

export default Home;
