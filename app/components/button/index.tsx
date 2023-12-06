import Image from "next/image";
import React from "react";

const Button = () => {
  const setLocation = () => {
    window.location.href = "#about";
  };

  return (
    <button
      onClick={setLocation}
      className="appear hover:bg-white hover:text-[#1a1a1a] transition-all int  p-2.5 flex items-center gap-3 pt-3 px-5 border w-fit border-white rounded-full"
    >
      Scroll for more
      <Image src="/downArrow.svg" alt="" width={7} height={7} className="int mix-blend-difference" />
    </button>
  );
};

export default Button;
