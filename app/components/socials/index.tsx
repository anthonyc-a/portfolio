import React from "react";

const Socials = () => {
  return (
    <div className="relative">
      <ul className="flex relative txt items-center gap-6 md:gap-8">
        <li className="link-anim">
          <a className="rise">LinkedIn</a>
        </li>
        <li className="link-anim">
          <a className="rise">Instagram</a>
        </li>
        <li className="link-anim">
          <a className="rise">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
