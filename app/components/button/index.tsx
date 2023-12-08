import Image from "next/image";
import React from "react";

const Button = () => {
  const setLocation = () => {
    window.location.href = "#about";
  };

  return (
    <button
      onClick={setLocation}
      className="appear expand hover:bg-white main-btn dark-btn hover:text-[#1a1a1a] transition-all int  p-2.5 flex items-center gap-3 pt-3 px-5 border w-fit border-white rounded-full"
    >
      Scroll for more
      <div className="arrow h-4 flex items-center overflow-hidden invert">
        <div className="inner">
          <Image
            src="/followArrow.svg"
            alt=""
            width={7}
            height={7}
            className={`rotate-[135deg] int`}
          />
        </div>
      </div>
    </button>
  );
};

export default Button;
