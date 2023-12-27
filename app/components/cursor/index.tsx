"use client";

import { useCursor } from "../../contexts/cursorContext";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Cursor: React.FC<any> = ({}: any): JSX.Element => {
  const cursorRef = useRef<any>(null);
  const imgRef = useRef<any>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursorType, setCursorType] = useState("");

  const { imageAddress } = useCursor();

  const cursorFunction = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const mouseX = clientX - cursorRef?.current?.clientWidth / 2;
    const mouseY = clientY - cursorRef?.current?.clientHeight / 2;
    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`;
    cursorRef.current.style.opacity = "1";

    const hoveredElement = document.elementFromPoint(clientX, clientY);
    if (hoveredElement?.classList.contains("mail")) {
      setCursorType("mail");
    } else if (hoveredElement?.classList.contains("archImg")) {
      setCursorType("archImg");
    } else if (hoveredElement?.classList.contains("expand")) {
      setCursorType("expand");
    } else {
      setCursorType("");
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    cursorFunction();
    handleScroll();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="cursor txt" ref={cursorRef}>
      <div className={`inner ${cursorType === "expand" ? "expand" : ""}`}></div>
      <div
        className={`${
          cursorType === "mail" ? "" : "hidden opacity-0"
        } w-40 h-40 gap-1 absolute cursor-none enlarge z-50 font-[500] flex bg-white rounded-full justify-center items-center`}
      >
        <span>get in touch</span>
        <Image
          src="/followArrow.svg"
          alt=""
          width={7}
          height={7}
          className="int"
        />
      </div>
      <div
        className={`z-50 cursorImg w-[350px] absolute h-[350px] overflow-hidden ${
          cursorType === "archImg" ? "open" : "hidden opacity-0"
        } `}
      >
        <Image
          src={imageAddress ? imageAddress : ''}
          alt=""
          width={350}
          height={350}
          ref={imgRef}
          loading="eager"
          placeholder="blur"
          className="w-full absolute rounded-[3px]  top-0 left-0"
        />
      </div>
    </div>
  );
};

export default Cursor;
