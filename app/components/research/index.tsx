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
      className="grid gap-5 grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-4 md:h-80"
    >
      <div className="ml-0 md:hidden relative w-full h-full  bg-white p-4 py-6 md:p-6">
        <ul className="relative mt-auto block h-fit text-[100%]">
          <h4 className="txt">Blok Studios® / Modular housing</h4>
          <li className="txt">Research phase — 01</li>
          <li className="txt">3D Visualisation</li>
          <div
            className="divide my-4 lg:hidden"
            style={{ width: inView ? "100%" : 0 }}
          ></div>
          <li className="mt-8 md:mt-6 ttn txt">
            BLOK Studios® is a modular housing initiative that began over 5
            years ago as a sixth-form project and has since turned into my
            conceptual product design playground. The goal is to create modular,
            accessible housing for all, with hopes of reducing our permanent
            impact on the planet.
            <br />
            <br />
            BLOKS® will be fully modular and can be integrated in to
            pre-existing structures reducing unnecessary demolitions, or as
            stand alone units which will be fully customisable.
          </li>
          <li className="mt-8 relative w-fit pb-0.5 text-[100%]">
            <a
              href="https://www.instagram.com/blokstudios"
              target="_blank"
              rel="noreferrer"
              className="flex txt items-center px-8 py-2 rounded-full border border-[#999] gap-1.5 font-[350] int"
            >
              <span className="text-[95%]">Learn more</span>
              <Image
                src="/followArrow.svg"
                alt=""
                width={7}
                height={7}
                className="int"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        ref={inViewRef}
        className="relative w-full h-full col-span-1 md:col-span-3 bg-white"
      >
        <Carousel autoplay>
          {researchData.map((item, index) => (
            <div
              key={index}
              className={`col-span-2 md:col-span-3 flex gap-4 h-[380px] order-${
                index + 1
              } md:order-[unset]`}
            >
              <div className="relative rounded-[0px] overflow-hidden w-full h-full">
                <div className="absolute bottom-2 w-full flex items-center justify-between p-4 text-white txt z-20">
                  <span className="text-[95%] md-text-[110%]">
                    {item.location}
                  </span>
                  <span className="tag">{item.date}</span>
                </div>
                <div className="absolute bottom-0 w-full h-1/4 z-10 bg-gradient-to-t from-black to-transparent"></div>
                <img
                  src={item.imageSrc}
                  alt=""
                  className="w-[100%] brightness-[85%] h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="ml-0 hidden md:flex relative w-full h-full  bg-white p-4 py-6 md:p-6">
        <ul className="relative mt-auto block h-fit text-[100%]">
          <h4 className="txt">
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
          <li className="mt-8 md:mt-6 ttn txt">
            BLOK Studios® is a modular housing initiative which began over 5
            years ago as a sixth-form project. The goal is to create modular,
            accessible housing for all, with hopes of reducing our permenant
            impact on the planet.
            <br />
            <br />
            The structures will be fully modular and can be integrated in to
            pre-existing structures helping to reduce unnecessary demolitions or
            as stand alone units. The units will be fully customisable and can
            be built to any size or specification.
          </li>
          <li className="mt-8 relative w-fit pb-0.5">
            <a
              href="https://www.instagram.com/blokstudios"
              target="_blank"
              rel="noreferrer"
              className="flex txt  items-center px-8 w-full md:w-fit py-2 rounded-full border border-[#999] gap-1.5 font-[350] int"
            >
              <span className="text-[95%]">Learn more</span>
              <Image
                src="/followArrow.svg"
                alt=""
                width={7}
                height={7}
                className="int"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Research;
