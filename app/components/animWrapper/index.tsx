'use client'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

interface AnimationWrapperProps {
    children: React.ReactNode;
    stagger?: number; // New prop for stagger
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, stagger }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 1, // Percentage of element visibility required to trigger animation
    });

    useEffect(() => {
        const wrapperElement = wrapperRef.current;

        if (inView) {
            const tl = gsap.timeline({ defaults: { opacity: 0, y: 50 } });

            tl.fromTo(
                wrapperElement,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.35, delay: stagger || 0 } // Use the stagger prop if provided, otherwise default to 0
            );
        }
    }, [inView, stagger]);

    return (
        <div ref={wrapperRef} className="relative opacity-0">
            <div ref={inViewRef}></div>
            {children}
        </div>
    );
};

export default AnimationWrapper;
