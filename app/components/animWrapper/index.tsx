"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

interface AnimationWrapperProps {
  children: React.ReactNode;
  stagger?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  stagger,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  useEffect(() => {
    const wrapperElement = wrapperRef.current;

    if (inView) {
      const tl = gsap.timeline({ defaults: { opacity: 0, y: 30 } });

      tl.fromTo(
        wrapperElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.35, delay: stagger || 0 }
      );
    }
  }, [inView, stagger]);

  return (
    <div ref={wrapperRef} className="relative opacity-0 h-fit">
      <div ref={inViewRef}>{children}</div>
    </div>
  );
};

export default AnimationWrapper;
