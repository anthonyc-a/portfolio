"use client";

import "./css/globals.scss";
import "./css/webfonts/britti-sans-variable.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "./components/header";
import Cursor from "./components/cursor";
import Footer from "./components/footer";
import { CustomEase } from "gsap/all";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;

    if (wrapper) {
      let yPos = 0; // To store the current Y position

      const scrollTrigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${wrapper.offsetHeight}`, // Adjust end based on wrapper height
        scrub: true,
        onUpdate: (self) => {
          const progress: any = self.progress.toFixed(2);
          const friction = 2 - progress * 1;

          // Calculate the new Y position
          const newYPos = -(progress * 10) * friction;

          // Update the position only if it has changed
          if (newYPos !== yPos) {
            yPos = newYPos;
            gsap.to(wrapper, {
              y: newYPos + "%",
              duration: 1,
              ease: 'power4.out',
              overwrite: "auto", // Overwrite previous animations to avoid conflicts
            });
          }
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <Cursor />
        <div ref={wrapperRef} className="friction-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
