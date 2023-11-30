'use client'

import React from "react";

const Contact = () => {
  const setLocation = () => {
    window.location.href = "#contact";
  };

  return (
    <button
      onClick={setLocation}
      className="appear p-3 flex delay items-center whitespace-nowrap gap-3 pb-2.5 z-[9999] px-8 w-fit bg-[#272727] rounded-full"
    >
      Let&apos;s talk
    </button>
  );
};

export default Contact;
