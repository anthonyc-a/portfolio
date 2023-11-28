import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] mt-20 p-6 pt-24 pb-6">
      <span className="txt p-2 px-3 mx-auto border block w-fit mb-7 text-[#999] border-[#999] rounded-full">
        available for work
      </span>
      <h1 className="mx-auto flex items-center text-white tracking-[1px] w-fit uppercase font-[400] text-[88px]">
        Let&apos;s Talk
      </h1>
      <div className="w-full txt flex items-center text-white justify-between mt-32">
        <div>
          <h5>created by:</h5>
          Anthony Animba
        </div>
        <div>
          <h5> more:</h5>
          <div className="">download my cv</div>
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
          2020-2023
        </div>

        <div>back to top</div>
      </div>
    </footer>
  );
};

export default Footer;
