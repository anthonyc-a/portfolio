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
    tags: ["UI/UX", "Web Design", "Full-Stack", "CMS"],
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
          className="project bg-white rounded-[4px] py-10  p-8"
          onClick={() => handleProjectClick(index)}
        >
          <div className="flex items-center justify-between gap-8">
            <Image
              src={project.imageSrc}
              alt={project.altText}
              width={200}
              height={200}
            />
            <div className="w-[55%]">
              <h4 className="leading-[1.3]  text-[105%]">{project.title}</h4>
              <h4 className="text-gray-600 tracking-wide font-[250] text-[90%] ">
                {project.description}
              </h4>
              <div className="tags flex items-center gap-1 mt-3">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-20 txt flex justify-end">
              <a className=" text-[90%] link-anim">
                {expandedProjectIndex === index ? "close" : "learn more"}
              </a>
            </div>
          </div>

          {expandedProjectIndex === index && (
            <div className="mt-4 w-full flex justify-between">
              <a href="/">teh website</a>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus repellendus corporis est soluta, atque quam voluptatum
                at laboriosam quasi repudiandae, ipsum tenetur voluptatibus.
                Aspernatur laborum nihil magni quos dolores, qui natus veniam
                dolorem veritatis hic culpa et consequatur repudiandae cumque?
                Nemo ullam repellat assumenda asperiores optio odio quisquam
                enim ex nulla totam, at voluptate aspernatur perferendis,
                distinctio id placeat modi rerum minus sunt alias amet
                laboriosam? Provident sequi repudiandae consectetur?
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
