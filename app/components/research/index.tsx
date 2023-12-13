import React from "react";
import AnimationWrapper from "../animWrapper";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Carousel } from "antd";

const researchData = [
  {
    location: "Ko Lanta, Thailand",
    date: "Sept 2023",
    imageSrc: "/thai1.png",
  },
  {
    location: "Medewi, Bali",
    date: "Jul 2023",
    imageSrc: "/bali3.png",
  },
  {
    location: "Valletta, Malta",
    date: "Feb 2023",
    imageSrc: "/malta2.png",
  },
];

const Research = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={inViewRef}
      className="grid gap-8 md:gap-0 grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-4 md:h-80"
    >
      <div className="ml-0 md:hidden relative w-full h-full  bg-white p-4 py-6 md:p-9">
        <ul className="relative mt-auto block h-fit text-[100%]">
          <h4 className="txt">Blok Studios® / Modular housing</h4>
          <li className="txt">Research phase — 01</li>
          <li className="txt">3D Visualisation</li>
          <div
            className="divide my-4 lg:hidden"
            style={{ width: inView ? "100%" : 0 }}
          ></div>
          <p className="mt-8 md:mt-6">
            BLOK Studios® is a modular housing initiative set up more than 5
            years ago as a sixth-form project and has since turned into my
            conceptual product design playground. The goal is to create modular,
            accessible housing for all, with hopes of reducing our permanent
            impact on the planet.
            <br />
            <br />
            The structures will be fully modular and can be integrated into
            pre-existing buildings - enhancing structural integrity whilst
            helping to reduce unnecessary demolitions - or as stand alone units
            that are fully customisable and built to any size or specification.
          </p>
          <li className="mt-8 relative w-fit pb-0.5 text-[100%]">
            <a
              href="https://www.instagram.com/blokstudios"
              target="_blank"
              rel="noreferrer"
              className="flex expand txt items-center px-8 py-2 rounded-full border border-[#999] gap-2 font-[350] int"
            >
              <span className="text-[95%]  expand">Learn more</span>
              <Image
                src="/followArrow.svg"
                alt=""
                width={7}
                height={7}
                className="int expand"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        ref={inViewRef}
        className="relative md:w-[94%] cursor-none h-fit col-span-1 md:col-span-3 "
      >
        <AnimationWrapper>
          <Carousel autoplay>
            {researchData.map((item, index) => (
              <div
                key={index}
                className={`col-span-2 md:col-span-2  flex gap-4 h-[420px] order-${
                  index + 1
                } md:order-[unset]`}
              >
                <div className="relative overflow-hidden w-full h-full">
                  <div className="absolute bottom-1.5 w-full flex items-center justify-between p-4 text-white txt z-20">
                    <span className="text-[95%] md-text-[110%] tracking-tight">
                      {item.location}
                    </span>
                    <span className="tag tracking-tighter">{item.date}</span>
                  </div>
                  <div className="absolute bottom-0 w-full h-1/4 z-10 bg-gradient-to-t from-black to-transparent"></div>
                  <img
                    src={item.imageSrc}
                    alt=""
                    className="w-[100%] cursor-none brightness-[90%] hover:brightness-[80%] transition-all duration-300 h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </AnimationWrapper>
      </div>
      <div className="ml-0 hidden md:flex relative w-full h-fit  bg-white p-4 py-6 md:p-9">
        <AnimationWrapper stagger={0.2}>
          <ul className="relative mt-auto block h-fit text-[100%]">
            <h4 className="txt font-[500]">
              <strong>Blok Studios® / Modular housing</strong>{" "}
            </h4>
            <li className="txt">
              <strong>Research phase — 01</strong>{" "}
            </li>
            <li className="txt">
              <strong>3D Visualisation</strong>{" "}
            </li>
            <div
              className="h-[1px] divide w-full bg-[#999] lg:hidden"
              style={{ width: inView ? "100%" : "0%" }}
            ></div>
            <p className="mt-8 md:mt-5">
              BLOK Studios® is a modular housing initiative set up more than 5
              years ago as a sixth-form project and has since turned into my
              conceptual product design playground. The goal is to create
              modular, accessible housing for all, with hopes of reducing our
              permanent impact on the planet.
              <br />
              <br />
              The structures will be fully modular and can be integrated into
              pre-existing buildings - enhancing structural integrity whilst
              helping to reduce unnecessary demolitions - or as stand alone
              units that are fully customisable and built to any size or
              specification.
            </p>
            <li className="mt-8 relative w-fit pb-0.5">
              <a
                href="https://www.instagram.com/blokstudios"
                target="_blank"
                rel="noreferrer"
                className="flex txt expand  items-center px-6 w-full md:w-fit py-2.5 rounded-full border border-[#999] hover:border-[#1a1a1a] transition-all gap-2 font-[400] int"
              >
                <span className="text-[90%] expand md:text-[95%] font-[400]">
                  Learn more
                </span>
                <Image
                  src="/followArrow.svg"
                  alt=""
                  width={7}
                  height={7}
                  className="int expand"
                />
              </a>
            </li>
          </ul>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Research;
