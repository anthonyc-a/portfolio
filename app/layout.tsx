"use client";

import "./css/webfonts/britti-sans-variable.css";
import "./css/globals.scss";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "./components/header";
import Footer from "./components/footer";
import Cursor from "./components/cursor";
import CursorWrapper from "./contexts/cursorContext";
import Scrollbar from "./components/scrollbar";
import Cookies from "./components/cookies";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <meta charSet="utf-8" />
        <title>
          Anthony Animba - Digital Designer and Full-Stack Developer
        </title>
        <meta
          name="description"
          content="I'm a freelance designer and developer currently based in London."
        />
        <meta name="author" content="Anthony Animba" />
        <meta name="keywords" content="Anthony Animba, Designer, Developer" />
        <meta property="og:image" content="/prev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <CursorWrapper>
        <body>
          <Cursor />
          <Scrollbar />
          <Cookies />
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </CursorWrapper>
    </html>
  );
}
