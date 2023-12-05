import React from "react";

const Socials = () => {
  return (
    <div className="relative">
      <ul className="flex relative txt items-center gap-6 md:gap-8">
        <li className="link-anim">
          <a href="https://www.linkedin.com/in/anthony-animba" target="_blank" rel="noreferrer" className="rise int">
            LinkedIn
          </a>
        </li>
        <li className="link-anim">
          <a href="https://instagram.com/aarkyvstudios" target="_blank" rel="noreferrer" className="rise int">
            Instagram
          </a>
        </li>
        <li className="link-anim ">
          <a href="https://github.com/anthonyc-a" target="_blank" rel="noreferrer" className="rise int">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
