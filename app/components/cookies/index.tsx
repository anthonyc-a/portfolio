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
            <div className="flex items-center gap-7 pr-7 font-[450]">
              <Image src={"/cookie.svg"} alt="" width={23} height={23} />
              <div className="flex flex-col">
              <h4>Cookies</h4>
              <p className="opacity-[0.87">
                This website uses <a href="/" className="">cookies</a> to
                enhance your experience.
              </p>
              </div>
          
            </div>
            <div className="flex gap-4">
              <button onClick={close} className=" text-white expand hover:brightness-[0.8] transition-all duration-300 p-3 flex delay int justify-center items-center whitespace-nowrap gap-2.5 pb-2.5 z-[9999] px-8 w-full text-center bg-[#222] rounded-full">
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
