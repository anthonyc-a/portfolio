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
      <div className="about h-[100vh] p-6">
        <div className="txt">about me</div>
      </div>
    </div>
  );
};

export default Home;
