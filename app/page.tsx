"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "./components/button";
import Socials from "./components/socials";
import Location from "./components/location";
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
    <div className="w-full bg-[#1a1a1a] text-[#eee]">
      <Hero/>
    </div>
  );
};

export default Home;
