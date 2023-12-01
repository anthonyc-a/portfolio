"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Socials from "../socials";
import AnimationWrapper from "../animWrapper";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const Footer = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false, // Only trigger animation once
    threshold: 0.7, // Percentage of element visibility required to trigger animation
  });

  const imgRef = useRef<any>(null);

  useEffect(() => {
    const el = imgRef.current;

    if (inView) {
      gsap.to(el, {
        rotation: 180, // Rotate the element by 180 degrees
        duration: 0.5,
        delay: 0.5,
      });
    }
  }, [inView]);

  return (
    <footer
      className="w-full bg-[#1a1a1a] mt-20 p-6 pt-24 pb-8"
      id="contact"
      ref={inViewRef}
    >
      <AnimationWrapper>
        <span className="txt p-3 px-4 mx-auto border block w-fit mb-8 text-[#fff] border-[#999] rounded-full">
          available for work
        </span>
        <h1 className="mx-auto flex items-center text-white tracking-[1px] w-fit uppercase font-[450] text-[56px] whitespace-nowrap md:text-[112px]">
          Let&apos;s Talk{" "}
          <div className="roll">
            <Image
              src="/smiley.svg"
              alt=""
              width={40}
              height={40}
              className="ml-6 w-8 md:w-[40px] h-8 md:h-[40px]"
              ref={imgRef}
            />
          </div>
        </h1>
      </AnimationWrapper>

      <AnimationWrapper>
        <div className="w-full xl:container xl:mx-auto txt text-[80%] flex flex-wrap items-center text-white justify-between mt-24">
          <div className="mb-8 md:mb-0">
            <h5>Design & Development:</h5>
            Anthony Animba
          </div>
          <div className="mb-8 md:mb-0">
            <h5> more:</h5>
            <div className="flex gap-1.5 items-center">
              download cv
              <Image
                src="/download.svg"
                alt=""
                width={13}
                height={13}
                className="opacity-60"
              />
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <h5>socials:</h5>

            <Socials />
          </div>
          <div className="md:hidden w-20"></div>
          <div className="mt-4 md:mt-0">
            <h5>works from:</h5>
            2021—2023
          </div>

          <a href="/" className="tag mt-4 ml-auto md:ml-0 md:mt-0">back to top</a>
        </div>
      </AnimationWrapper>
    </footer>
  );
};

export default Footer;
