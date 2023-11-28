import Image from "next/image";
import React, { useState } from "react";

const projects = [
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Double",
    description: "Marketing Agency",
    year: 2023,
    tags: ["UI/UX", "Web Design", "Front-End", "Consultancy"],
  },
  {
    imageSrc: "/verve.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Verve TV",
    description: "Streaming Service",
    year: 2022,
    tags: ["UI/UX", "Full-Stack", "APIs", "Consultancy"],
  },
  {
    imageSrc: "/archvizual.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Archvizual",
    description: "Visualisation Studio",
    year: 2021,
    tags: ["UI/UX", "Web Design", "Full-Stack"],
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
          className=" bg-white rounded-md py-6  p-8"
          onClick={() => handleProjectClick(index)}
        >
          <div className="flex items-center justify-between gap-8">
            <Image
              src={project.imageSrc}
              alt={project.altText}
              width={project.width}
              height={project.height}
            />
            <div className="w-[50%]">
              <h4 className="leading-[1.35] font-[350] text-[105%]">{project.title}</h4>
              <h4 className="text-gray-500 font-[250] text-[90%] ">
                {project.description}
              </h4>
              <div className="tags flex items-center gap-1 mt-2.5">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <button className="hover:underline text-[130%] font-[100]">+</button>
          </div>

          {expandedProjectIndex === index && (
            <div className="mt-4 w-full flex justify-between">
              <a href="/">teh website</a>
              <p>This is the expanded text for the project.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
