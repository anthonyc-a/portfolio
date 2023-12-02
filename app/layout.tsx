"use client";

import "./css/webfonts/britti-sans-variable.css";
import "./css/globals.scss";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "./components/header";
import Footer from "./components/footer";
import Cursor from "./components/cursor";

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
              duration: 0.5,
              ease: "power4.out",
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
      <head>
        <meta charSet="utf-8" />
        <title>
          Anthony Animba - Digital Designer and Full-Stack Developer
        </title>
        <meta
          name="description"
          content="Digital Designer and Full-Stack Developer Currently based in London"
        />
        <meta name="author" content="Anthony Animba" />
        <meta name="keywords" content="Anthony Animba, Designer, Developer" />
        <meta property="og:image" content="/prev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <title>Your Page Title</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
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
