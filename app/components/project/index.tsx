import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className=" bg-white col-span-3 flex items-center justify-between gap-8 p-4 px-8">
      <Image src="/double.png" alt="" width={180} height={180} />
      <div>
        <h4>Double</h4>
        <span className="text-gray-500">Marketing Agency</span>
      </div>
      <span>2023</span>
      <button>Learn more</button>
    </div>
  );
};

export default Project;
