import React from "react";
import { IoIosLink } from "react-icons/io";
import { ScaleLoader } from "react-spinners";

const Info = ({ inView, project }: any) => {
  return (
    <div className="mt-8 md:mt-8 relative w-full lg:md:w-[65%] flex flex-col ml-auto ">
      <h4 className="mb-1 text-[90%]">
        01. Brief
        <div className="divide my-1.5" style={{ width: inView ? "100%" : 0 }} />
      </h4>
      <p className="w-full">{project.content.brief}</p>
      <br />
      <h4 className="mb-1  text-[90%]">
        02. Process
        <div
          className="divide my-1.5 delay-50"
          style={{ width: inView ? "100%" : 0 }}
        />
      </h4>
      <p className="w-full">{project.content.process}</p>
      <br />
      <h4 className="mb-1 text-[90%]">
        03. Outcome
        <div className="divide my-1.5" style={{ width: inView ? "100%" : 0 }} />
      </h4>
      <p className="w-full">{project.content.outcome}</p>
      <div className="flex mt-12  items-center justify-between w-full">
        {project.website === "snapi.com" ? (
          <div className="tag flex gap-1 items-center">
            <ScaleLoader color="#1a1a1a" height={16} width={1} className="scale-[0.5]" />

            in progress
          </div>
        ) : (
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
        )}

        <div className="tag">{project.year}</div>
      </div>
    </div>
  );
};

export default Info;
