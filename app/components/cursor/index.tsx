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
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    cursorFunction();
  }, [cursorRef]);

  return (
    <div className="cursor" ref={cursorRef}>
    </div>
  );
};

export default Cursor;