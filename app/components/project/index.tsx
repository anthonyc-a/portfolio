import Image from "next/image";
import React, { useState } from "react";
import AnimationWrapper from "../animWrapper";

const projects = [
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Double — 2023",
    description: "Marketing Agency",
    year: 2023,
    tags: ["UI/UX", "Web Design", "Front-End", "Consultancy"],
  },
  {
    imageSrc: "/verve.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Verve TV — 2022",
    description: "Streaming Service",
    year: 2022,
    tags: ["Consultancy","Full-Stack",  "APIs", "UI/UX"],
  },
  {
    imageSrc: "/archvizual.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Archvizual — 2021",
    description: "Visualisation Studio",
    year: 2021,
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
                <h4 className="leading-[1.85]   text-[100%]">
                  {project.title}
                </h4>
                <h4 className="text-gray-500 tracking-wide font-[200] text-[90%] ">
                  {project.description}
                </h4>
                <div className="tags flex items-center gap-1 mt-2.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-20 txt flex items-center gap-1.5 justify-end">
                <a className=" text-[100%] link-anim whitespace-nowrap">
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
                  } transition `}
                />
              </div>
            </div>

            {expandedProjectIndex === index && (
              <div className="mt-4 relative w-[65%] flex flex-col ml-auto ">
                <a
                  href="/"
                  className="txt  ml-auto link-anim flex items-center gap-1.5 w-fit  mb-6"
                >
                  double-agency.com
                  <Image
                    src="/followArrow.svg"
                    alt=""
                    width={7}
                    height={7}
                    className="inline-block ml-0.5"
                  />
                </a>
                <h4 className="mb-2">The Brief</h4>
                <p className="w-full">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus repellendus corporis est soluta, atque quam
                  voluptatum at laboriosam quasi repudiandae, ipsum tenetur
                  voluptatibus. Aspernatur laborum nihil magni quos dolores, qui
                  natus veniam dolorem veritatis hic culpa et consequatur
                  repudiandae cumque? Nemo ullam repellat assumenda asperiores
                  optio odio quisquam enim ex nulla totam, at voluptate
                  aspernatur perferendis, distinctio id placeat modi rerum minus
                  sunt alias amet laboriosam? Provident sequi repudiandae
                  consectetur?
                </p>
              </div>
            )}
          </AnimationWrapper>
        </div>
      ))}
    </div>
  );
};

export default Project;
