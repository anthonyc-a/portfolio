'use client'

import React, { useEffect, useRef, useState } from "react";

const Cursor: React.FC<any> = ({
}: any): JSX.Element => {
  const cursorRef = useRef<any>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const cursorFunction = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const mouseX = clientX - cursorRef?.current?.clientWidth / 2;
    const mouseY = clientY - cursorRef?.current?.clientHeight / 2;
    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`;
    cursorRef.current.style.opacity = 1;

    const hoveredElement = document.elementFromPoint(clientX, clientY);
    if (hoveredElement?.classList.contains("mail")) {
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 ) scale(1.35)`;
      cursorRef.current.innerText = "Contact";
      cursorRef.current.style.width = '100px';
      cursorRef.current.style.height = '100px';
      cursorRef.current.style.color = "white";
      cursorRef.current.style.textAlign = "center";
    } else {
      cursorRef.current.innerText = "";
      cursorRef.current.style.width = '';
      cursorRef.current.style.height = '';
      cursorRef.current.style.color = "";
      cursorRef.current.style.textAlign = "";
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    cursorFunction();
  }, [cursorRef]);

  return (
    <div className="cursor txt" ref={cursorRef}>
    </div>
  );
};

export default Cursor;