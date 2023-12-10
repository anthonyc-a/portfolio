import Image from "next/image";
import React, { useEffect, useState } from "react";

const Scrollbar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);

      if (scrollY < prevScrollY || scrollY < windowHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollY > prevScrollY) {
        setIsVisible(false);
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollY]);

  return (
    <div
      className={`fixed hidden md:flex w-[240px] items-center  gap-6  z-[50] transition-all bg-white rounded-full bottom-6 right-6 p-3 px-4 ${
        isVisible ? "opacity-100 shadow" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="w-full bg-gray-200 h-[1px]">
        <div
          className="h-full bg-[#1a1a1a]"
          style={{
            width: `${scrollPercentage}%`,
          }}
        ></div>
      </div>
      <a
        href="/"
        className="opacity-60 expand flex items-center gap-2 transition-all txt int  hover:opacity-100 "
      >
         <Image
          src="/download.svg"
          alt=""
          width={14}
          height={14}
          className="rotate-180 expand invert"
        />
       
      </a>
    </div>
  );
};

export default Scrollbar;
