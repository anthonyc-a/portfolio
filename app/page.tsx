"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero from "./components/hero";
import Image from "next/image";
import Project from "./components/project";
import Archive from "./components/archive";
import AnimationWrapper from "./components/animWrapper";
import AccentHeaderOne from "./components/accent";
import Research from "./components/research";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "Art Direction",
    description:
      "Extensive experience working in the realm of digital marketing and branding enables me to establish a strong foundation using typography, color and photography to ensure users perceive your brand in a true and consistent manner.",
    icon: "/art.svg",
  },
  {
    title: "Digital Design",
    description:
      "A designer by nature - I have an eye for detail and a passion for creating functional, satisfying user experiences. With a strong understanding of the design process, I can help point you in the right direction, no matter what stage you're at.",
    icon: "/design.svg",
  },
  {
    title: "Development",
    description:
      "My expertise as a full-stack developer allows me to rapidly create custom end-to-end solutions for clients. I use the latest industry-standard technologies to create fast, responsive and secure websites and apps that are built to scale.",
    icon: "/dev.svg",
  },
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = React.useState(false);

  const setLocation = (location: any) => {
    window.location.href = `#${location}`;
  };

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.65,
  });

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

  const togglePause = () => {
    const video = document.querySelector("video");
    const pause = document.querySelector(".pause");
    setPaused(!paused);
    if (video) {
      if (video.paused) {
        video.play();
        pause!.classList.add("active");
      } else {
        video.pause();
        pause!.classList.remove("active");
      }
    }
  };

  return (
    <div className="w-full  ">
      <div className="w-full z-[100] bg-[#181818] text-[#f8f8f8]">
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
            <div className="w-40 md:hidden mt-[-1rem] md:mt-0  h-40 rounded-full bg-gray-300  overflow-hidden">
            <div className="w-40 md:hidden h-40 rounded-full bg-gray-300  overflow-hidden">
              <img
                src="/me.jpg"
                alt=""
                className="w-full h-full  object-cover scale-[1.25] translate-y-2"
              />
            </div>
            </div>
            <AnimationWrapper>
              <h2 className="md:w-[175%]">
                A Designer and Full-Stack Developer with over 5 years experience
                working with small to medium-sized businesses, startups and
                individuals helping to ensure brand growth through thoughtful
                design and incisive technical execution
              </h2>
            </AnimationWrapper>

            <div></div>
            <div className="w-40  h-40  hidden md:block rounded-full bg-gray-300  overflow-hidden">
              <Image
                src="/me.jpg"
                alt=""
                width={1372}
                height={1507}
                className="w-full h-full object-cover scale-[1.25] translate-y-2"
              />
            </div>
          </div>

          <AnimationWrapper stagger={0.2}>
            <div
              ref={inViewRef}
              className="grid relative mt-0 md:mt-12 gap-x-12 grid-rows-1 grid-cols-1 sm:pb-[80px] lg:pb-0 lg:grid-cols-4"
            >
              {skills.map((item, index) => (
                <div key={index}>
                  <h4 className="mb-2 md:mb-4 mt-6">{item.title}</h4>
                  <div
                    className="divide my-3 lg:hidden"
                    style={{ width: inView ? "100%" : 0 }}
                  />
                  <p className="opacity-[0.87]">{item.description}</p>
                </div>
              ))}

              <button
                onClick={() => {
                  setLocation("work");
                }}
                className="md:absolute expand font-[400]  int mt-10 md:mt-0 main-btn flex justify-center items-center gap-3 bottom-0 right-0 p-3 px-4 md:px-6 border border-[#999] rounded-full"
              >
                <span className="int expand">explore my work</span>
                <div className="arrow h-4 flex items-center overflow-hidden">
                  <div className="inner">
                    <Image
                      src="/followArrow.svg"
                      alt=""
                      width={7}
                      height={7}
                      className={`rotate-[135deg] int`}
                    />
                  </div>
                </div>
              </button>
            </div>
          </AnimationWrapper>
        </div>

        <div id="work" className="p-6 pt-10 md:pt-16 mt-6">
          <div className="grid gap-4 grid-rows-12 grid-cols-1 md:grid-cols-4">
            <div className="txt">
              <AccentHeaderOne text="clients" />
            </div>
            <Project />
          </div>
        </div>

        <div className="p-6 pt-10 md:pt-16 mt-6 md:mt-4">
          <AnimationWrapper>
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="relative md:w-[50%] h-[360px] overflow-hidden">
                <video
                  src="/vid.mp4"
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    paused ? "brightness-75" : ""
                  }`}
                  autoPlay
                  loop
                  muted
                />
                <div className="absolute bottom-0 w-full h-1/4 z-0 bg-gradient-to-t from-black to-transparent"></div>
                <div
                  className="pause cursor-pointer expand scale-[0.8] origin-center absolute bottom-4 left-4"
                  onClick={togglePause}
                >
                  {paused ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      color="#fff"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="expand"
                    >
                      <path
                        className="expand"
                        d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      color="#fff"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="expand"
                    >
                      <path
                        className="expand"
                        d="M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zM375.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z"
                      ></path>
                    </svg>
                  )}
                </div>
                <div className="absolute tag bottom-4 text-[#eee] right-4">
                  studio showreel 2024
                </div>
              </div>
              <div className="md:w-[40%] mt-10 md:mt-0">
                <div className="txt pb-8 ">
                  <span className="text-[95%] font-[450]">
                    let&apos;s work together
                  </span>
                </div>
                <h2>
                  I&apos;m always open to new ideas, big or small and currently
                  available for freelance and contract-based work
                </h2>
                <p className="mt-4 lg:pr-12 opacity-[0.87] lg:mt-7">
                  <a
                    href="https://instagram.com/aarkyvstudios"
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-[400] expand hover:no-underline"
                  >
                    Aarkyv Studios
                  </a>{" "}
                  is used to accept, manage and provide inspiration when working
                  on freelance projects. Founded last year, my insatiable
                  curiosty allows me to work on a wide range of projects and
                  ideas. The website is set to launch this year.
                </p>
                <div className="flex items-center gap-8">
                  <button
                    onClick={() => {
                      setLocation("contact");
                    }}
                    className="font-[400] expand main-btn  int mt-6 md:mt-8 flex justify-center items-center gap-3 p-3 px-4 md:px-8 border border-[#999] rounded-full"
                  >
                    <span className="int expand">start a project</span>
                    <div className="arrow expand h-4 flex items-center overflow-hidden">
                      <div className="inner expand">
                        <Image
                          src="/followArrow.svg"
                          alt=""
                          width={7}
                          height={7}
                          className={`rotate-[135deg] expand int`}
                        />
                      </div>
                    </div>
                  </button>
                  <a
                    href="https://instagram.com/aarkyvstudios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="font-[400] expand int mt-6 md:mt-8 flex justify-center items-center gap-2 p-3 rounded-full">
                      <span className="int expand">learn more</span>
                 
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>


        <div id="archive" className="p-6 mt-4 md:mt-14">
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
