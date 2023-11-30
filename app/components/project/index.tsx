import Image from "next/image";
import React, { useState } from "react";
import AnimationWrapper from "../animWrapper";
import { IoIosLink } from "react-icons/io";

const projects = [
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Double",
    description: "Marketing Agency",
    year: 2023,
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
    year: 2022,
    website: "verve.tv",
    tags: ["Consultancy", "Full-Stack", "APIs", "UI/UX"],
  },
  {
    imageSrc: "/archvizual.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Archvizual",
    description: "Visualisation Studio",
    year: 2021,
    website: "archvizual.com",
    tags: ["Web Design", "UI/UX", "Full-Stack", "CMS"],
  },
];

const Project = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<
    number | null
  >(null);

  const handleProjectClick = (index: number) => {
    if (expandedProjectIndex === index) {
      setExpandedProjectIndex(null);
    } else {
      setExpandedProjectIndex(index);
    }
  };

  return (
    <div className="col-span-3 flex flex-col gap-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project bg-white rounded-[4px] py-8  p-8"
          onClick={() => handleProjectClick(index)}
        >
          <AnimationWrapper>
            <div className="flex items-center justify-between gap-8">
              <Image
                src={project.imageSrc}
                alt={project.altText}
                width={200}
                height={200}
              />
              <div className="w-[45%]">
                <h4 className="leading-[1.8]  text-[100%]">{project.title}</h4>
                <h4 className=" tracking-wide font-[200] text-[87%] ">
                  {project.description}
                </h4>
                <div className="tags flex  flex-wrap items-center gap-1 gap-y-1.5 mt-2.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-20 txt flex items-center gap-1.5 justify-end">
                <a className=" text-[95%] link-anim pb-0.5 whitespace-nowrap">
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
                  } transition -translate-y-0.5 `}
                />
              </div>
            </div>

            {expandedProjectIndex === index && (
              <div className="mt-4 relative w-[65%] flex flex-col ml-auto ">
                <h4 className="mb-1 text-[90%]">Brief
                <div className="w-full h-[1px] bg-[#999] my-1.5"></div>
                
                </h4>
                <p className="w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus repellendus corporis est soluta, atque quam
                  voluptatum at laboriosam quasi repudiandae, ipsum tenetur
                  voluptatibus.
                </p>
                <br />
                <h4 className="mb-1  text-[90%]">Process
                <div className="w-full h-[1px] bg-[#999] my-1.5"></div>
                
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
                  <div className="w-full h-[1px] bg-[#999] my-1.5"></div>
                </h4>
                <p className="w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus repellendus corporis est soluta, atque quam
                  voluptatum at laboriosam quasi repudiandae, ipsum tenetur
                  voluptatibus. Aspernatur laborum nihil magni quos dolores, qui
                  natus veniam dolorem veritatis hic culpa et consequatur
                  repudiandae cumque?
                </p>
                <div className="flex mt-12 txt  items-center justify-between w-full">
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="txt tag flex items-center gap-1 transition-all  "
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
    </div>
  );
};

export default Project;
