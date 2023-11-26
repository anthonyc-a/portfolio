"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hero from "./components/hero";
import Image from "next/image";

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
      <div id="about" className=" p-6 pt-16">
        <div className="grid gap-8 grid-rows-12 grid-cols-4">
          <div className="txt">about me</div>
          <h2 className="w-[175%]">
            I am passionate about everything that has to do with Digital Design
            and Art Direction. I enjoy working with agencies and enthusiastic
            people who want to solve problems through beautiful designs and
            experiences.
          </h2>
          <div></div>
          <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto overflow-hidden">
            <Image
              src="/me.jpg"
              alt=""
              width={1372}
              height={1507}
              className="w-full h-full object-cover scale-[1.25] translate-y-2 saturate-[1.1]"
            />
          </div>
        </div>
        <div className="grid relative mt-20 gap-x-12 grid-rows-1 grid-cols-4">
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
          <button className="absolute bottom-0 right-0">more</button>
        </div>
      </div>

      <div id="work" className="p-6 pt-16">
        <div className="grid gap-8 grid-rows-12 grid-cols-4">
          <div className="txt">experience</div>
          <div className=" bg-gray-200">hi</div>
          <div className=" bg-gray-200">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
