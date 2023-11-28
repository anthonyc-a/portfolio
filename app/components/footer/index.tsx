import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] mt-24 p-6 pt-24 pb-8" id="contact">
      <span className="txt p-3 px-4 mx-auto border block w-fit mb-8 text-[#999] border-[#999] rounded-full">
        available for work
      </span>
      <h1 className="mx-auto flex items-center text-white tracking-[1px] w-fit uppercase font-[400] text-[112px]">
        Let&apos;s Talk{" "}
        <Image
          src="/smiley.svg"
          alt=""
          width={40}
          height={40}
          className="ml-6"
        />
      </h1>
      <div className="w-full txt text-[80%] flex items-center text-white justify-between mt-28">
        <div>
          <h5>Design & Development:</h5>
          Anthony Animba
        </div>
        <div>
          <h5> more:</h5>
          <div className="flex gap-1.5 items-center">download cv
          <Image src="/download.svg" alt="" width={13} height={13} />
          </div>
        </div>
        <div>
          <h5>socials:</h5>

          <ul className="flex items-center gap-6">
            <li>linkedin</li>
            <li>instagram</li>
            <li>github</li>
          </ul>
        </div>
        <div>
          <h5>works from:</h5>
          2021-2023
        </div>

        <a href="#">back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
