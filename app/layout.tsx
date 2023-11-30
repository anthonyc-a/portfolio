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
          const progress: any = self.progress.toFixed(3);
          const friction = 2 - progress * 1;

          // Calculate the new Y position
          const newYPos = -(progress * 50) * friction;

          // Update the position only if it has changed
          if (newYPos !== yPos) {
            yPos = newYPos;
            gsap.to(wrapper, {
              y: newYPos + "%",
              duration: 0.65,
              ease: CustomEase.create(
                "custom",
                "M0,0 C0.084,0.61 0.033,0.846 0.1,0.9 0.175,0.962 0.374,1 1,1 "
              ),
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
