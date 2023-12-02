"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hero from "./components/hero";
import Image from "next/image";
import Project from "./components/project";
import Archive from "./components/archive";
import AnimationWrapper from "./components/animWrapper";
import AccentHeaderOne from "./components/accent";
import Research from "./components/research";

const Home = () => {
  const textRef = useRef(null);

  const setLocation = () => {
    window.location.href = "#work";
  };

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;

    if (heroElement) {
      gsap.to(heroElement, {
        y: "-0%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: heroElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="w-full  ">
      <div className="w-full bg-[#1a1a1a] text-[#f8f8f8]">
        <div ref={heroRef}>
          <Hero />
        </div>
      </div>
      <div className="xl:container xl:mx-auto">
        <div id="about" className=" p-6 pt-10 md:pt-20">
          <div className="grid gap-8 grid-rows-12 grid-cols-1   md:grid-cols-4">
            <div className="txt">
              <AccentHeaderOne text="about me" />
            </div>
            <div className="w-40 md:hidden mt-[-1rem] md:mt-0  lg:w-48 h-40 lg:h-48 rounded-full bg-gray-300  overflow-hidden">
              <Image
                src="/me.jpg"
                alt=""
                width={1372}
                height={1507}
                className="w-full h-full object-cover scale-[1.25] translate-y-2"
              />
            </div>
            <AnimationWrapper>
              <h2 className="md:w-[175%]">
                A Designer and Full-Stack Developer with over 5 years
                experience working with small to medium-sized businesses,
                startups and individuals, ensuring brand growth through
                thoughtful design and incisive technical execution.
              </h2>
            </AnimationWrapper>

            <div></div>
            <div className="w-40 lg:w-48 h-40 lg:h-48 hidden md:block rounded-full bg-gray-300  overflow-hidden">
              <Image
                src="/me.jpg"
                alt=""
                width={1372}
                height={1507}
                className="w-full h-full object-cover scale-[1.25] translate-y-2"
              />
            </div>
          </div>

          <AnimationWrapper>
            <div className="grid relative mt-0 md:mt-10 gap-x-12 grid-rows-1 grid-cols-1 sm:pr-[200px] lg:pr-0 lg:grid-cols-4">
              <div className="pr-6">
                <h4 className="mb-4 mt-6">Full-Stack Development</h4>
                <p>
                  By using my expertise as a digital designer, I make sure that
                  a visual identity can be used to its full extent throughout
                  all touchpoints in an accessible and user-friendly way. Not
                  just timeless, but usable in todays digital world.
                </p>
              </div>
              <div className="pr-6">
                <h4 className="mb-4 mt-6">Digital Design</h4>
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
                  I&apos;m able to establish a strong foundation in the choice
                  of typography, color and photography to ensure that users
                  perceive the brand and presence in a consistent way.
                </p>
              </div>

              <button
                onClick={setLocation}
                className="md:absolute  int mt-8 md:mt-0 main-btn flex justify-center items-center gap-3 bottom-0 right-0 p-3 px-4 md:px-8 border border-[#999] rounded-full"
              >
                <span className="int">see my work</span>
                <Image
                  src="/downArrow.svg"
                  alt=""
                  width={7}
                  height={7}
                  className="int brightness-0"
                />
              </button>
            </div>
          </AnimationWrapper>
        </div>

        <div id="work" className="p-6 pt-10 md:pt-20 mt-6">
          <div className="grid gap-4 grid-rows-12 grid-cols-1 md:grid-cols-4">
            <div className="txt">
              <AccentHeaderOne text="clients" />
            </div>
            <Project />
          </div>
        </div>

        <div id="research" className="p-6 mt-6">
          <div className="txt mb-8 md:mb-12">
            <AccentHeaderOne text="research" />
          </div>
          <Research />
        </div>

        <div id="archive" className="p-6 mt-4 md:mt-20">
          <div className="grid gap-4 grid-rows-12 grid-cols-1 md:grid-cols-4 mt-8">
            <div className="txt">
              <AccentHeaderOne text="archive" />
            </div>
            <Archive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
