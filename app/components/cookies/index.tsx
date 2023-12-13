"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Cookies = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setShow(false);
    }
  }, []);

  const close = () => {
    setShow(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      localStorage.removeItem("cookiesAccepted");
    }
  }, []);

  return (
    <>
      {show && (
        <div className="cookies bg-[#fff] backdrop-blur md:whitespace-nowrap fixed bottom-3 md:bottom-5 w-fit z-[9999] left-2 md:left-5 ">
          <div className="w-full h-full p-6 flex items-center justify-between">
            <div className="flex items-center gap-5 pr-6 font-[450]">
              <Image src={"/cookie.svg"} alt="" width={23} height={23} />

              <p>
                This website uses <a href="/" className="underline expand font-[400]">cookies</a> to
                enhance your experience.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={close} className=" text-white expand hover:brightness-90 transition-all duration-300 p-3 flex delay int justify-center items-center whitespace-nowrap gap-2.5 pb-2.5 z-[9999] px-8 w-full text-center bg-[#272727] rounded-full">
                I Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
