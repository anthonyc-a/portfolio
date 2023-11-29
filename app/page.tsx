"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hero from "./components/hero";
import Image from "next/image";
import Project from "./components/project";
import Archive from "./components/archive";

const Home = () => {
  const textRef = useRef(null);

  const setLocation = () => {
    window.location.href = "#work";
  };

  useEffect(() => {
    gsap.from(textRef.current, {
      y: "100%",
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="w-full  ">
      <div className="w-full bg-[#1a1a1a] text-[#f8f8f8] rounded-b-md">
        <Hero />
      </div>
      <div id="about" className=" p-6 pt-20">
        <div className="grid gap-8 grid-rows-12 grid-cols-4">
          <div className="txt">
            <span className="">about me</span>
          </div>
          <h2 className="w-[175%]">
            I am passionate about everything that has to do with Digital Design
            and Art Direction. I enjoy working with agencies and enthusiastic
            people who want to solve problems through beautiful designs and
            digital experiences.
          </h2>
          <div></div>
          <div className="w-40 lg:w-48 h-40 lg:h-48 rounded-full bg-gray-300  overflow-hidden">
            <Image
              src="/me.jpg"
              alt=""
              width={1372}
              height={1507}
              className="w-full h-full object-cover scale-[1.25] translate-y-2"
            />
          </div>
        </div>
        <div className="grid relative mt-10 gap-x-12 grid-rows-1 grid-cols-4">
          <div className="pr-6">
            <h4 className="mb-4 mt-6">Full-Stack Development</h4>
            <p>
              By using my expertise as a digital designer, I make sure that a
              visual identity can be used to its full extent throughout all
              touchpoints in an accessible and user-friendly way. Not just
              timeless, but usable in todays digital world.
            </p>
          </div>
          <div className="pr-6">
            <h4 className="mb-4 mt-6">Mobile and Web Design</h4>
            <p>
              I always strive to create memorable experiences that are
              aesthetically appealing, functional and distinctive. Whether
              it&apos;s inspiring marketing websites, convincing e-commerce
              sites or apps that are truly beneficial to users.
            </p>
          </div>

          <div className="pr-6">
            <h4 className="mb-4 mt-6">Art Direction</h4>
            <p>
              With my extensive experience in creating everything digital,
              I&apos;m able to establish a strong foundation in the choice of
              typography, color and photography to ensure that users perceive
              the brand and presence in a consistent way.
            </p>
          </div>

          <button
            onClick={setLocation}
            className="absolute flex items-center gap-3 bottom-0 right-0 p-3 px-4 border border-[#999] rounded-full"
          >
            explore my work
            <Image
              src="/downArrow.svg"
              alt=""
              width={7}
              height={7}
              className="mix-blend-difference"
            />
          </button>
        </div>
      </div>

      <div id="work" className="p-6 pt-20 mt-6">
        <div className="grid gap-4 grid-rows-12 grid-cols-4">
          <div className="txt">
            <span className="">projects</span>
          </div>
          <Project />
        </div>
      </div>

      <div id="research" className="p-6 mt-8">
        <div className="txt mb-12 ">research</div>
        <div className="grid gap-5 grid-rows-1 grid-cols-4 h-80">
          <div className="col-span-1 flex gap-4">
            <div className="relative rounded-[4px] overflow-hidden w-full h-full">
              <div className="absolute bottom-0 w-full flex items-center justify-between p-4 text-white txt z-20">
                <span>Ko Lanta, Thailand</span>

                <span className="tag">Jul&apos; 2023</span>
              </div>
              <div className="absolute bottom-0 w-full h-1/4 z-10 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <img
                src="/thai1.png"
                alt=""
                className="w-[100%] brightness-[85%] h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 flex gap-4">
            <div className="relative rounded-[4px] overflow-hidden w-full h-full">
              <div className="absolute bottom-0 w-full flex items-center justify-between p-4 text-white txt z-20">
              <span>Medewi, Bali</span>
                <span className="tag">Mar&apos; 2023</span>
              </div>
              <div className="absolute bottom-0 w-full z-10 h-1/4 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <img
                src="/bali3.png"
                alt=""
                className="w-[100%] h-full object-cover brightness-[85%]"
              />
            </div>
          </div>
          <div className="col-span-2 flex gap-10">
            <div className="relative rounded-[4px] overflow-hidden w-full">
              <div className="absolute bottom-0 w-full flex items-center justify-between p-4 text-white txt z-20">
                <span>Valletta, Malta</span>

                <span className="tag">Sept&apos; 2023</span>
              </div>
              <div className="absolute bottom-0 w-full z-10 h-1/4 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <img
                src="malta2.png"
                alt=""
                className="w-[100%]  h-full object-cover brightness-[85%]"
              />
            </div>

            <div className="txt w-[50%] flex h-full">
              <ul className="relative mt-auto block h-fit text-[100%]">
                <li>Blok Studios® / Modular housing</li>
                <li>3D Visualisation</li>
                <li>Research phase — 01</li>
                <li>2023</li>
                <li className="mt-6 link-anim text-[90%]">
                  <a
                    href="https://www.instagram.com/blokstudios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    view more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="archive" className="p-6 mt-16">
        <div className="grid gap-4 grid-rows-12 grid-cols-4 mt-8">
          <div className="txt">
            <span>project archive</span>
          </div>
          <Archive />
        </div>
      </div>
    </div>
  );
};

export default Home;
