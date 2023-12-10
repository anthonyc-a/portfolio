"use client";

import Image from "next/image";
import React, { useState } from "react";
import AnimationWrapper from "../animWrapper";
import { IoIosLink } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import Info from "./info";

const projects = [
  {
    imageSrc: "/double.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Double",
    description: "Marketing Agency",
    year: "Sept '23",
    website: "double-agency.com",
    tags: ["UI/UX", "Web Design", "Front-End", "Consultancy"],
    content: {
      brief:
        "The brief for this project was to make design changes to the website in whichever manner I deemed fit. I carefully analyzed the existing design and identified areas that required improvement. By utilizing my UI/UX design skills, I proposed and implemented changes that enhanced the website's visual appeal, user experience, and overall performance.",
      process:
        "To fulfill the brief, I followed a systematic process. Firstly, I conducted a thorough review of the website's design and identified areas that needed improvement. I then generated design concepts and prototypes using Figma, ensuring alignment with the client's branding and target audience. Collaborating with the development team, I implemented the approved design changes using React, Gatsby, and SCSS. Throughout the process, I actively sought feedback from stakeholders and made iterative improvements based on their input.",
      outcome:
        "By the end of the contract, I successfully made noticeable visual and performance improvements to the Double Agency website. These changes positively impacted various aspects, including search engine optimization (SEO), analytics, and load time. Additionally, my contributions helped the team make an informed decision regarding the best framework to use for their new website and future client projects.",
    },
  },
  {
    imageSrc: "/verve.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Verve TV ",
    description: "Streaming Service",
    year: "Aug '22",
    website: "twitter.com/vervetvofficial",
    tags: ["Full-Stack", "API", "UI/UX", "Consultancy"],
    content: {
      brief:
        "The project's brief was to create a high-quality MVP application for Verve TV. The aim was to leverage Next.js, styled components, and Tailwind CSS to deliver a seamless and visually appealing user experience. Additionally, the application needed to integrate AWS for user management and streaming functionalities.",
      process:
        "To meet the project's goals, I followed a structured process. Initially, I collaborated closely with the Verve TV team to understand their vision and requirements. Next, I developed wireframes and interactive prototypes using Figma, ensuring a user-centric design approach. Once the design was approved, I started implementing the MVP application using Next.js, styled components, and Tailwind CSS. Throughout the development process, I continuously tested and iterated on the features to ensure optimal performance and usability.",
      outcome:
        "As a result of my contributions, Verve TV successfully launched its MVP application. The application showcased a seamless user interface, visually appealing design, and efficient streaming capabilities. The integration of AWS facilitated smooth user management and high-quality streaming experiences. The project's outcome exceeded expectations, setting a strong foundation for future development and growth of Verve TV.",
    },
  },

  {
    imageSrc: "/archvizual.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Archvizual",
    description: "Visualisation Studio",
    year: "Jan '21",
    website: "archvizual-redesign.netlify.app",
    tags: ["Web Design", "CMS", "Full-Stack", "Art Direction"],
    content: {
      brief:
        "The brief for this project was to develop a temporary solution for archvizual.com, a renowned 3D designer's portfolio website. The goal was to showcase their work while their main website development was delayed. The solution needed to be lightweight and visually appealing, aligning with the designer's branding and design aesthetics.",
      process:
        "To meet the project's goals, I followed a structured process. Firstly, I closely collaborated with the Archvizual team to understand their requirements and the designer's vision. I conducted a thorough analysis of the existing design assets and gathered insights to inform my design decisions. Leveraging Figma, React, Gatsby, Styled Components, and Contentful CMS, I developed a visually appealing and user-friendly portfolio website. Throughout the process, I maintained open communication with the client and incorporated their feedback to ensure the final product met their expectations.",
      outcome:
        "As a result of my contributions, I successfully delivered a lightweight and visually appealing temporary portfolio website for Archvizual in under a week. The website effectively showcased the designer's work and maintained consistency with their desired branding and design aesthetics. By utilizing basic design principles with intuitive animations, I ensured a seamless user experience. The temporary solution served its purpose by providing an efficient platform for the designer to exhibit their work before their main website was complete.",
    },
  },
  {
    imageSrc: "/snapi.png",
    altText: "Double",
    width: 180,
    height: 180,
    title: "Snapi",
    description: "Audience Activation",
    year: "Jul '22",
    website: "snapi.com",
    tags: ["UI/UX", "Web Design", "Front-End", "Art Direction"],
    content: {
      brief:
        "The brief for this project was to leverage my expertise in UI/UX design and front-end development to enhance Snapi's audience activation product. The goal was to implement new features that would improve user engagement and bridge any usability gaps through thoughtful and intuitive design.",
      process:
        "To fulfill the brief, I followed a structured process. Firstly, I collaborated closely with the Snapi team to understand their product vision and user requirements. I conducted user research and gathered insights to inform the design and development process. Using Figma, I created wireframes and interactive prototypes that aligned with the user-centric design approach. Once the design was approved, I utilized React, Next.js, Styled Components, and Tailwind CSS to implement the front-end functionalities. Throughout the process, I continuously tested and iterated on the design and functionality to ensure a seamless and engaging user experience.",
      outcome:
        "As a result of my contributions, Snapi's audience activation product saw significant improvements in user engagement and usability. The new functionalities I implemented successfully enhanced the overall user experience and eliminated gaps in usability. By leveraging my skills in Figma, React, Next.js, Styled Components, and Tailwind CSS, I created an intuitive and visually appealing interface that drove user engagement and satisfaction.",
    },
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
          className="project bg-white py-6 md:py-8 md:pt-7 max-h-[2000px] transition-all h-fit  p-4 md:p-8"
          onClick={() => handleProjectClick(index)}
        >
          <AnimationWrapper>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 ">
              <div className="index txt  md:absolute md:top-0 md:right-0">
                <span className="text-[#1a1a1a] font-[450] md:font-[400] text-[85%] md:text-[90%] absolute  md:relative top-0 right-0">
                  001 — 0{index + 1}
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
                <h4 className="leading-[1] md:leading-[1.5]   text-[100%]">
                  {project.title}
                </h4>
                <h4 className=" tracking-wide font-[300] md:font-[300] text-[87%] ">
                  {project.description}
                </h4>
                <div className="tags flex  md:flex-wrap items-center gap-1 gap-y-1.5 mt-2">
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
                <button className="int expand main-btn flex justify-center w-full md:w-32 items-center gap-3 bottom-0 right-0 p-2 md:p-2.5 md:pb-2 px-4 border border-[#999] rounded-full">
                  <a className="expand text-[100%] int main-btn md:text-[95%] font-[400] pb-0.5 whitespace-nowrap">
                    {expandedProjectIndex === index ? "close" : "details"}
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
                    } transition expand int -translate-y-0.5 `}
                  />
                </button>
              </div>
            </div>

            {expandedProjectIndex === index && (
              <div ref={inViewRef}>
                <Info inView={inView} project={project} />
              </div>
            )}
          </AnimationWrapper>
        </div>
      ))}
      {projects.length > 3 && (
        <div className="w-full  relative flex items center rounded-[4px]">
          <div
            className="flex expand justify-center  w-full items-center gap-3 bottom-0 right-0 mt-10 md:mt-16 txt"
            onClick={() => setShowMore(!showMore)}
          >
            <div className="w-full absolute top-1/2 rounded-sm -translate-y-1/2 h-[1px] gradient-line" />

            <a className="expand absolute top-1/2 -translate-y-1/2 flex gap-2 bg-[#f8f8f8] tag cursor-pointer mx-auto text-[90%] text-center p-2 px-4 md:px-2 w-fit font-[400] pb-1 whitespace-nowrap">
              <span className="expand">
                {showMore ? "Show Less" : "show more"}
              </span>
              {showMore ? " -" : " +"}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
