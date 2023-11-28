import Image from "next/image";
import React from "react";

const projects = [
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Double",
    description: "Marketing Agency",
    year: 2023,
  },
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Verve TV",
    description: "Streaming Service",
    year: 2022,
  },
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Archvizual",
    description: "3D Visualisation",
    year: 2021,
  },

  // Add more project objects as needed
];

const Project = () => {
  return (
    <div className="col-span-3 flex flex-col gap-4">
      {projects.map((project, index) => (
        <div key={index} className=" bg-white hover:brightness-95 flex items-center justify-between gap-8 p-4 px-8">
          <Image src={project.imageSrc} alt={project.altText} width={project.width} height={project.height} />
          <div className="w-40">
            <h4 className="leading-[0.9]">{project.title}</h4>
            <span className="text-gray-500 txt">{project.description}</span>
          </div>
          <span className="txt p-1 pb-0.5 px-4 border border-[#999] rounded-full">{project.year}</span>
          <button className="">Learn more</button>
        </div>
      ))}
    </div>
  );
};

export default Project;
