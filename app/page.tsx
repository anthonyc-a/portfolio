"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hero from "./components/hero";
import Image from "next/image";
import Project from "./components/project";
import Archive from "./components/archive";
import AnimationWrapper from "./components/animWrapper";
import AccentHeaderOne from "./components/accent";

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
      <div className="w-full bg-[#1a1a1a] text-[#f8f8f8] rounded-b-md">
        <div ref={heroRef}>
          <Hero />
        </div>
      </div>
      <div className="xl:container xl:mx-auto">
        <div id="about" className=" p-6 pt-20">
          <div className="grid gap-8 grid-rows-12 grid-cols-4">
            <div className="txt">
              <AccentHeaderOne text="about me" />
            </div>
            <AnimationWrapper>
              <h2 className="w-[175%]">
                I am passionate about everything that has to do with Digital
                Design and Art Direction. I enjoy working with agencies and
                enthusiastic people who want to solve problems through beautiful
                designs and digital experiences.
              </h2>
            </AnimationWrapper>

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

          <AnimationWrapper>
            <div className="grid relative mt-8 gap-x-12 grid-rows-1 grid-cols-4">
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
                  I&apos;m able to establish a strong foundation in the choice
                  of typography, color and photography to ensure that users
                  perceive the brand and presence in a consistent way.
                </p>
              </div>

              <button
                onClick={setLocation}
                className="absolute main-btn flex items-center gap-3 bottom-0 right-0 p-3 px-4 border border-[#999] rounded-full"
              >
                explore my work
                <Image
                  src="/downArrow.svg"
                  alt=""
                  width={7}
                  height={7}
                  className="brightness-0"
                />
              </button>
            </div>
          </AnimationWrapper>
        </div>

        <div id="work" className="p-6 pt-20 mt-6">
          <div className="grid gap-4 grid-rows-12 grid-cols-4">
            <div className="txt">
              <AccentHeaderOne text="clients" />
            </div>
            <Project />
          </div>
        </div>

        <div id="research" className="p-6 mt-6">
          <div className="txt mb-12">
            <AccentHeaderOne text="research" />
          </div>

          <div className="grid gap-5 grid-rows-1 grid-cols-4 h-80">
            <div className="col-span-1 flex gap-4">
              <AnimationWrapper>
                <div className="relative rounded-[4px] overflow-hidden w-full h-full">
                  <div className="absolute bottom-0 w-full flex items-center justify-between p-4 text-white txt z-20">
                    <span>Koh Lanta, Thailand</span>

                    <span className="tag">Sept 2023</span>
                  </div>
                  <div className="absolute bottom-0 w-full h-1/4 z-10 bg-gradient-to-t from-black to-transparent"></div>
                  <img
                    src="/thai1.png"
                    alt=""
                    className="w-[100%] brightness-[85%] h-full object-cover"
                  />
                </div>
              </AnimationWrapper>
            </div>

            <div className="col-span-1 flex gap-4">
              <AnimationWrapper stagger={0.2}>
                <div className="relative rounded-[4px] overflow-hidden w-full h-full">
                  <div className="absolute bottom-0 w-full flex items-center justify-between p-4 text-white txt z-20">
                    <span>Medewi, Bali</span>
                    <span className="tag">Jul 2023</span>
                  </div>
                  <div className="absolute bottom-0 w-full z-10 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
                  <img
                    src="/bali3.png"
                    alt=""
                    className="w-[100%] h-full object-cover brightness-[85%]"
                  />
                </div>
              </AnimationWrapper>
            </div>

            <div className="col-span-2 flex relative justify-between">
              <AnimationWrapper stagger={0.4}>
                <div className="flex relative justify-between w-full  h-full">
                  <div className="relative rounded-tl-[4px] rounded-bl-[4px] overflow-hidden w-[60%] h-full">
                    <div className="absolute bottom-0 w-full flex items-center justify-between p-4 text-white txt z-20">
                      <span>Valletta, Malta</span>

                      <span className="tag">Feb 2023</span>
                    </div>
                    <div className="absolute bottom-0 w-full z-10 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
                    <img
                      src="malta2.png"
                      alt=""
                      className="w-[100%]  h-full object-cover brightness-[85%]"
                    />
                  </div>

                  <div className="ml-0 relative w-[50%] h-full txt bg-white p-6 rounded-tr-[4px] rounded-br-[4px]">
                    <ul className="relative mt-auto block h-fit text-[100%]">
                      <li>Blok Studios® / Modular housing project</li>
                      <li>3D Visualisation</li>
                      <li>Research phase — 02</li>
                      <li className="tag ml-auto w-fit">2023</li>
                      <li className="w-full h-[1px] mt-4 bg-[#999]"></li>
                      <li className="mt-4 ttn">
                        Blok Studios® is a modular housing solution that started
                        as sixth form project over 5 years ago. The goal is
                        to create modular, accessible housing for all, with
                        hopes of reducing our permenant impact on the planet.
                      </li>
                      <li className="mt-8 relative w-fit pb-0.5 text-[95%]">
                        <a
                          href="https://www.instagram.com/blokstudios"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center tag gap-1 font-[350]"
                        >
                          Learn more
                          <Image
                            src="/followArrow.svg"
                            alt=""
                            width={7}
                            height={7}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>

        <div id="archive" className="p-6 mt-16">
          <div className="grid gap-4 grid-rows-12 grid-cols-4 mt-8">
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
