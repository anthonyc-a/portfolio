"use client";

import Image from "next/image";
import React, { useState } from "react";
import AnimationWrapper from "../animWrapper";
import { IoIosLink } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Double",
    description: "Marketing Agency",
    year: "Sept 2023",
    website: "double-agency.com",
    tags: ["UI/UX", "Web Design", "Front-End", "Consultancy"],
  },
  {
    imageSrc: "/verve.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Verve TV ",
    description: "Streaming Service",
    year: "Jul 2022",
    website: "verve.tv",
    tags: ["Full-Stack", "API", "UI/UX", "Consultancy"],
  },
  {
    imageSrc: "/snapi.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Snapi",
    description: "Audience Activation",
    year: "Jan 2021",
    website: "archvizual.com",
    tags: ["UI/UX", "Web Design", "Front-End", "Art Direction"],
  },
  {
    imageSrc: "/archvizual.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Archvizual",
    description: "Visualisation Studio",
    year: "Jan 2021",
    website: "archvizual.com",
    tags: ["Web Design", "CMS", "Full-Stack", "Art Direction"],
  },
];

const Project = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<
    number | null
  >(null);
  const [showMore, setShowMore] = useState(false);

  const handleProjectClick = (index: number) => {
    if (expandedProjectIndex === index) {
      setExpandedProjectIndex(null);
    } else {
      setExpandedProjectIndex(index);
    }
  };

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <div className="col-span-1 md:col-span-3 flex flex-col gap-5">
      {visibleProjects.map((project, index) => (
        <div
          key={index}
          className="project bg-white rounded-[0px] py-6 md:py-8  p-4 md:p-8"
          onClick={() => handleProjectClick(index)}
        >
          <AnimationWrapper>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="index txt md:hidden">
                <span className="text-[#1a1a1a] text-[85%] absolute top-0 right-0">
                  01 — 00{index + 1}
                </span>
              </div>
              {expandedProjectIndex === index ? (
                <Image
                  src={project.imageSrc}
                  alt={project.altText}
                  width={230}
                  height={230}
                  className="mx-auto mt-2 md:mx-0 float"
                />
              ) : (
                <Image
                  src={project.imageSrc}
                  alt={project.altText}
                  width={230}
                  height={230}
                  className="mx-auto mt-2 md:mx-0"
                />
              )}
              <div className="w-[45%]">
                <h4 className="leading-[1] md:leading-[1.8]   text-[100%]">
                  {project.title}
                </h4>
                <h4 className=" tracking-wide font-[300] md:font-[200] text-[87%] ">
                  {project.description}
                </h4>
                <div className="tags flex  md:flex-wrap items-center gap-1 gap-y-1.5 mt-2.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag text-[#333]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-fit txt flex items-center gap-1.5 justify-start">
                <a
                  href={`https://${project.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="txt hidden tag  items-center gap-1 transition-all  "
                >
                  <div>
                    <IoIosLink size={10} />
                  </div>
                  <div>
                    <span>{project.website}</span>
                  </div>
                </a>
                <button className="int main-btn flex justify-center w-full md:w-32 items-center gap-3 bottom-0 right-0 p-2 md:p-2 md:pb-1.5 px-4 border border-[#999] rounded-full">
                  <a className=" text-[100%] int main-btn md:text-[95%] font-[400] pb-0.5 whitespace-nowrap">
                    {expandedProjectIndex === index ? "close" : "Learn more"}
                  </a>
                  <Image
                    src="/followArrow.svg"
                    alt=""
                    width={7}
                    height={7}
                    className={`${
                      expandedProjectIndex === index
                        ? "rotate-[-45deg]"
                        : "rotate-[135deg]"
                    } transition int -translate-y-0.5 `}
                  />
                </button>
              </div>
            </div>

            {expandedProjectIndex === index && (
              <div
                ref={inViewRef}
                className="mt-8 md:mt-8 relative w-full lg:md:w-[65%] flex flex-col ml-auto "
              >
                <h4 className="mb-1 text-[90%]">
                  Brief
                  <div
                    className="divide my-1.5"
                    style={{ width: inView ? "100%" : 0 }}
                  />
                </h4>
                <p className="w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus repellendus corporis est soluta, atque quam
                  voluptatum at laboriosam quasi repudiandae, ipsum tenetur
                  voluptatibus.
                </p>
                <br />
                <h4 className="mb-1  text-[90%]">
                  Process
                  <div
                    className="divide my-1.5 delay-75"
                    style={{ width: inView ? "100%" : 0 }}
                  />
                </h4>
                <p className="w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus repellendus corporis est soluta, atque quam
                  voluptatum at laboriosam quasi repudiandae, ipsum tenetur
                  voluptatibus. Aspernatur laborum nihil magni quos dolores, qui
                  natus veniam dolorem veritatis hic culpa et consequatur
                  repudiandae cumque?
                </p>
                <br />
                <h4 className="mb-1 text-[90%]">
                  Outcome
                  <div
                    className="divide my-1.5"
                    style={{ width: inView ? "100%" : 0 }}
                  />
                </h4>
                <p className="w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus repellendus corporis est soluta, atque quam
                  voluptatum at laboriosam quasi repudiandae, ipsum tenetur
                  voluptatibus. Aspernatur laborum nihil magni quos dolores, qui
                  natus veniam dolorem veritatis hic culpa et consequatur
                  repudiandae cumque?
                </p>
                <div className="flex mt-12  items-center justify-between w-full">
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="txt tag h-7 flex items-center gap-1 transition-all  "
                  >
                    <div>
                      <IoIosLink size={10} />
                    </div>
                    <div>
                      <span>{project.website}</span>
                    </div>
                  </a>
                  <div className="tag">{project.year}</div>
                </div>
              </div>
            )}
          </AnimationWrapper>
        </div>
      ))}
      {projects.length > 3 && (
        <div
          className="flex justify-center w-full items-center gap-3 bottom-0 right-0 mt-6 txt"
          onClick={() => setShowMore(!showMore)}
        >
          <div className="w-full h-[1px] bg-[#999]" />

          <a className=" absolute flex gap-2 bg-[#f8f8f8] mx-auto text-[90%] int main-btn md:text-[95%] text-center px-4 w-fit font-[400] pb-0.5 whitespace-nowrap">
            <a>
            {showMore ? "Show Less" : "More work"}

            </a>
            {showMore ? " -" : " +"}
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
