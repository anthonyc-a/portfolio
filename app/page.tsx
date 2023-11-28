"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hero from "./components/hero";
import Image from "next/image";
import Project from "./components/project";
import Archive from "./components/archive";

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
      <div className="w-full bg-[#1a1a1a] rounded-md text-[#f8f8f8]">
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
            <h4 className="mb-4">Mobile and Web Design</h4>
            <p>
              I always strive to create memorable experiences that are
              aesthetically appealing, functional and distinctive. Whether
              it&apos;s inspiring marketing websites, convincing e-commerce
              sites or apps that are truly beneficial to users.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Art Direction</h4>
            <p>
              With my extensive experience in creating everything digital,
              I&apos;m able to establish a strong foundation in the choice of
              typography, color and photography to ensure that users perceive
              the brand and presence in a consistent way.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Development</h4>
            <p>
              By using my expertise as a digital designer, I make sure that a
              visual identity can be used to its full extent throughout all
              touchpoints in an accessible and user-friendly way. Not just
              timeless, but usable in todays digital world.
            </p>
          </div>
          <button className="absolute bottom-0 right-0 p-2 pb-1.5 px-6 border border-[#999] rounded-full">
            view my work
          </button>
        </div>
      </div>

      <div id="work" className="p-6 mt-20">
        <div className="grid gap-4 grid-rows-12 grid-cols-4">
          <h2 className="txt">experience</h2>
          <Project />
        </div>
      </div>

      <div id="archive" className="p-6 mt-16">
        <div className="grid gap-4 grid-rows-12 grid-cols-4">
          <h2 className="txt">archive</h2>
          <Archive />
        </div>
      </div>
    </div>
  );
};

export default Home;
